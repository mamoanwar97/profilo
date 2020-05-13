import React from 'react';
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
      <div className="col-sm-12 container">
         <div className="row feature p-4">
           <div  className="col-sm-6">
             <img className="col-sm-12" src={props.image} alt="Project image" />
           </div>
           <div className="col-sm-6 detail-info">
            <h1>{props.title}</h1>
            <hr/>
            <h2>Describtion</h2>
            <div>
              <p> fdasfkokodfkoakfodkoakfokfokfokaokof </p>
            </div>
            <hr/>
            <a href={`https://docs.google.com/document/d/1nNE6DE780J3AVnCYgXtstL5aIAoRrq5VaDhMbetjAJU/edit?ts=5eb80f82`} target="blank" className='p-2 view-link center'>Github link</a>
           </div>
         </div>
      </div>
    );


export default FeatureCard;
