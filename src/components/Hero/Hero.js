import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Dan Deng Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a seansoned professional software developer, i am interesting
          exploring all kind of technologies stacks. i have passsion in building
          web applications in the cloud and sharing my knowledge with others.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
