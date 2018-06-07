import React from 'react';
import { Box, Text, Flex, Subhead } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewspaperImage from './assets/newspaper.png';
import SmallDailyShowLogo from './assets/small-logo.png';

const IS_TESTING = false;
const LONGEST_POSSIBLE = [
    'Urged a Sign Language-Speaking Chimpanzee',
    'Seats at a University of Kentucky Basketball Game',
    'Have Conversations Without People Hearing'
];

const Newspaper = styled(Box)`
    background: url(${NewspaperImage}) no-repeat;
    background-size: 100% 100%;
`;
const Word = styled.span`
    font-weight: bold;
`;

const FooterContainer = styled(Flex)`
    @media (max-width: 600px) {
        img {
            order: 1 !important;
        }
    }
`;
class Headline extends React.PureComponent {
    render() {
        const words = IS_TESTING === true ? LONGEST_POSSIBLE : this.props.words;
        return (
            <Box>
                <Newspaper p={['2rem', '2rem', '3rem', '3rem']}>
                    <Subhead
                        f={[3, 3, 4, 4]}
                        style={{ fontFamily: 'georgia', fontStyle: 'italic' }}
                    >
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
                                margin: '0.5rem',
                                alignSelf: 'center',
                                order: 0
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
