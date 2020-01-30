import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBContainer} from "mdbreact";
import './App.css';
// import App from './App';
import Nav from './Nav';
import Image from './Image';
import Gallery from './Gallery';



class App extends Component {


  render() {
    return (
      <MDBContainer>
      <div className="container">
        <Nav />
        <h6>Latest release</h6>
        <Image />
        <h6>Gallery</h6>
        <Gallery />
        <hr />
        <div>
        <p>Copyright © 2020 by Joon Yoon</p>
        </div>
      </div>
      </MDBContainer>


    )
  }
}

export default App;
