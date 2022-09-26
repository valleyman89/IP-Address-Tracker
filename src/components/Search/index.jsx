import React, { useState } from "react";
import { useIpContext } from "../../context";

import "./Search.css";

const Search = () => {
  const { setIp } = useIpContext();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(search);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="container">
        <input
          type="text"
          placeholder="Search for any IP address"
          className="shadow pointer"
          minLength="7"
          maxLength="15"
          pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$" // thanks to StackOverflow for this regex pattern
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          value=">"
          type="submit"
          className="shadow"
          disabled={search === "" ? true : false}
        />
      </div>
    </form>
  );
};

export default Search;
