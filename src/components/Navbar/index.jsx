import SNavbar from './style';
import logo from '../../asset/logo.svg';

export default function Navbar() {
  return (
    <SNavbar>
      <img src={logo} alt='' />
      <nav>
        <button>Accueil</button>
        <button>Recherche</button>
      </nav>
    </SNavbar>
  );
}
