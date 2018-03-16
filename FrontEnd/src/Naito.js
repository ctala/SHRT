import React, { Component } from 'react'
const HOST = window.host;

let user = JSON.parse(window.localStorage.getItem("user"));
let jwt = window.localStorage.getItem("jwt");
const domain = window.localStorage.getItem("domain");

class Naito extends Component {
  usuario = user;
  domain = domain;
  setLogin(res) {
    console.log(res);
    user = res.user;
    window.localStorage.setItem("user", JSON.stringify(res.user));
    window.localStorage.setItem("jwt", res.jwt);
     window.localStorage.setItem("domain", res.domain);
    window.location = "/";
  }
  Post(process, obj, callback) {
    let fetchData = {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
         
      }
    };
    if(jwt){
        fetchData.headers.Authorization =  jwt; 
    }
    fetch(HOST + "/" + process, fetchData)
      .then(function(res) {
        return res.json();
      })
      .then(callback);
  }

  GET(process, obj, callback) {
    let fetchData = { method: "GET", headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `${jwt}` } };
    fetch(HOST + "/" + process, fetchData)
      .then(function(res) {
        return res.json();
      })
      .then(callback);
  }
}

export default Naito