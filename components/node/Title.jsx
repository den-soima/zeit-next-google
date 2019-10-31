import React from 'react';
import styled from "styled-components";

const Title = ({title}) => (
    <Wrapper>
        {title}
    </Wrapper>
);

const Wrapper = styled.div`
  float: left;
`;

export default Title;