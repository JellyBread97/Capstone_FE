import React from "react";

function ImproveSkills() {
  const list = [
    "Learn new recipes",
    "Experiment with ingredients",
    "Write your own recipes",
    "Save your favourites",
    "Get inspired",
  ];

  return (
    <div className="section improve-skills">
      <div className="col img">
        <img src="/img/gallery/10.jpg" alt="" />
      </div>
      <div className="col typography">
        <h1 className="title">Unlock Your Inner Mixologist</h1>
        {list.map((item, index) => (
          <p className="skill-item" key={index}>
            {item}
          </p>
        ))}
        <button className="btn">Signup Now</button>
      </div>
    </div>
  );
}

export default ImproveSkills;
