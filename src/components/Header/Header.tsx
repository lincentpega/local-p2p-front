import {useState} from 'react';
import {Container, Group, Burger} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';
import LogInButton from '../LogInButton/LogInButton.tsx';
import {useKeycloak} from '@react-keycloak/web';

const links = [
  {link: '/home', label: 'Home'},
  {link: '/about', label: 'About'},
];

const authenticatedLinks = [
  ...links,
  {link: '/p2p', label: 'P2P'},
];

const Header = () => {
  const {keycloak} = useKeycloak();
  const [opened, {toggle}] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const linksToMap = keycloak.authenticated ? authenticatedLinks : links;
  const items = linksToMap.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="full" className={classes.inner}>
        <Group gap={10} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm"/>
        <LogInButton/>
      </Container>
    </header>
  );
}

export default Header;