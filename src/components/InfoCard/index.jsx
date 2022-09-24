import React from "react";
import { useIpContext } from "../../context";

import "./InfoCard.css";

const InfoCard = () => {
  const { data } = useIpContext();
  return (
    <div className="container">
      <div className="info-card shadow">
        {["ip address", "city", "timezone", "isp"].map((item, index) => (
          <div key={index} className="info-item">
            <h4>{item === "city" ? "location" : item}</h4>
            <p>
              {item === "timezone" ? "UTC " : null}
              {`${data[item]}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
