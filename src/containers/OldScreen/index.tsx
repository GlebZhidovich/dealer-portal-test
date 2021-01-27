import React from 'react';
import styled from 'styled-components';

const Frame = styled.iframe`
width: 100%;
height: 100%;
border: 0;
`;

const OldScreen = () => {
  return (
    <Frame src="https://ya.ru">
    </Frame>
  );
};

export default OldScreen;
