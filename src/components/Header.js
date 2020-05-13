import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = () => (
  <Jumbotron>
    <div className="container">
        <div className="row row-header">
            <div className="col-12 col-md-4">
              <img className="col-12 m-2" src="mamoanwar.jpg" alt="My-profile-img" />
            </div>
            <div className="col-12 col-md-6">
                <h1>Mahmoud M. Anwar</h1>
                <h5>Computer engineer student | React Nanodegree student | Frontend Nanodegree Graduate</h5>
                <hr />
                <p>My purpose is to help all those whom it is in within my power to help. I will use the gifts endowed to me, my heart, my brain, and my humor, in service to others. In a spirit of compassion and with the hope of more deeply understanding those with whom I share this world.
I am a Passionate Software Engineering student skilled in Cooperative, Management, react, Front-end Development and Problem solving.</p>
                <hr />
                <h6>For more visit:</h6>
                <a href="https://github.com/mamoanwar97" className="btn btn-info"> github.com/mamoanwar97
                </a>
                <a href="https://www.linkedin.com/in/mamoanwar97/" className="btn btn-primary"> linkedin.com/in/mamoanwar97/
                </a>
            </div>
        </div>
    </div>
</Jumbotron>

)

export default Header;
