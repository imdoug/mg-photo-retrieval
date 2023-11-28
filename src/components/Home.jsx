import doodlebtm from "../assets/DOODLES2.png";
import doodletop from "../assets/DOODLES.png";
import logo from "../assets/781_Mean Girls_LA.png";
import { QRCodeSVG } from 'qrcode.react';

const Home = ({data}) => {
  let  base_url = window.location.origin;
  return (
    <>
      <div className="page-body">
        <img className="bg-logo" src={logo} />
        <img className="bg-top" src={doodletop} />
        <img className="bg-bottom" src={doodlebtm} />
        <div className="last-container">
          {data ? (
            <>
              <div className="row-container">
                <img
                  className="attendee-photo"
                  src={data ? data[0].photo_url : ""}
                ></img>
                <QRCodeSVG value={`${base_url}/photos/0`} />
              </div>
              <div className="row-container">
                <img
                  className="attendee-photo"
                  src={data ? data[1].photo_url : ""}
                ></img>
                <QRCodeSVG value={`${base_url}/photos/1`} />
              </div>
              <div className="row-container">
                <img
                  className="attendee-photo"
                  src={data ? data[2].photo_url : ""}
                ></img>
                <QRCodeSVG value={`${base_url}/photos/2`} />
              </div>
              <div className="row-container">
                <img
                  className="attendee-photo"
                  src={data ? data[3].photo_url : ""}
                ></img>
                <QRCodeSVG value={`${base_url}/photos/3`} />
              </div>
            </>
          ) : (
            ""
          )}
          <p className="scan-message">
            SCAN THE QR CODE WITH YOUR DEVICE TO RETRIEVE PHOTO
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
