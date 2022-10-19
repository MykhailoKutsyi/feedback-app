import React from 'react';

import Container from 'components/Container/Container';
import Icon from 'components/Icon/Icon';

import yellowSmileDown from 'assets/images/yellowSmileDown.svg';
import pinkSmileDown from 'assets/images/pinkSmileDown.svg';
import greenSmile from 'assets/images/greenSmile.svg';

import socials from './socials.json';

import {
  FooterWrapper,
  FooterText,
  List,
  ListItem,
  ListLink,
  PinkSmileDown,
  GreenSmile,
  YellowSmileDown,
} from './Footer.styled';

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>&copy; 2022 | All Rights Reserved</FooterText>

      <List>
        {socials.map(({ id, link, icon }) => (
          <ListItem key={id}>
            <ListLink
              target="_blank"
              href={link}
              rel="noreferrer"
              title="example"
            >
              <Icon id={icon} />
            </ListLink>
          </ListItem>
        ))}
      </List>
      <Container>
        <PinkSmileDown src={pinkSmileDown} alt="smile" />
        <GreenSmile src={greenSmile} alt="smile" />
        <YellowSmileDown src={yellowSmileDown} alt="smile" />
      </Container>
    </FooterWrapper>
  );
}
