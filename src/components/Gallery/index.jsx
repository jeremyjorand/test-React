import SGAllery from './style';
import Card from '../Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Gallery() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);
  const [dataFilms, setDataFilms] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films').then(({ data }) => {
      setDataFilms(data);
      setDataSearch(data);
    });
  }, []);

  return (
    <SGAllery>
      <h1>Ma super page de recherche</h1>
      <div className='input'>
        <div className='contain'>
          <input
            value={search}
            type='text'
            placeholder='Rechercher un titre, un réalisateur'
            onChange={(evt) => {
              setSearch(evt.target.value);
            }}
          />
          <button
            type='button'
            onClick={() => {
              setActive(false);
              setDataSearch(
                dataFilms.filter((dataFilm) => {
                  return (
                    dataFilm.title === search ||
                    dataFilm.director === search ||
                    search === ''
                  );
                })
              );
            }}
          >
            OK
          </button>
        </div>
      </div>
      <section className='card'>
        {dataSearch
          // .filter((dataFilm) => {
          //   return dataFilm.title === search || search === '';
          // })
          .map((dataFilm) => {
            return <Card dataFilm={dataFilm} />;
          })}
      </section>
    </SGAllery>
  );
}
