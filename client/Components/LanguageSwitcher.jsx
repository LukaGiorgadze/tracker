import React from 'react'
import store from '../Store';
import { setLocale } from 'react-redux-i18n';
import _ from 'lodash';
import { Dropdown, Flag } from 'semantic-ui-react';

const langs = [
	{
		value: 'ge',
		flag: 'ge',
		text: 'ქართული'
	},
	{
		value: 'us',
		flag: 'us',
		text: 'English (US)'
	}
];

export class LanguageSwitcher extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lang: ''
		}
	}

	componentDidMount() {
		this.setState({
			lang: store.getState().i18n.locale
		});
	}
	changeLang = (lang) => {
		if(this.state.lang !== lang && _.find(langs, { value: lang })) {
			store.dispatch(setLocale(lang));
			localStorage.setItem('language', lang);
			this.setState({
				lang: store.getState().i18n.locale
			});
		}
	};
	render() {
		return(
			<Dropdown text="Language" className="BPGSquare">
				<Dropdown.Menu>
					{langs.map((option) =>
						<Dropdown.Item key={option.value} onClick={() => this.changeLang(option.value)} selected={this.state.lang === option.value}>
							<Flag name={option.flag} /> {option.text}
						</Dropdown.Item>
					)}
				</Dropdown.Menu>
			</Dropdown>
		);
	}
}