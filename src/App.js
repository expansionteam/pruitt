import React, { Component } from 'react';
import './App.css';
import Madlib from './Madlib';
import { Provider, Subhead, Heading } from 'rebass';
import CurvedHeader from './CurvedHeader';
import DailyShowLogo from './assets/dailyshow-logo.png';
import styled from 'styled-components';
import PruittHead from './assets/pruitt-head.png';
import SideBackground from './assets/side-border.png';

const Logo = styled.img`
    margin-bottom: 2rem;
    margin-top: 1rem;
`;

const BorderImage = props => (
    <img
        src={SideBackground}
        style={{ transform: props.left ? 'rotateY(180deg)' : undefined }}
    />
);

class App extends Component {
    render() {
        return (
            <Provider>
                <div
                    className="App"
                    style={{
                        maxWidth: '100vw',
                        display: 'flex',
                        flexFlow: 'row nowrap'
                    }}
                >
                    <BorderImage left />
                    <div style={{ flex: 1 }}>
                        {/* offset by width of Pruitt head to center on DS logo*/}
                        <div style={{ marginLeft: '-100px' }}>
                            <img src={PruittHead} height={100} />
                            <Logo src={DailyShowLogo} width={225} />
                        </div>
                        <Heading
                            style={{
                                fontFamily: 'CarnivalMF',
                                color: '#1F3C81'
                            }}
                        >
                            Scott Pruitt
                        </Heading>
                        <Subhead
                            style={{
                                fontFamily: 'CarnivalMF',
                                color: '#3262CF'
                            }}
                        >
                            Corruption Generator
                        </Subhead>
                        <Madlib />
                    </div>
                    <BorderImage />
                </div>
            </Provider>
        );
    }
}

export default App;
