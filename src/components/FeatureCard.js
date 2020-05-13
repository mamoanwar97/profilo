import React from 'react';
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
      <div className="col-sm-12">
         <div className="row feature">
           <div  className="col-sm-6">
             <img className="col-sm-12 m-3" src={props.image != ""? props.image:"work.svg"} alt="Project image" />
           </div>
           <div className="col-sm-6 feature-info">
               <h3>{props.title}</h3>
             <Link to={`/projects/:${props.id}`} className='btn-primary btn btn-lg p-2 view-link center'>View Project</Link>
           </div>
         </div>
      </div>
    );


export default FeatureCard;
