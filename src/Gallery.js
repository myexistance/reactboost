import React, {Component} from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Gallery.css";

const images = [
  "https://assets.yeezysupply.com/images/w_901,f_auto,q_auto:sensitive,fl_lossy/8828678101b34e22988dab1201349de3_ce49/YEEZY_SLIDE_ADULTS_BONE_FW6345_FW6345_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/ab587121b2cb41778f8eab1201349e47_ce49/YEEZY_SLIDE_KIDS_BONE_FW6347_FW6347_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/379cee6402d949f1bfeeab1201349cdf_ce49/YEEZY_SLIDE_INFANT_BONE_FW6349_FW6349_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/92714d79674848529ea0ab12013c612f_ce49/YEEZY_SLIDE_ADULTS_DESERT_SAND_FW6344_FW6344_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/78bb43872f144f08af9eab12013c6197_ce49/YEEZY_SLIDE_KIDS_DESERT_SAND_FW6346_FW6346_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/affdf3ac91164b11a7f5ab12013c6340_ce49/YEEZY_SLIDE_INFANT_DESERT_SAND_FW6348_FW6348_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/f8dab600665b4fd4917dab1201403df9_ce49/YEEZY_SLIDE_ADULTS_RESIN_FX0494_FX0494_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/a4fcbb798f614494ba8cab120140420e_ce49/YEEZY_SLIDE_KIDS_RESIN_FX0495_FX0495_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/eecd5b7ee8a34412b9a6ab1201404027_ce49/YEEZY_SLIDE_INFANT_RESIN_FX0496_FX0496_04_standard.png"
];

const smallImages = [
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/8828678101b34e22988dab1201349de3_ce49/YEEZY_SLIDE_ADULTS_BONE_FW6345_FW6345_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/ab587121b2cb41778f8eab1201349e47_ce49/YEEZY_SLIDE_KIDS_BONE_FW6347_FW6347_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/379cee6402d949f1bfeeab1201349cdf_ce49/YEEZY_SLIDE_INFANT_BONE_FW6349_FW6349_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/92714d79674848529ea0ab12013c612f_ce49/YEEZY_SLIDE_ADULTS_DESERT_SAND_FW6344_FW6344_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/78bb43872f144f08af9eab12013c6197_ce49/YEEZY_SLIDE_KIDS_DESERT_SAND_FW6346_FW6346_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/affdf3ac91164b11a7f5ab12013c6340_ce49/YEEZY_SLIDE_INFANT_DESERT_SAND_FW6348_FW6348_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/f8dab600665b4fd4917dab1201403df9_ce49/YEEZY_SLIDE_ADULTS_RESIN_FX0494_FX0494_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/a4fcbb798f614494ba8cab120140420e_ce49/YEEZY_SLIDE_KIDS_RESIN_FX0495_FX0495_04_standard.png",
  "https://assets.yeezysupply.com/images/w_900,f_auto,q_auto:sensitive,fl_lossy/eecd5b7ee8a34412b9a6ab1201404027_ce49/YEEZY_SLIDE_INFANT_RESIN_FX0496_FX0496_04_standard.png"
];

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin" id="Gallery">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default Gallery;
