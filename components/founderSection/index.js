import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './components/imageSlider'
import TextSection from './components/textSection'
import { textObjects } from './components/slideData';
import SectionTitle from '../utils/sectionTitle';
import { OuterDiv } from '../utils/styledComponents';

function ProjectSection({ scrollRef }) {
  const [index, setIndex] = useState(0);
  const [textObject, setTextObject] = useState({});

  // Update the textObject based on the current index
  useEffect(() => {
    if (index < textObjects.length) {
      setTextObject(textObjects[index]);
    }
  }, [index, textObjects]);

  return (
    <OuterDiv ref={scrollRef}>
      <SectionTitle text={'Projects'} />
      <ImageSlider slides={textObjects} setIndex={setIndex}></ImageSlider>
      <TextSection textObject={textObject}></TextSection>
    </OuterDiv>
  )
}

export default ProjectSection;