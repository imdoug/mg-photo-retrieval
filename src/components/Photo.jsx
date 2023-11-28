import React from "react";
import { useParams } from "react-router-dom";

const Photo = ({ data }) => {
  const { id } = useParams();
  return (
    <>
      <div className="id">
        <p className="phototext">Share your photo!</p>
        <img className="photoshare" src={data ? data[id].photo_url : ""} />
        <a download="MeanGirls2024.png" href={data ? data[id].photo_url : ""}className="sharebtn">Share</a>
        <p className="tags">@meangirls #meangirlsmusicalmovie # 2024</p>
        <p className="copyr">COPYRIGHT LOREM IPSUM</p>
      </div>
    </>
  );
};

export default Photo;
