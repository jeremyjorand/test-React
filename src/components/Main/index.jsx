import SMain from './style';
import Card from '../Card';

export default function Main() {
  return (
    <SMain>
      <h1>Ma super page de recherche</h1>
      <div className='input'>
        <input type='text' placeholder='Rechercher un titre, un réalisateur' />
      </div>
      <Card />
    </SMain>
  );
}
