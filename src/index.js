import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {DecimalToRoman, RomanToDecimal} from './App'

ReactDOM.render(
	<App>
	    <DecimalToRoman />
    	<RomanToDecimal />
	</App>
	, document.getElementById('root'));

registerServiceWorker();
