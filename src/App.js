import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

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
        <Image />
        <Gallery />
      </div>
      </MDBContainer>


    )
  }
}

export default App;
