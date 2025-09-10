import { Anchor, Group, Text, Title, Container } from '@mantine/core';
import * as classes from './Footer.module.css';
import React from 'react';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Title><span>Calm</span><i>VR</i></Title>

        <Text>© 2024</Text>

        <Group className={classes.links}>{items}</Group>

      </Container>
    </div>
  );
}