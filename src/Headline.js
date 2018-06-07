import React from 'react';
import { Box, Subhead } from 'rebass';
import PropTypes from 'prop-types';

class Headline extends React.PureComponent {
    render() {
        const { words } = this.props;
        return (
            <Box>
                <Subhead>
                    Secretary Pruitt found {words[0]} the {words[1]} with{' '}
                    {words[2]} at a taxpayer expense of {words[3]}.
                </Subhead>
            </Box>
        );
    }
}

Headline.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string)
};

export default Headline;
