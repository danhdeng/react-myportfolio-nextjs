import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

import { SocialComponent } from '../Social/Social';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <linkItem href="123-456-7890">123-456-7890</linkItem>
          </LinkColumn>
        </LinkColumn>
        <LinkColumn>
          <LinkColumn>
            <LinkTitle>Contact</LinkTitle>
            <linkItem href="mailto:huidh@yahoo.com">huidh@yahoo.com</linkItem>
          </LinkColumn>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>Natually Wake Solution Inc</CompanyContainer>
        <SocialContainer>
          <SocialComponent />
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
