import React from "react";
import MixologistCard from "./MixologistCard";

function Mixologists() {
  const mixologists = [
    {
      name: "Jack",
      img: "/img/bartenders/1-jack.jpg",
      recipesCount: "10",
      joined: "8.3.2023",
    },
    {
      name: "Erion",
      img: "/img/bartenders/2-erion.jpg",
      recipesCount: "6",
      joined: "12.3.2023",
    },
    {
      name: "Alan",
      img: "/img/bartenders/3-alan.jpg",
      recipesCount: "4",
      joined: "10.3.2023",
    },
    {
      name: "Morten",
      img: "/img/bartenders/4-morten.jpg",
      recipesCount: "8",
      joined: "13.3.2023",
    },
  ];
  return (
    <div className="section mixologists">
      <h1 className="title">Our Best Mixologists</h1>
      <div className="mixologists-container">
        {/* <MixologistCard />
        <MixologistCard />
        <MixologistCard />
        <MixologistCard /> */}
        {mixologists.map((mixologist) => (
          <MixologistCard key={mixologist.name} mixologist={mixologist} />
        ))}
      </div>
    </div>
  );
}

export default Mixologists;
