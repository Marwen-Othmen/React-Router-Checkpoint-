import React from "react";
import Moviecard from "./Moviecard";

const Movielist = ({ data, searchText,rating }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: 15,
      }}
    >
      {data.filter(
        (el) =>
          el.rate >= rating &&
          el.title.toLowerCase().includes(searchText.toLowerCase())
      ).map((y) => (
        <Moviecard
          id={y.id}
          title={y.title}
          rate={y.rate}
          description={y.description}
          image={y.posterUrl}
          trailer={y.trailer}
        />
      ))}
      ;
    </div>
  );
};

export default Movielist;
