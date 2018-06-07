import React, { Component } from 'react';
import './App.css';
import Madlib from './Madlib';
import { Provider, Subhead, Flex, Heading, Image } from 'rebass';
import CurvedHeader from './CurvedHeader';
import DailyShowLogo from './assets/dailyshow-logo.png';
import styled from 'styled-components';
import PruittHead from './assets/pruitt-head.png';
import SideBackground from './assets/side-border.png';
import TitleImage from './assets/title.png';

const BorderImage = props => {
    const Img = styled.img`
        @media (max-width: 800px) {
            display: none;
        }
        @media (min-width: 801px) and (max-width: 1300px) {
            display: ${props.left ? 'initial' : 'none'};
        }
    `;
    return (
        <Img
            src={SideBackground}
            style={{ transform: props.left ? 'rotateY(180deg)' : undefined }}
        />
    );
};

const BottomImg = () => {
    const Img = styled.img`
        @media (max-width: 800px) {
            display: block;
        }
    `;
    return <Img src={SideBackground} style={{ transform: 'rotateY(90deg)' }} />;
};

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
                    <Flex
                        pt={'1rem'}
                        direction={'column'}
                        w={'100%'}
                        justify={'flex-start'}
                        style={{
                            flex: 1,

                            paddingLeft: '1rem',
                            paddingRight: '1rem'
                        }}
                    >
                        {/* offset by width of Pruitt head to center on DS logo*/}
                        <Flex
                            justify={'center'}
                            wrap={false}
                            style={{
                                flexWrap: 'nowrap',
                                width: '100%',
                                marginLeft: '-5%',
                                marginRight: '1rem'
                            }}
                        >
                            <img
                                src={PruittHead}
                                style={{
                                    alignSelf: 'center', // lest flexbox stretches img
                                    width: '20%',
                                    maxWidth: 150
                                }}
                            />
                            <img
                                src={DailyShowLogo}
                                style={{
                                    maxHeight: 165,
                                    alignSelf: 'center',
                                    maxWidth: '60%'
                                }}
                            />
                        </Flex>
                        <img
                            style={{
                                marginTop: '1rem',
                                width: '80%',
                                maxWidth: '600px',
                                alignSelf: 'center'
                            }}
                            alt={'The Scott Pruitt Corruption Generator title'}
                            src={TitleImage}
                        />
                        <Madlib />
                    </Flex>
                    <BorderImage />
                </div>
            </Provider>
        );
    }
}

export default App;
