import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaExchangeAlt, FaHeadphones, FaHeadphonesAlt } from "react-icons/fa";
import { LiaGg } from "react-icons/lia";
import "./InfoSection.scss";

const InfoSection = () => {
  return (
    <>
      <div className="info-container">
        <div className="info-item">
          <BiSolidPlaneAlt className="info-icon" />
          <div className="info-text">
            <span>Free</span>
            <span>Delivery</span>
          </div>
        </div>

        <div className="info-item">
          <FaHeadphonesAlt className="info-icon" />
          <div className="info-text">
            <span>Clients</span>
            <span>Discounts</span>
          </div>
        </div>

        <div className="info-item">
          <FaExchangeAlt className="info-icon" />
          <div className="info-text">
            <span>Return</span>
            <span>of goods</span>
          </div>
        </div>

        <div className="info-item">
          <LiaGg className="info-icon" />
          <div className="info-text">
            <span>Many</span>
            <span>Brands</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
