import React from 'react'
import './App.css'
import inv from './assets/invertcolors.svg'

import Routes from './routes'

function App () {
	function themeChange (e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dracula')
		} else {
			document.documentElement.removeAttribute('data-theme')
		}
	}

	return (
		<div className="app">
			<div className="theme-switch-wrapper">
				<img src={inv} alt="Inverter as cores" />
				<label className="theme-switch">
					<input type="checkbox" id="checkbox" onChange={themeChange} />
					<div className="slider round" />
				</label>
			</div>
			<Routes />
		</div>
	)
}

export default App
