import React from "react";
import CustomImage from "./CustomImage";

export default function HeroSection() {
  const images = [
    "/img/gallery/1.jpg",
    "/img/gallery/2.jpg",
    "/img/gallery/3.jpg",
    "/img/gallery/4.jpg",
    "/img/gallery/5.jpg",
    "/img/gallery/6.jpg",
    "/img/gallery/7.jpg",
    "/img/gallery/8.jpg",
    "/img/gallery/9.jpg",
  ];
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">Cool title is here</h1>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          officia qui accusamus rem nisi minus porro laborum itaque possimus
          ipsam, modi dignissimos dolore quibusdam in, a accusantium nostrum
          tempora! Natus.
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
        {images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
