import React, { useState } from "react";

export default function ImageScroll(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex != props.images.length - 1)
      setCurrentIndex(currentIndex + 1);
    else setCurrentIndex(0);
  };

  const handlePrevious = () => {
    if (currentIndex != 0) setCurrentIndex(currentIndex - 1);
    else setCurrentIndex(props.images.length - 1);
  };

  return (
    <div>
      <img className="images" src={props.images[currentIndex].imageLink} />
      <br />
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  );
}
