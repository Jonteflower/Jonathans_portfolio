import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  position: relative;
  font-size: 4.5rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 8rem;
  z-index: 1;

  @media screen and (max-width: 1100px) {
    margin-top: 3.5rem;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 700px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
`;

const Underline = styled.div`
  border-bottom: 18px solid #ff4d5a;
  position: absolute;
  bottom: 13.5%; // Adjust as needed
  left:8%;
  z-index: -1;

  @media screen and (max-width: 1000px) {
    border-bottom: 14px solid #ff4d5a;
    width: 100%;
  }

`;

export default function SectionTitle({text, scrollRef}) {
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setUnderlineWidth(textRef.current.offsetWidth);
        }
    }, [text]);

    return (
        <StyledTitle ref={textRef}>
            {text}
            <Underline ref={scrollRef} style={{ width: underlineWidth }} />
        </StyledTitle>
    );
}


