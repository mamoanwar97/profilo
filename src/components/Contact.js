import React from 'react';

const Contact = () => (
      <div className="container p-5 contact">
      <hr />
        <div className="row row-content" id="contact">
            <div  className="col-md-6">
              <img className="col-sm-12 m-3 d-none d-md-block" src="github.svg" alt="Contact-icon" />
              </div>
               <div className="col-12 col-sm-4 ml-md-auto mt-auto mb-auto">
                  <h3>Location Information</h3>
                       <h5>Our Address</h5>
                       <address>
                       481, Sayed el barbry st.<br />
                       Hadeq el qoppa, Cairo<br />
                       Egypt<br />
                       <i className="fa fa-phone"></i>: 0020 100 964 9613<br />
                       <i className="fa fa-envelope"></i>: <a href="mailto:mamoanwar97@gmail.com" className="mail">mamoanwar97@gmail.com</a>
                       </address>
                       <div className="btn-group" role="group">
                       <a role="button" className="btn btn-primary" href="https://www.linkedin.com/in/mamoanwar97/"><i className="fa fa-linkedin"></i></a>
                       <a role="button" className="btn btn-info" href="https://facebook.com/mamoanwar97"><i className="fa fa-facebook"></i></a>
                       <a role="button" className="btn btn-dark" href="https://github.com/mamoanwar97"><i className="fa fa-github"></i></a>
                       </div>
               </div>
           </div>
      </div>
)

export default Contact;
