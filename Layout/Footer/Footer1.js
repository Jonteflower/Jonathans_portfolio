import { useRouter } from 'next/router';
import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import {
  Divider, FooterContainer, SocialIconLink, SocialIcons, SocialMedia,
  SocialMediaWrap, WebsiteRights
} from './Footer.elements';

function Footer({ scroll }) {
  const router = useRouter()
  const path = router.pathname
  path == '/about' ? scroll = 1 : scroll = scroll
  const isLight = (scroll != 0 && path != '/about') ? '#282828' : 'transparent'

  return (
    <>
      <FooterContainer position={scroll == 0 ? 'fixed' : 'absolute'} color={isLight}  >
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href='https://www.discordapp.com/users/Jonteflower#1427' target='_blank' aria-label='Discord' >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/jonteflower/' target='_blank' aria-label='Instagram' >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='https://twitter.com/jonathannairn' target='_blank' aria-label='Twitter' >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/jonathan-nairn-tallen-672161140/?originalSubdomain=se' target='_blank' aria-label='LinkedIn'>
                <FaLinkedinIn />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/Jonteflower' target='_blank' aria-label='Github'>
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <Divider />
        <WebsiteRights> <a href="mailto: jonathan@tixynft.com">jonathan@tixynft.com</a></WebsiteRights>
      </FooterContainer>
    </>
  );
}

export default Footer;