import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Products() {
  const [data, updateData] = useState([]);
  const fetchdata = () => {
    axios.get(`http://localhost:8081/data`).then((res) => updateData(res.data));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <div>
        {data.map((el) => (
          <div key={el.id}>
            <img src={el.img} alt="image" />
            <h1>{el.model}</h1>
            <h3>{el.category}</h3>
            <h3>{el.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
