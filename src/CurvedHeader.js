import React from 'react';
import styled from 'styled-components';

const CurvedText = styled.div`
    path {
        fill: transparent;
    }
`;
class CurvedHeader extends React.PureComponent {
    render() {
        return (
            <CurvedText
                dangerouslySetInnerHTML={{
                    __html: `
            <svg viewBox="0 0 500 500">
                <path id="curve"  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text width="500">
                    <textPath xlink:href="#curve">
                        ${this.props.children}
                    </textPath>
                    </text>
            </svg>
            `
                }}
            />
        );
    }
}

export default CurvedHeader;
