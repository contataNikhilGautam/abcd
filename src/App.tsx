import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import image from "./assets/wallpapersden.com_moon-view-orion-spacecraft-of-nasa_1920x1080.jpg";
import image1 from "./assets/wallpapersden.com_comet-neowise_5616x3744.jpg";
import image2 from "./assets/wallpapersden.com_earth-from-above-planet_1280x1024.jpg";
import image3 from "./assets/wallpapersden.com_fog-spiral-constellations_1920x1200.jpg";
import image4 from "./assets/wallpapersden.com_moon-and-planet-from-space_3072x1536.jpg";
import image5 from "./assets/wallpapersden.com_orange-bowl-nebula_3840x2160.jpg";
import image6 from "./assets/wallpapersden.com_rosette-nebula_1920x1354.jpg";
import { useState } from "react";

const App = () => {
  interface Item {
    name: string;
    desc: string;
    background: string;
  }

  const items: Item[] = [
    { name: "Moon", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image },
    { name: "Comet", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image1 },
    { name: "Earth", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image2 },
    { name: "Spiral constellations", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image3 },
    { name: "Moon and Earth", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image4 },
    { name: "Orange Bowl Nebula", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image5 },
    { name: "Rossette Nebula", desc: "Lorem ipsum dolor sit amet, consectetur adipisicing ", background: image6 }
  ];

  const [itemList, setItemList] = useState(items);

  const handleNext = () => {
    setItemList((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  const handlePrev = () => {
    setItemList((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
  };
  
  const handleMoreClick = (background: string) => {
    window.open(background, "_blank");
  };
  
  return (
    <div className="container">
      <div className="slide">
        {itemList.map((item, index) => (
          <div key={index} className="item" style={{ background: `url(${item.background})` }}>
            <div className="content">
              <h2 className="name">{item.name}</h2>
              <p className="desc">{item.desc}</p>
              <button onClick={() => handleMoreClick(item.background)}>More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button">
        <button onClick={handlePrev} className="previous"><FaArrowLeft /></button>
        <button onClick={handleNext} className="next"><FaArrowRight /></button>
      </div>
    </div>
  );
};

export default App;
