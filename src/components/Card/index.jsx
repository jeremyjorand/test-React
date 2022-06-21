import SCard from './style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import img from '../../asset/default.svg';

export default function Card() {
  const [dataFilms, setDataFilms] = useState([]);
  useEffect(() => {
    axios.get('https://ghibliapi.herokuapp.com/films').then(({ data }) => {
      setDataFilms(data);
    });
  }, []);
  return (
    <SCard>
      {dataFilms.map((dataFilm) => {
        return (
          <div className='contain'>
            <img src={img} alt='' />
            <h2>{dataFilm.title}</h2>
            <p className='director'>{dataFilm.director}</p>
            <p className='years'>{dataFilm.release_date}</p>
            <p className='description'>{dataFilm.description}</p>
          </div>
        );
      })}
    </SCard>
  );
}
