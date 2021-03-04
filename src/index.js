import React from 'react';
import ReactDOM from 'react-dom';
import  { SpeechProvider }  from '@speechly/react-client';
import { Provider } from './context/context'

import App from './App';
import './index.css';

ReactDOM.render(
<SpeechProvider appId="fc707194-fee4-4749-95d2-c60509bc513a" language="en-US"> 
    <Provider>
    <App />
    </Provider> 
</SpeechProvider>
,document.getElementById('root')
);