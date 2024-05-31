import React, { useState, useEffect } from "react";

export default function Task2() {
  const [games, setGames] = useState([]);
  const publishYear = 2005;

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/xbox1.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setGames(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("There is a problem come back later");
    }
  };

  return (
    <div className="container">
      <h1>Games published in 2005: </h1>
      {games
        .filter((game) => game.Year === publishYear)
        .map((item) => {
          return (
              <ul className="list-group">
                <li className="list-group-item" key={item.Game}>
                  Game name: {item.Game} <br />
                  Publisher: {item.Publisher}
                </li>
              </ul>
          );
        })}
    </div>
  );
}
