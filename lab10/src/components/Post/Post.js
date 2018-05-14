import React from 'react';
import classes from './Post.css';

const post = (props) => (<div className={classes.Post}>
   <h3>{props.title}</h3>
   <span>Escritorio por: {props.useId}</span>
   </div>);
export default post;