import React from 'react';
import { Box, Text, Flex, Subhead } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewspaperImage from './assets/newspaper.png';
import SmallDailyShowLogo from './assets/small-logo.png';

const IS_TESTING = true;
const LONGEST_POSSIBLE = [
    'Urged a Sign Language-Speaking Chimpanzee',
    'Seats at a University of Kentucky Basketball Game',
    'Have Conversations Without People Hearing'
];

const Newspaper = styled.div`
    padding: 3rem;
    background: url(${NewspaperImage}) no-repeat;
    background-size: 100% 100%;
`;
const Word = styled.span`
    font-weight: bold;
`;

const FooterContainer = styled(Flex)`
    @media (max-width: 800px) {
        img {
            display: none;
        }
    }
`;
class Headline extends React.PureComponent {
    render() {
        const words = IS_TESTING === true ? LONGEST_POSSIBLE : this.props.words;
        return (
            <Box>
                <Newspaper>
                    <Subhead f={[3, 3, 4, 4]} style={{ fontStyle: 'italic' }}>
                        Scott Pruitt {words[0]} to Get Him {words[1]} So He
                        Could {words[2]}.
                    </Subhead>
                    <FooterContainer
                        my={3}
                        mt={'1rem'}
                        width={'100%'}
                        style={{ flexWrap: 'wrap' }}
                        justify={[
                            'center',
                            'space-between',
                            'space-between',
                            'space-between'
                        ]}
                        f={2}
                    >
                        <img
                            style={{
                                margin: '0.5rem'
                            }}
                            src={SmallDailyShowLogo}
                            width={75}
                        />
                        <div
                            style={{
                                margin: '0.5rem',
                                fontStyle: 'italic'
                            }}
                        >
                            almostrealpruittheadlines.com
                        </div>{' '}
                    </FooterContainer>
                </Newspaper>
            </Box>
        );
    }
}

Headline.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string)
};

export default Headline;
