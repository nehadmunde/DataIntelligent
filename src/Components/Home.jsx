import React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';
import DataCard from './DataCard';

const Home = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  const onLikeHandle = (param) => {
    localStorage.setItem('sendData', JSON.stringify(state));
    let newData = JSON.parse(localStorage.getItem('sendData'));
    alert('liked One.');
    setState([...newData, param]);
    console.log(state);
  };

  const getData = () => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then((Response) => setData(Response.data.results))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  return (
    <div className="container">
      <h1>Home Page </h1>

      <div className="row">
        {data.map((ele) => {
          return (
            <div className="col-sm-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={ele.image} alt="Avatar" className="card-img" />
                  </div>
                  <div className="flip-card-back">
                    <p className="card-text">ID : {ele.id}</p>
                    <h5 className="card-title">Name : {ele.name}</h5>
                    <p className="card-text">Species : {ele.species}</p>
                    <p className="card-text">Gender : {ele.gender}</p>
                  </div>
                </div>
              </div>
              <div className="offset-2">
                <button className="button" onClick={() => onLikeHandle(ele)}>
                  <span>Like </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Likes clickData={clickData} /> */}
    </div>
  );
};

export default Home;
