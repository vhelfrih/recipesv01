import React from "react";

const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">Food</h1>
      <div>
        filter row
        <div>filter type</div>
        <div>
          <button>Leves</button>
          <button>Főzelék</button>
          <button>Tészta</button>
          <button>Indiai</button>
          <button>Desszert</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
