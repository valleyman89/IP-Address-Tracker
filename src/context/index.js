import React, { createContext, useState, useEffect } from "react";
import { apiKey as key } from "../config";

export const IpContext = createContext();

export const formatDataObject = (data) => {
  const dataObject = {
    ...data,
    "ip address": data.ip,
    city: data.location.city,
    timezone: data.location.timezone,
  };

  return dataObject;
};

export const IpProvider = ({ children }) => {
  const [ip, setIp] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ipifyApiCall = async () => {
      try {
        const url = `/api/v2/country,city?apiKey=${key}&ipAddress=${ip}&escapedUnicode=1`;
        const response = await fetch(url);
        let dataToJson = await response.json();
        setData(formatDataObject(dataToJson));
      } finally {
        setLoading(false);
      }
    };
    ipifyApiCall();
  }, [ip]);

  return (
    <IpContext.Provider value={{ ip, data, loading, setIp }}>
      {children}
    </IpContext.Provider>
  );
};

export const useIpContext = () => {
  return React.useContext(IpContext);
};
