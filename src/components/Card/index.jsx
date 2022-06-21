import SCard from './style';

import img from '../../asset/default.svg';

export default function Card(dataFilm) {
  return (
    <SCard>
      <li className='contain' key={dataFilm.dataFilm.id}>
        <img src={img} alt='' />
        <h2>{dataFilm.dataFilm.title}</h2>
        <p className='director'>{dataFilm.dataFilm.director}</p>
        <p className='years'>{dataFilm.dataFilm.release_date}</p>
        <p className='description'>{dataFilm.dataFilm.description}</p>
      </li>
      ;
    </SCard>
  );
}
