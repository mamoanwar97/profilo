import React from 'react';
import FeatureCard from "./FeatureCard"
import Header from "./Header"

const Home =(props) => (
  <div>
    <Header />
    <div className="container" id="project">
    {
      props.data.map(d => ( <FeatureCard image={d.image} id={d.id} key={d.id} title={d.title} link={d.link} discription={d.text}/>))
    }
    </div>
  </div>
)

export default Home;
