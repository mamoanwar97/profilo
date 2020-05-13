import React, {Component} from 'react';
import FeatureCard from "./FeatureCard"
import DetailCard from "./DetailCard"
import Header from "./Header"

class Home extends Component {
  constructor(props) {
        super(props);

        this.state = {
          data: this.props.data
        };

  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" id="project">
        {
          this.state.data.map(d => ( <FeatureCard image={d.image} id={d.id} key={d.id} title={d.title} link={d.link} discription={d.text}/>))
        }
        </div>
      </div>
    );
  }
}

export default Home;
