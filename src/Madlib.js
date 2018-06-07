import React from 'react';
import { Textarea, Flex, Button, Subhead } from 'rebass';

class Madlib extends React.PureComponent {
    render() {
        return (
            <Flex
                alignContent={'center'}
                direction={'column'}
                style={{ maxWidth: 600 }}
                mx={'auto'}
                flexWrap={false}
            >
                <Textarea />
                <Button m={3} width={200}>
                    Make the news
                </Button>
            </Flex>
        );
    }
}

export default Madlib;
