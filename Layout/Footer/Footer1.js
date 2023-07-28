import { useRouter } from 'next/router';
import React from 'react';
import { FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer, SocialIconLink, SocialIcons, SocialMedia,
  SocialMediaWrap
} from './Footer.elements';

function Footer({ scroll }) {

  return (
    <>
      <FooterContainer position={scroll == 0 ? 'fixed' : 'absolute'} background={scroll ? '#1a1a1a' : 'transparent'} >
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink
                href='https://github.com/Jonteflower'
                target='_blank' aria-label='Github' color={!scroll ? '#1a1a1a' : '#f1f1f1'}>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/nora-bjork'
                target='_blank' aria-label='LinkedIn' color={!scroll ? '#1a1a1a' : '#f1f1f1'}>
                <FaLinkedinIn />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.discordapp.com/users/Jonteflower#1427'
                target='_blank' aria-label='Discord' color={!scroll ? '#1a1a1a' : '#f1f1f1'}>
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/jonteflower/' target='_blank' aria-label='Instagram' color={!scroll ? '#1a1a1a' : '#f1f1f1'}>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/jonathannairn' target='_blank' aria-label='Twitter' color={!scroll ? '#1a1a1a' : '#f1f1f1'} >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
}

export default Footer;