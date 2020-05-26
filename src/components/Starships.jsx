import React from 'react';
import { Link } from 'react-router-dom';
import './Starships.css';

const Starships = ({location}) => {

  const pilotUrls = [
    "https://swapi.co/api/people/13/", 
    "https://swapi.co/api/people/14/", 
    "https://swapi.co/api/people/25/", 
    "https://swapi.co/api/people/31/"
  ];
  
  async function getPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
  }
  
  getPilots(pilotUrls).then(pilots => console.log(pilots));

  const starship = location.state;
  return (
    <div className='Starship'>
      {starship ?
        <div className='Starship-starship'>
          <span>NAME:</span>
          <span>{starship.name}</span>
          <span>MODEL:</span>
          <span>{starship.model}</span>
          <span>PILOTS:</span>
          <span>{starship.getPilots}</span>
          <Link to='/'>RETURN</Link>
        </div>
        :
        <h3>...Loading...</h3>
      }
    </div>
  );
};

export default Starships;