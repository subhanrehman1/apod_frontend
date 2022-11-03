import React from "react";

const Media = ({ data }) => {
  return (
    <div>
      {data?.media_type === "image" ? (
        <img className="apod-image" alt="Planetary Image" src={data?.url} />
      ) : (
        <iframe height="600vh" width="1100vw" src={data.url}></iframe>
      )}
    </div>
  );
};

export default Media;
