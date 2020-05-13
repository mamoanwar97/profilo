import React from 'react';

const DetailCard = (props) => (
      <div className="container">
         <div className="row detail p-4">
           <div  className="col-sm-10 m-auto">
             <img className="col-sm-12 mb-3" src={props.image !== ""? `../${props.image}`:"../work.svg"} alt="Project-img" />
           </div>
           <div className="col-sm-10 detail-info m-auto">
            <h1>{props.title}</h1>
            <hr/>
            <h2>Describtion</h2>
            <div>
              <p> {props.text} </p>
            </div>
            <hr/>
            <a href={`https://docs.google.com/document/d/1nNE6DE780J3AVnCYgXtstL5aIAoRrq5VaDhMbetjAJU/edit?ts=5eb80f82`} target="blank" className='p-2 btn github-link center'>Github link</a>
           </div>
         </div>
      </div>
    );


export default DetailCard;
