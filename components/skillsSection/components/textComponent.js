import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import personImage from '../../../public/images/general/person.svg'
import { motion } from 'framer-motion';

const ColumnContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    min-height: 431px;
    height: auto;
    gap:15px;
    width: fit-content;

    @media screen and (max-width:1200px) {
        align-items: flex-start;
    }

  @media screen and (max-width:1100px) {
        align-items: center;
      justify-content: center;
      width:100%;
      gap:20px;
      
    } 

`

const StyledArticle = styled.article`
    width: 100%;
    max-width: 500px;
    @media screen and (max-width:1100px) {
      width:95%;
      text-align: center;
    } 
`

const BoxTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1;
    transition: all 0.2s;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    text-align: left;
    width: 100%;

    @media screen and (max-width:1100px) {
    text-align: center;
    font-size: 1.3rem;
    white-space: nowrap;
    } 
`

const BoxText = styled.p`
    font-size: 1.1rem;
    width: 500px;
    line-height: 140%;
    color:rgb(138, 147, 155);
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    letter-spacing: 1px;
    @media screen and (max-width:1100px) {
        width:100%;
        margin-block-end: 0em;
  } 
`

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  //padding-bottom: 66.666%; // 200px / 300px = 0.66666 = 66.666%
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 150px;
    padding-bottom: 75%; // 150px / 200px = 0.75 = 75%
  }
`

const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
};

const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
};


function TextSection() {
    return (
        <ColumnContainer>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
            >
                <ImageContainer>
                    <Image
                        src={personImage}
                        layout='fill'
                        alt="silhouette of a person"
                        priority
                    />
                </ImageContainer>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
            >
                <StyledArticle>
                    <BoxTitle>Full Stack Developer</BoxTitle>
                    <BoxText>
                        {`
                            Hello, and thanks for stopping by!
                        `}
                        <br/>
                        {`
                            Building software is something I've done for a long time and is a big passion of mine. 
                            \n
                            Here are some of the tools I usually employ for building my tech companies.
                        `}
                    </BoxText>
                </StyledArticle>
            </motion.div>
        </ColumnContainer>
    );
}

export default TextSection