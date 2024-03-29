import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledOuterContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 90vw;
  max-width:1400px;
  min-height:100vh;
  height: fit-content;
  padding-top: 60px;
  margin-bottom: 64px;
`;

const MotionVariant4 = {
    hidden: {
        scale: 0.8,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0,
            durarion: 0.4,
        },
    },
};

const OuterPageContainer = ({ children }) => {
    return (
        <StyledOuterContainer initial="hidden" animate="visible" variants={MotionVariant4}>
            {children}
        </StyledOuterContainer>
    );
};

export default OuterPageContainer;
