import React from 'react';
import ReactDom from 'react-dom';
import './Avatar.css';
import 'tachyons';

const Avatar = (props) => {
  return (
          <div className="avatarstyle ma4 bg-light-purple dib pa4">
              <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
              <h1 className="tc"> {props.name}</h1>
              <p className="tc"> {props.work} </p>
          </div>
        )



}

export default Avatar;
