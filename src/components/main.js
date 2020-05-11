import React, {Component} from 'react';
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard"

class Main extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <ProjectCard image="mamoanwar.jpg" title="Memory" discription="memory allocation simulator which simulate non contagious segmenting allocation / de-allocation"/>
      </div>
    );
  }
}

export default Main;
