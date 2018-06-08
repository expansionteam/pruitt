import React from 'react';
import { Textarea, Flex, Button, Subhead } from 'rebass';
import words from './words.json';
import ShareButtons from './ShareButtons';
import { sample, chunk, values, flatten, random } from 'lodash';
import Headline from './Headline';
import generateHeadline from './generate-headline';
import { Helmet } from 'react-helmet';
import wrap from 'wordwrap';

const IS_TESTING = false;

const LONGEST_POSSIBLE = [
    'Urged a Sign Language-Speaking Chimpanzee',
    'Seats at a University of Kentucky Basketball Game',
    'Have Conversations Without People Hearing'
];

function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
}

class Madlib extends React.PureComponent {
    constructor(props) {
        super(props);
        const initialWordIndices =
            typeof window !== 'undefined' && window.location.pathname.length > 1
                ? window.location.pathname.replace('/', '').split(',')
                : this.getRandomIndices();
        this.state = {
            words: generateHeadline(initialWordIndices),
            wordIndices: initialWordIndices
        };
        this.reshuffleWords = this.reshuffleWords.bind(this);
        this.grabRandomWords = this.grabRandomWords.bind(this);
        this.grabSpecificWords = this.grabSpecificWords.bind(this);
        this.getRandomIndices = this.getRandomIndices.bind(this);
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
            (wordList, i) => wordList[indices[i]] || sample(wordList)
        );
        // if any of our initial indices are out of bounds, replace w/ random
        return flatten(newWords);
    }

    getRandomIndices() {
        const wordLists = values(words);
        const newIndices = wordLists.map(l => random(0, l.length));
        return newIndices;
    }
    reshuffleWords() {
        const newIndices = this.getRandomIndices();
        this.setState({
            words: this.grabSpecificWords(newIndices),
            wordIndices: newIndices
        });
    }

    render() {
        const words =
            IS_TESTING === true && process.env.NODE_ENV === 'development'
                ? LONGEST_POSSIBLE
                : this.state.words;
        const headlineCopy = `Scott Pruitt ${words[0]} to Get Him ${
            words[1]
        } So He Could ${words[2]}`;

        const metaImageUrl =
            'http://res.cloudinary.com/almostrealpruittheadlines/image/upload/w_1200/w_800,c_fit,l_text:Georgia_35_italic:' +
            encodeURIComponent(headlineCopy) +
            '/clip.png';
        return (
            <Flex
                mt={[1, 1, 4, 4]}
                direction={'column'}
                style={{ maxWidth: 600, ...this.props.style }}
                mx={'auto'}
            >
                <Helmet>
                    <meta name={'twitter:image'} content={metaImageUrl} />
                    <meta name={'og:image'} content={metaImageUrl} />
                    {/* encodeURIComponent(wrap(45)(headlineCopy)) */}
                </Helmet>
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
                    sharePath={'/' + (this.state.wordIndices || []).join(',')}
                    shareText={`.@thedailyshow's #PruittCorruptionGenerator:\n\n"${headlineCopy}"\n\nGenerate yours: almostrealpruittheadlines.com`}
                />
            </Flex>
        );
    }
}

export default Madlib;
