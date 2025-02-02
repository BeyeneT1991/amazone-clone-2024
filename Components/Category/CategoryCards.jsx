import React from 'react';
import classes from './category.module.css'; 
import { Link } from 'react-router-dom';

function CategoryCards({ data }) {
  console.log(data); 
  return (
    <div className={classes.category}> 
      <Link to={`/Category/${data?.name}`}> 
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={`${data?.title}`} /> 
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCards;
