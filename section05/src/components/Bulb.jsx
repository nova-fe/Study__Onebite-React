import { useState } from "react";

const Bulb = () => {
  console.log("Bulb 컴포넌트 렌더링");
  const [light, setLight] = useState("OFF");

  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {light === "OFF" ? "켜기" : "끄기"}
      </button>
    </div>
  );
};

export default Bulb;
