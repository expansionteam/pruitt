import React from 'react';
import { Textarea, Flex, Button, Subhead } from 'rebass';
import words from './words.json';
import ShareButtons from './ShareButtons';
import { sample, values, flatten } from 'lodash';
import Headline from './Headline';
import generateHeadline from './generate-headline'

const IS_TESTING = false;

const LONGEST_POSSIBLE = [
    'Urged a Sign Language-Speaking Chimpanzee',
    'Seats at a University of Kentucky Basketball Game',
    'Have Conversations Without People Hearing'
];

class Madlib extends React.PureComponent {
    constructor(props) {
        super(props);
        const initialWordIndices =
            (props.match &&
                props.match.params &&
                props.match.params.wordIndices && props.match.params.wordIndices.split(',')) ||
            undefined;
        this.state = {
            words: generateHeadline(initialWordIndices)
        };
        this.reshuffleWords = this.reshuffleWords.bind(this);
        this.grabRandomWords = this.grabRandomWords.bind(this);
        this.grabSpecificWords = this.grabSpecificWords.bind(this);
    }
    static defaultProps = {
        style: {}
    };
    /* from each wordlist, grab a random word. Exclude words
* already in use--i.e. words present in the current madlib sentence */
    grabRandomWords(currentWords = []) {
        const newWords = values(words).map(wordList => {
            // limit to words not currently in use
            const wordsNotCurrentlyInUse = wordList.filter(
                w => !currentWords.includes(w)
            );
            return sample(wordList);
        });
        return flatten(newWords);
    }
    grabSpecificWords(indices) {
        const newWords = values(words).map(
            (wordList, i) => wordList[indices[i]]
        );
        console.log('NEW WORDS', indices, newWords);
        // if any of our initial indices are out of bounds, replace w/ random
        return newWords.filter(w => typeof w !== 'string').length > 0
            ? this.grabRandomWords()
            : flatten(newWords);
    }
    reshuffleWords() {
        this.setState({ words: this.grabRandomWords(this.state.words) });
    }
    render() {
        const words =
            IS_TESTING === true && process.env.NODE_ENV === 'development'
                ? LONGEST_POSSIBLE
                : this.state.words;
        const headlineCopy = `Scott Pruitt ${words[0]} To Get Him ${
            words[1]
        } So He Could ${words[2]}`;
        return (
            <Flex
                mt={[1, 1, 4, 4]}
                direction={'column'}
                style={{ maxWidth: 600, ...this.props.style }}
                mx={'auto'}
            >
                <Headline>{headlineCopy}</Headline>
                <Button
                    style={{
                        fontWeight: 400,
                        backgroundColor: '#245AD0',
                        cursor: 'pointer'
                    }}
                    py={3}
                    f={4}
                    mx={'auto'}
                    my={4}
                    onClick={console.log}
                    width={200}
                >
                    Generate
                </Button>
                <ShareButtons
                    shareText={`.@thedailyshow's #PruittCorruptionGenerator:\n\n"${headlineCopy}"\n\nGenerate yours: almostrealpruittheadlines.com`}
                />
            </Flex>
        );
    }
}

export default Madlib;
