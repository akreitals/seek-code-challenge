import React from 'react';
import styled, { keyframes } from 'styled-components';
import Box from '../Box/Box';
import { colors } from '../theme';

const LoaderBounce = keyframes`
    33% {
        -webkit-transform: translateY(-18px);
    }
    66% {
        -webkit-transform: translateY(0);
    }
`;

const LoaderBall = styled('div')`
    background-color: ${colors.midGrayLight};
    width: 18px;
    height: 18px;
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;

    &:first-child {
        animation: ${LoaderBounce} 0.6s -0.14s infinite ease-in-out;
    }

    &:nth-child(2) {
        animation: ${LoaderBounce} 0.6s -0.07s infinite ease-in-out;
    }

    &:last-child {
        animation: ${LoaderBounce} 0.6s 0s infinite ease-in-out;
    }
`;

const Loader = () => (
    <Box width="66px">
        <LoaderBall />
        <LoaderBall />
        <LoaderBall />
    </Box>
);

export default Loader;
