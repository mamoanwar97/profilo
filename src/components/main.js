import React, {Component} from 'react';
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./Home"
import DetailCard from "./DetailCard"
import Contact from "./Contact"

class Main extends Component {
  constructor(props) {
        super(props);

        this.toggleDark = this.toggleDark.bind(this);

        this.state = {
          dark: false,
          data: [
            {
              id: 0,
              title: "Vote",
              text: `In the "Would You Rather?" Project, you'll build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules. In your app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard`,
              image: "vote.png",
              link: "https://github.com/mamoanwar97/Vote",
            },
            {
              id: 1,
              title: "Indescision App",
              text: "My first React website - this website makes decisions for you as a rolling dice. you add the tasks the tasks you are thinking about then roll the dice it will give you randomly the decision what you need to do now. It preserve its state even if you refreshed or closed the website. When you visit it again, you will find your last activity as it is.",
              image: "indesicion.png",
              link: "https://github.com/mamoanwar97/IndecisionApp",
            },
            {
              id: 2,
              title: "Hackathon-Judging",
              text: `Code Geist Hackathon - Judging tool. Code Geist is the first and biggest undergrades hackathon in Egypt organized by Undergrads.`,
              image: "judge.png",
              link: "https://github.com/mamoanwar97/Hackathon-Judging",
            },
            {
              id: 3,
              title: "Newsly",
              text: `This a asp.net mvc web application. it consist of 6 tabs. this a news website where you can login as admin or guest according to your assigned role. Admins and Guests
                Admins :
                Can add guests, new admins.
                Can view admins table and remove or edit information of other admins, but at least there is one admin in the table.
                Can post new news/events, edit pervious one or delete
                Guests :
                They dont have access to any add/edit/delete feature.
                They can click on any news/event to show more details.
                Tabs
                Home tab: There is coursal at the tob then by going down we find the last 5 featured news show on the left, and on the right some contact information
                News tab: Where all the news lay, it shows 4 news per page, for guests they can click to show details for admins they can add/edit/delete any news.
                Events tab: Where all the events lay, it shows 4 news per page, for guests they can click to show details for admins they can add/edit/delete any news.
                About tab: Show information of the company and team worked on it.
                Contact tab: Show information to contact or to subscribe to newsletter or send feedback email.
                Admins tab : It shows only to admins, so they can add/edit/delete other admins.`,
              image: "",
              link: "https://github.com/mamoanwar97/Newsly",
            },
            {
              id: 4,
              title: "Memory Game",
              text: `it is a mini game where there is 8 pairs of flipped cards. and you try to match them together in shortest time and least moves.
there is also a starts rating which depends on your no. of moves so be careful everymove counts :D
there is also a reset button if you wanted to retry.
when you win your no of moves and time taken is displayed. there is also a play again button to have more fun. ;)`,
              image: "../memory.png",
              link: "https://github.com/mamoanwar97/memory-game",
            },
            {
              id: 5,
              title: "Arcade Game",
              text: `In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.`,
              image: "../Arcade.png",
              link: "https://github.com/mamoanwar97/Arcade-game",
            },
            {
              id: 6,
              title: "Sefrwahed website",
              text: `This is Sefrwahed last updated website. I contributed in the main page in updating 3 Sections: Who are we, Events, and Contact us section, added the pop-up. I also built Code Geist page.`,
              image: "../sefrwahed.png",
              link: "https://github.com/mamoanwar97/Sefrwahed",
            },
            {
              id: 7,
              title: "Github",
              text: `You can know more about my projects through my github`,
              image: "../github1.svg",
              link: "https://github.com/mamoanwar97/",
            }
          ]
        };

  }

  toggleDark() {
      this.setState({
        dark: !this.state.dark
      });
    }


  render() {
    const CardWithId = ({match}) => {
      const project=this.state.data.filter((d) => d.id === parseInt(match.params.Id.substr(1),10))[0];
      return(
        <DetailCard title={project.title} image={project.image} text={project.text} link={project.link}/>
      );
    };
    return (
      <div  className={this.state.dark? "dark": ""}>
        <Navbar darkToggle={this.toggleDark} dark={this.state.dark}/>
        <Switch>
          <Route path='/home' component={() => <Home data={this.state.data} />} />
          <Route path='/projects/:Id' component={CardWithId} />
          <Redirect to="/home" />
        </Switch>
        <Contact />
      </div>
    );
  }
}

export default Main;
