import React from "react";
import { useState, useEffect } from "react";

function Games() {
  const [games, setGames] = useState([]);
  const [value, setValue] = useState();
  const years = [
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
  ];

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

  function handleSelect(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <select className="form-select" onChange={handleSelect}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div>
      {games
        .filter((game) => game.Year === value)
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
    </>
  );
}

export default Games;
