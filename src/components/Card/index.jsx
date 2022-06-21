import SCard from './style';
import logo from '../../asset/default.svg';

export default function Card(dataFilm) {
  return (
    <SCard>
      <li className='contain' key={dataFilm.dataFilm.id}>
        <img className='image' src={dataFilm.dataFilm.image} alt='' />
        <h2>{dataFilm.dataFilm.title}</h2>
        <h4>{dataFilm.dataFilm.original_title}</h4>
        <div className='director'>
          <img className='logo' src={logo} alt='' />
          <p>{dataFilm.dataFilm.director}</p>
        </div>
        <div className='years'>
          <img className='logo' src={logo} alt='' />
          <p>{dataFilm.dataFilm.release_date}</p>
        </div>
        <p className='description'>{dataFilm.dataFilm.description}</p>
        <img src={dataFilm.dataFilm.movie_banner} alt='' />
      </li>
      ;
    </SCard>
  );
}
