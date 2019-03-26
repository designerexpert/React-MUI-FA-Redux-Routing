import React, { Component } from 'react';
import './RuleManager.css';

class RuleManager extends Component {
	state = {
		newRuleName: '',
		rulesFilter: '',
		selectedRule: 0,
		rules: [
			{ label: 'MNC ujkiwuke', active: false, code: 'SELECT * from MNC ujkiwuke' },
			{ label: 'MNC gifucumz', active: false, code: 'SELECT * from MNC gifucumz' },
			{ label: 'MNC gaawezar', active: true, code: 'SELECT * from MNC gaawezar' },
			{ label: 'MNC adcobeho', active: false, code: 'SELECT * from MNC adcobeho' },
			{ label: 'MNC nulubduj', active: false, code: 'SELECT * from MNC nulubduj' },
			{ label: 'MNC rocpidoo', active: false, code: 'SELECT * from MNC rocpidoo' },
			{ label: 'MNC piznucko', active: false, code: 'SELECT * from MNC piznucko' },
			{ label: 'MNC kaguzsen', active: false, code: 'SELECT * from MNC kaguzsen' },
			{ label: 'MNC fobezinc', active: false, code: 'SELECT * from MNC fobezinc' },
			{ label: 'MNC tenezrig', active: false, code: 'SELECT * from MNC tenezrig' },
			{ label: 'MNC uginifej', active: false, code: 'SELECT * from MNC uginifej' },
			{ label: 'MNC zugunowa', active: false, code: 'SELECT * from MNC zugunowa' },
			{ label: 'MNC ecnorhed', active: false, code: 'SELECT * from MNC ecnorhed' },
			{ label: 'MNC limokmop', active: false, code: 'SELECT * from MNC limokmop' },
			{ label: 'MNC bepenabc', active: false, code: 'SELECT * from MNC bepenabc' },
			{ label: 'MNC fojwugaw', active: false, code: 'SELECT * from MNC fojwugaw' },
			{ label: 'MNC bewpikoz', active: false, code: 'SELECT * from MNC bewpikoz' },
			{ label: 'MNC mijriwmo', active: false, code: 'SELECT * from MNC mijriwmo' },
			{ label: 'MNC ciftarta', active: false, code: 'SELECT * from MNC ciftarta' },
			{ label: 'MNC ripedhet', active: false, code: 'SELECT * from MNC ripedhet' },
			{ label: 'MNC zesmucah', active: false, code: 'SELECT * from MNC zesmucah' },
			{ label: 'MNC gepapzad', active: false, code: 'SELECT * from MNC gepapzad' },
			{ label: 'MNC lizazuta', active: false, code: 'SELECT * from MNC lizazuta' },
			{ label: 'MNC urfozrow', active: false, code: 'SELECT * from MNC urfozrow' },
			{ label: 'MNC vikuhfeb', active: false, code: 'SELECT * from MNC vikuhfeb' },
			{ label: 'MNC kebcupiv', active: false, code: 'SELECT * from MNC kebcupiv' },
			{ label: 'MNC burrucea', active: false, code: 'SELECT * from MNC burrucea' },
			{ label: 'MNC luefukuz', active: false, code: 'SELECT * from MNC luefukuz' },
			{ label: 'MNC tovafref', active: false, code: 'SELECT * from MNC tovafref' },
			{ label: 'MNC guricfos', active: false, code: 'SELECT * from MNC guricfos' },
			{ label: 'MNC gubakeki', active: false, code: 'SELECT * from MNC gubakeki' },
			{ label: 'MNC pabappol', active: false, code: 'SELECT * from MNC pabappol' }
		]
	};

	handleRulesFilter = (e) => {
		this.setState({ rulesFilter: e.target.value });
	};

	handleRuleToggle = (e, ruleIndex) => {
		const copyOfRules = JSON.parse(JSON.stringify(this.state.rules));
		const foundRule = copyOfRules[ruleIndex];
		foundRule.active = !foundRule.active;
		this.setState({ rules: copyOfRules });
	};

	handleSelectRule = (e, ruleIndex) => {
		this.setState({ selectedRule: ruleIndex });
	};

	generateRulesList = (rules, filter) => {
		return rules.map((rule, ruleIndex) => {
			if (rule.label.toLowerCase().includes(filter.toLowerCase())) {
				return (
					<tr
						key={`rule_row_${rule.label}`}
						className={`rule-row ${ruleIndex === this.state.selectedRule ? 'selected-rule' : ''}`}
					>
						<td className="rule-label rule-label-cell" onClick={(e) => this.handleSelectRule(e, ruleIndex)}>
							{rule.label}
						</td>
						<td className="active-rule-section">
							<input
								type="checkbox"
								name="rule-active"
								id={`${rule.label}`}
								checked={rule.active}
								onChange={(e) => this.handleRuleToggle(e, ruleIndex)}
							/>
						</td>
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
		const ListOfRules = this.generateRulesList(this.state.rules, this.state.rulesFilter);
		return (
			<div className="page-container">
				<div className="left-3">
					<h1>SELECT RULES</h1>
					<input
						className="filter-input"
						type="text"
						name="filter-rules"
						id="filter-rules"
						placeholder="Filter Rules"
						onChange={this.handleRulesFilter}
					/>
					<div className="rules-header-container noscroll">
						<table className="rules-table">
							<thead>
								<tr className="rule-header-row">
									<th className="rule-label-cell">Rule Name</th>
									<th className="rule-active-cell">Active</th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="table-container">
						<table className="rules-table">
							<tbody className="rows-body">{ListOfRules}</tbody>
						</table>
					</div>

					<div className="add-rule-container">
						<input
							className="new-rule-input"
							type="text"
							name="add-new-rule"
							id="add-new-rule"
							placeholder="Add A New Rule"
							value={this.state.newRuleName}
							onChange={this.handleNewRuleName}
						/>
						<button className="rules-button button primary" onClick={this.handleNewRule}>
							Add New Rule
						</button>
					</div>
				</div>
				<div className="right-7">
					<h1>RULE CODE SECTION</h1>
					<textarea
						value={this.state.rules[this.state.selectedRule].code}
						className="rule-code"
						onChange={this.handleRuleCodeChange}
					/>
					<div className="button-row">
						<button className="rules-button button primary" onClick={this.handleSubmitCodeChange}>
							Submit / Change
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default RuleManager;
