import React from "react";
import { useSelector } from "react-redux";
import MixologistCard from "./MixologistCard";

function Mixologists() {
  const mixologists = useSelector((state) => state.user.users);
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
