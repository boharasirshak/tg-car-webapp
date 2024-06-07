import Image from "next/image";
import React from "react";

export const Car = () => {
  return (
    <div className="card">
      <div className="car-wraps">
        <Image
          src={"/app/public/assets/images/recom-car.png"}
          alt="img"
          width={10}
          height={10}
        />
      </div>
      <div className="car-detail-wrap">
        <h5>BMW 3 series (g20)</h5>
        <span>Бензин/2021</span>
        <span>2.540.20р</span>
      </div>
    </div>
  );
};
