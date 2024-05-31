import React, { useEffect, useState } from "react";

export default function Task1() {
  const [vips, setVips] = useState([]);

  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    const url = "http://fs1.co.il/bus/vip.php";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setVips(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      alert("There is a problem come back later");
    }
  };
  return (
    <div className="container">
      <h1>Vip people: </h1>
      {vips.map((item) => {
        return (
            <ul className="list-group">
              <li key={item.name} className="list-group-item">
                Name: {item.name}
                <br /> Net Worth: {item.worth} <br /> Comapny: {item.source}
                <br /> Age: {new Date().getFullYear() - item.birth_year}
              </li>
            </ul>
        );
      })}
    </div>
  );
}
