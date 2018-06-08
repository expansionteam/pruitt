import words from './words.json';
import { sample, values, flatten } from 'lodash';

export default (indices /*: number[] */ = []) => {
    const newWords = values(words).map(
        // if any of our initial indices are out of bounds, replace w/ random
        (wordList, i) => wordList[indices[i]] || sample(wordList)
    );
    return flatten(newWords);
};
