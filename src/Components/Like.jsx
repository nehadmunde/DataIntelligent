import React, { useState, useEffect } from 'react';

const Like = () => {
  let data = JSON.parse(localStorage.getItem('sendData'));
  console.log('Data from Like Page', data);

  const onUnlikeHandle = (param) => {
    data.splice(param, 1);
    localStorage.setItem('sendData', JSON.stringify(data));
    alert('Unliked one.');
    // alert(`Unlike ${data[param].name}`);
    console.log('data from Unlike', data);
    refreshPage();
  };

  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('sendData'));
  }, []);

  return (
    <div className="container">
      <h2>Like Page </h2>
      <div className="row">
        {data.map((ele, id) => {
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
                <button className="button" onClick={() => onUnlikeHandle(id)}>
                  <span>Unlike </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Like;
