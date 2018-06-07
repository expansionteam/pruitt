import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Madlib from './Madlib';
import { Provider } from 'rebass';

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Madlib />
                </div>
            </Provider>
        );
    }
}

export default App;
