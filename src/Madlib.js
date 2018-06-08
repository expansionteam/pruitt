import React from 'react';
import { Textarea, Flex, Button, Subhead } from 'rebass';
import words from './words.json';
import ShareButtons from './ShareButtons';
import { sample, values, flatten } from 'lodash';
import Headline from './Headline';

class Madlib extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            words: this.grabRandomWords()
        };
        this.reshuffleWords = this.reshuffleWords.bind(this);
        this.grabRandomWords = this.grabRandomWords.bind(this);
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

    reshuffleWords() {
        this.setState({ words: this.grabRandomWords(this.state.words) });
    }
    render() {
        const { words } = this.state;
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
                    onClick={this.reshuffleWords}
                    width={200}
                >
                    Generate
                </Button>
                <ShareButtons
                    shareText={`I created an almost real Scott Pruitt headline using @thedailyshow's #PruittCorruptionGenerator:\n\n"${headlineCopy}"\n\Generate yours: `}
                />
            </Flex>
        );
    }
}

export default Madlib;
