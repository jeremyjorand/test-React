import SNavbar from './style';
import logo from '../../asset/logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <SNavbar>
      <img src={logo} alt='' />
      <nav>
        <Link to='/'>
          <button>ACCUEIL</button>
        </Link>
        <Link to='/Gallery'>
          <button>RECHERCHE</button>
        </Link>
      </nav>
    </SNavbar>
  );
}
