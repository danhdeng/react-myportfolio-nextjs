import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaBlogger } from 'react-icons/fa';

import { SocialIcons } from './SocialStyles';

export const SocialComponent = () => {
  return (
    <>
      <SocialIcons href="https://www.github.com/danhdeng">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/danhuideng">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/danhdeng">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://dandeng.blogspot.com">
        <FaBlogger size="3rem" />
      </SocialIcons>
    </>
  );
};
