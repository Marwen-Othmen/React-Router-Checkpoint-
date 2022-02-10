import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Movielist from "./compoment/Movielist";
import Header from "./compoment/Header";
import Addmovie from "./compoment/Addmovie";
import { Data } from "./Data";
import { Route, Routes } from "react-router-dom";
import Trailer from "./compoment/Trailer";

function App() {
  const [Movie, setMovie] = useState(Data);
  const [searchText, setsearch] = useState("");
    const [rating, setrating] = useState(0);
  const addnewmovie = (x) => {
    setMovie([...Movie, x]);
    console.log(Movie);
  };
 
  return (
    <div>
      <Header  setsearch={setsearch} setrating={setrating}   />
      <Routes>
        <Route path="/ADD" element={<Addmovie ADD={addnewmovie} />} />
        <Route path="/" element={<Movielist data={Movie} searchText={searchText} rating={rating} />} />
        <Route path="/trailer/:idtrailer" element={<Trailer data={Movie} />} />
      </Routes>
    </div>
  );
}

export default App;
