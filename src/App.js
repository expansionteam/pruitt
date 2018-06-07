import React, { Component } from 'react';
import './App.css';
import Madlib from './Madlib';
import { Provider, Subhead, Heading } from 'rebass';
import CurvedHeader from './CurvedHeader';
import DailyShowLogo from './assets/dailyshow-logo.png';
import styled from 'styled-components';

const Logo = styled.img`
    margin-bottom: 2rem;
    margin-top: 1rem;
`;

class App extends Component {
    render() {
        return (
            <Provider>
                <div className="App">
                    <Logo src={DailyShowLogo} width={300} />
                    <Heading>Scott Pruitt</Heading>
                    <Subhead>Corruption Generator</Subhead>
                    <Madlib />
                </div>
            </Provider>
        );
    }
}

export default App;
