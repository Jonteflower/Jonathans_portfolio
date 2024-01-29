import React, { useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import styled from 'styled-components';
import Stars from '../particles';
import TextAnimation from './components/textAnimation';

const StyledButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(26,26,26,0.6);
    border: 2px solid #ff4d5a;
    border-radius: 5px;
    color: #ff4d5a;
    font-size: 1.4rem;
    font-weight: 500;
    width: 235px;
    height:39px;
    gap:10px; 
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover{
        scale: 1.02;
        border-radius: 10px;
        color:#f1f1f1;
    }

    @media screen and (max-width:600px) {
      width: 180px;
      font-size: 1.2rem;
    }
   
`

const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  box-sizing: border-box;
  width: 100%;
  height:48%;
  gap: 20px;

  @media screen and (max-width:800px) {
    justify-content:flex-start;
    height:53%;
   
  }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items:center;
  width: 100%;
  height:100vh;
  padding-top: 64px;
  //border-bottom: 0.5px solid #ffffff95;
  @media screen and (max-width:800px) {
    justify-content:center;
  }
`;

function HeroSection({ scrollToNext, scrollRef }) {
  const [loaded, setLoaded] = useState(false)
  const items = ['Developer', ' Founder', 'Data Nerd'];

  return (
    <Section ref={scrollRef}>
      <Stars setLoaded={setLoaded} />
      {
        loaded &&
        <OuterDiv>
          <TextAnimation items={items} line1={`Hi, I'm Jonathan`} line2={`and I'm a`}></TextAnimation>
          <StyledButton onClick={scrollToNext}>
            Learn more
            <AiOutlineArrowDown size={15} color='#ff4d5a'/>
          </StyledButton>
        </OuterDiv>
      }

    </Section>
  )

}

export default HeroSection