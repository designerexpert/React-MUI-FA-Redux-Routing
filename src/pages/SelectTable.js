import React, { Component } from 'react';
import './RuleManager.css';

const mockData = [
	{ label: 'Test', active: false },
	{ label: 'Prueba', active: false },
	{ label: 'اختبار', active: false },
	{ label: 'тестовое задание', active: false }
];

class SelectTable extends Component {
	state = {
		rows: mockData,
		rowsFilter: '',
		selectedRow: 0
	};

	handleRowsFilter = (e) => {
		this.setState({ rowsFilter: e.target.value });
	};

	handleSelectRow = (e, rowIndex) => {
		if (typeof this.props.select === 'function') {
			this.props.select(e, rowIndex);
			this.setState({ selectedRow: rowIndex });
		} else {
			this.setState({ selectedRow: rowIndex });
		}
	};

	toggleRow = (e, rowIndex) => {
		const copyOfRows = JSON.parse(JSON.stringify(this.state.rows));
		const foundRow = copyOfRows[rowIndex];
		foundRow.active = !foundRow.active;
		this.setState({ rows: copyOfRows });
	};

	handleRowToggle = (e, rowIndex) => {
		if (typeof this.props.toggle === 'function') {
			this.props.toggle(e, rowIndex);
		} else {
			this.toggleRow(e, rowIndex);
		}
	};

	generateRows = (rows, filter) => {
		return rows.map((row, rowIndex) => {
			const rowLabel = `${row.source ? row.source + ' :: ' : ''}${row.table
				? row.table + ' :: '
				: ''}${row.label}`;
			// console.log('FLAG IS!', flag);
			// console.log('LENGTH OF FILTERS IS', this.props.filters.length);
			let flag = 0;
			let filtersLength = 0;
			if (Array.isArray(this.props.filters)) {
				filtersLength = this.props.filters.length;
				this.props.filters.forEach((filter) => {
					console.log('DOES FILTER[1]', filter[1]);
					console.log('INCLUDE row[filter[0]]', row[filter[0]]);
					if (filter[1].includes(row[filter[0]])) {
						flag++;
					}
				});
			}
			if (flag === filtersLength) {
				//IT PASSED ALL FILTERS CASCADING!
				console.log('PASSED CASCADING FILTERS');
				if (row.label.toLowerCase().includes(filter.toLowerCase())) {
					return (
						<tr
							key={`row_row_${row.label}_${rowIndex}`}
							className={`row-row ${rowIndex === this.state.selectedRow ? 'selected-row' : ''}`}
							onClick={(e) => this.handleSelectRow(e, rowIndex)}
						>
							<td className="active-row-section">
								<input
									type="checkbox"
									name="row-active"
									id={`${row.label}`}
									checked={row.active}
									onChange={(e) => this.handleRowToggle(e, rowIndex)}
								/>
							</td>
							<td className="row-label-cell">{rowLabel}</td>
						</tr>
					);
				}
			}
		});
	};

	render() {
		const Rows = this.generateRows(this.props.rows || this.state.rows, this.state.rowsFilter);
		const maxHeight = this.props.maxHeight;
		return (
			<div className="select-table-container" style={{ maxHeight: `${maxHeight}%` }}>
				<div className="rows-header-container noscroll">
					<table className="rows-table">
						<thead>
							<tr className="row-header-row">
								<th className="row-active-cell">Active</th>
								<th className="row-label-cell header">
									<input
										className="filter-input"
										type="text"
										name="filter-rows"
										id="filter-rows"
										placeholder={
											this.props.title ? (
												`${this.props.title} Filter: Search...`
											) : (
												'Label Filter: Search...'
											)
										}
										onChange={this.handleRowsFilter}
									/>
								</th>
							</tr>
						</thead>
					</table>
				</div>
				<div className="table-container">
					<table className="rows-table">
						<tbody className="rows-body">{Rows}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default SelectTable;
