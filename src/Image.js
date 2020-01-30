import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import './App.css';
import './Image.css';
import Slate from "./Yeezyslate.jpg"  ;



class Image extends Component {
  render() {
    return (
      <MDBContainer className="mt-4">
        <MDBRow className="mt-12">
          <MDBCol md="12">

          <img src={Slate} rounded id="Image" alt="slateimage"/>





          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Image;
