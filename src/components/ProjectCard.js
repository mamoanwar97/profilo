import React, {Component} from 'react';
import { Media } from 'reactstrap'
import { Link } from 'react-router-dom'

const FeatureCard = (props) => (
      <div className="col-8 container">
         <Media>
           <Media left href="#"  className="col-3">
             <Media object  className="col-12" src={props.image} alt="Project image" />
           </Media>
           <Media body className="col-8">
             <Media heading>
               {props.title}
             </Media >
              {props.discription? <p>{props.discription}</p>:<p></p>}
              <Link to={`/projects/:${props.id}`} className='btn-primary btn btn-lg p-2 view-link center'>View Project</Link>
           </Media>
         </Media>
      </div>
    );


export default FeatureCard
