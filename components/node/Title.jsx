import React from 'react';
import styled from "styled-components";

const Title = ({title, dblocation}) => (
    <Wrapper>
        {title} (location: {dblocation})
    </Wrapper>
);

const Wrapper = styled.div`
  width: 400px;
  float: left;
`;

export default Title;