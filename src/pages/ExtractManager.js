import React, { Component } from 'react';
import SelectTable from './SelectTable';
import './RuleManager.css';

class ExtractManager extends Component {
	state = {
		newExtractName: '',
		sources: [
			{ label: 'HIVE_DB', active: false },
			{ label: 'MYSQL DB', active: false },
			{ label: 'Mongo DB', active: false },
			{ label: 'Postgres DB', active: false },
			{ label: 'IBMDB 2', active: false }
		],
		activeSources: '',
		tables: [
			{ label: 'submissions_table', active: false, source: 'HIVE_DB' },
			{ label: 'customers_table', active: false, source: 'HIVE_DB' },
			{ label: 'ccm_pcp', active: false, source: 'MYSQL DB' }
		],
		activeTables: '',
		columns: [
			{ label: 'first_name', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'last_name', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'phone_number', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'pt_fn', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'ohiwuvit', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'havvupeo', active: false, source: 'HIVE_DB', table: 'submissions_table' },
			{ label: 'sibijput', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'nafcerzeimt', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'maorpenowivalo', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'oloc', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'ejeetbip', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'fatowadj', active: false, source: 'HIVE_DB', table: 'submissions_table' },
			{ label: 'jovivikf', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'cofogiherti', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'nawgelmagtosno', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'riza', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'ikucoklo', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'buzemiva', active: false, source: 'HIVE_DB', table: 'submissions_table' },
			{ label: 'rirehgew', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'giktubkuice', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'numifohupsedeh', active: false, source: 'MYSQL DB', table: 'ccm_pcp' },
			{ label: 'zadt', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'fehkotko', active: false, source: 'HIVE_DB', table: 'customers_table' },
			{ label: 'survosow', active: false, source: 'HIVE_DB', table: 'submissions_table' }
		]
	};

	handleRulesFilter = (e) => {
		this.setState({ rulesFilter: e.target.value });
	};

	handleSourceToggle = (e, index) => {
		const arrCopy = JSON.parse(JSON.stringify(this.state.sources));
		const found = arrCopy[index];
		found.active = !found.active;
		const activeList = arrCopy.map((item) => {
			if (item.active) {
				return item.label;
			}
		});
		this.setState({ sources: arrCopy, activeSources: activeList });
	};

	handleTableToggle = (e, index) => {
		const arrCopy = JSON.parse(JSON.stringify(this.state.tables));
		const found = arrCopy[index];
		found.active = !found.active;
		const activeList = arrCopy.map((item) => {
			if (item.active) {
				return item.label;
			}
		});
		this.setState({ tables: arrCopy, activeTables: activeList });
	};

	handleColumnToggle = (e, index) => {
		const arrCopy = JSON.parse(JSON.stringify(this.state.columns));
		const found = arrCopy[index];
		found.active = !found.active;
		this.setState({ columns: arrCopy });
	};

	handleSelectSource = (e, ruleIndex) => {
		this.setState({ selectedSource: ruleIndex });
	};

	handleSelectTable = (e, ruleIndex) => {
		this.setState({ selectedTable: ruleIndex });
	};

	handleSelectColumn = (e, ruleIndex) => {
		this.setState({ selectedColumn: ruleIndex });
	};

	generateRulesList = (rules, filter) => {
		return rules.map((rule, ruleIndex) => {
			if (rule.label.toLowerCase().includes(filter.toLowerCase())) {
				return (
					<tr
						key={`rule_row_${rule.label}`}
						className={`rule-row ${ruleIndex === this.state.selectedRule ? 'selected-rule' : ''}`}
						onClick={(e) => this.handleSelectRule(e, ruleIndex)}
					>
						<td className="active-rule-section">
							<input
								type="checkbox"
								name="rule-active"
								id={`${rule.label}`}
								checked={rule.active}
								onChange={(e) => this.handleRuleToggle(e, ruleIndex)}
							/>
						</td>
						<td className="rule-label-cell">{rule.label}</td>
					</tr>
				);
			}
		});
	};

	handleNewRuleName = (e) => {
		this.setState({ newRuleName: e.target.value });
	};

	handleNewRule = (e) => {
		const copyOfRules = JSON.parse(JSON.stringify(this.state.rules));
		const label = this.state.newRuleName;
		copyOfRules.push({ label, active: true, code: '' });
		this.setState({ rules: copyOfRules, newRuleName: '' });
	};

	handleRuleCodeChange = (e) => {
		const rules = JSON.parse(JSON.stringify(this.state.rules));
		const selectedRule = rules[this.state.selectedRule];
		selectedRule.code = e.target.value;
		this.setState({ rules });
	};

	handleSubmitCodeChange = (e) => {
		// HTTP REQUEST TO SUBMIT A CHANGE IN CODE: POSE
	};

	render() {
		return (
			<div className="page-container">
				<div className="left-3">
					<h1>SELECT RULES</h1>
					<div className="add-row-container">
						<input
							className="new-row-input"
							type="text"
							name="add-new-rule"
							id="add-new-rule"
							placeholder="Name for Extract"
							value={this.state.newRuleName}
							onChange={this.handleNewRuleName}
						/>
					</div>
					<SelectTable
						title="DB Sources"
						rows={this.state.sources}
						maxHeight={this.state.activeSources === '' ? 70 : 15}
						select={this.handleSelectSource}
						toggle={this.handleSourceToggle}
					/>
					<SelectTable
						title="Tables"
						rows={this.state.activeSources === '' ? [ {} ] : this.state.tables}
						maxHeight={this.state.activeTables === '' ? 70 : 30}
						select={this.handleSelectTable}
						toggle={this.handleTableToggle}
						filters={[ [ 'source', this.state.activeSources ] ]}
					/>
					<SelectTable
						title="Columns"
						rows={this.state.activeTables === '' ? [ {} ] : this.state.columns}
						maxHeight={40}
						select={this.handleSelectColumn}
						toggle={this.handleColumnToggle}
						filters={[ [ 'source', this.state.activeSources ], [ 'table', this.state.activeTables ] ]}
					/>
				</div>
				<div className="right-7">
					<h1>EXTRACT DETAILS</h1>
					<div className="button-row">
						<button className="rows-button button primary" onClick={this.handleSubmitCodeChange}>
							Submit / Change
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ExtractManager;
