import React from 'react';
import { Box, Text, Flex, Subhead } from 'rebass';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NewspaperImage from './assets/newspaper.png';

const IS_TESTING = false;
const LONGEST_POSSIBLE = [
    'Urged a Sign Language-Speaking Chimpanzee',
    'Seats at a University of Kentucky Basketball Game',
    'Have Conversations Without People Hearing'
];

const Newspaper = styled(Text)`
    padding: 3rem;
    background: url(${NewspaperImage}) no-repeat;
    background-size: 100% 100%;
`;
const Word = styled.span`
    font-weight: bold;
`;
class Headline extends React.PureComponent {
    render() {
        const words = IS_TESTING === true ? LONGEST_POSSIBLE : this.props.words;
        return (
            <Box>
                <Newspaper fontSize={4}>
                    Scott Pruitt <Word>{words[0]}</Word> to Get Him{' '}
                    <Word>{words[1]}</Word> So He Could <Word>{words[2]}</Word>.
                    <Flex
                        my={3}
                        mt={'1rem'}
                        width={'100%'}
                        justify={'space-between'}
                        f={2}
                    >
                        <div>LOGO</div>
                        <div>almostrealpruittheadlines.com</div>{' '}
                    </Flex>
                </Newspaper>
            </Box>
        );
    }
}

Headline.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string)
};

export default Headline;
