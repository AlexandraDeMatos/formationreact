import type { FC } from 'react';
import styles from './Navbar.module.css';
import {Container, Nav, Navbar as NavBar} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from 'react-router'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <NavBar bg="dark" data-bs-theme="dark">
      <Container>
        <Link to={'/'} className='navbar-brand'>Home</Link>
        <Nav className="me-auto">
          <Link to={'/'} className='nav-link'>Home</Link>
          <Link to={'/editor'} className='nav-link'>New</Link>
          <Link to={'/editor/2'} className='nav-link'>Edition id:2</Link>
          <Link to={'/thumbnail'} className='nav-link'>Thumbnail</Link>
        </Nav>
      </Container>
    </NavBar>
  </div>
);

export default Navbar;
