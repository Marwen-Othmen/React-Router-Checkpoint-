import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Movielist from './compoment/Movielist';
import Header from './compoment/Header';
import Addmovie from './compoment/Addmovie';
import { Data } from './Data';
import { Route, Routes } from 'react-router-dom';
import Trailer from './compoment/Trailer';

function App() {
  const [Movie, setMovie] = useState(Data);
  const addnewmovie=(x)=>{
    setMovie([...Movie,x])
    console.log(Movie)
  }
  const filterMovie=(searchText,rating)=>{
    setMovie(Movie.filter(el=> el.rating>=rating && el.title.toLowerCase().includes(searchText.toLowerCase())))
 }
  return <div>
    <Header filterMovie={filterMovie}/>
    <Routes> 
        <Route path='/ADD'  element={<Addmovie ADD={addnewmovie} />}/>
        <Route path='/'  element={<Movielist data={Movie} />}/>
        <Route path='/trailer/:idtrailer'element={ <Trailer data={Movie} /> } />
        </Routes> 
  </div>;
}

export default App;
