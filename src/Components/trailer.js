import React from "react";

function Trailer(props) {
  return (
    <div className="ftou7">
      <iframe className="trailer" src={props.trailer}></iframe>
    </div>
  );
}

export default Trailer;
