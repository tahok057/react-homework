import React from "react";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Counter from "./components/Counter";
import "./App.css";
import ImageScroll from "./components/ImageScroll";

function App() {
  const imageObjArr = [
    {
      index: 0,
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXNqnp9YsY48zMdUpkXKNbYK6sEv-Zk_UPQ&usqp=CAU",
    },
    {
      index: 1,
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDjpl_9TdCS_FV-JNUNssnEKTwPN2876eyg&usqp=CAU",
    },
    {
      index: 2,
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR59h9y4S3_xBrlS9VVAobIOW66RsCJEnNPyg&usqp=CAU",
    },
    {
      index: 3,
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVn9oQHzusxDg8Z26GxA7Dz6_dL4c_ut-hpA&usqp=CAU",
    },
  ];
  return (
    <div className="App">
      <ImageScroll images ={imageObjArr}/>
      <hr />
      <Counter />
      <hr />
      <Task2 />
      <hr />
      <Task1 />
    </div>
  );
}

export default App;
