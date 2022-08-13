import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const fetchdata = () => {
  return axios.get(`http://localhost:8080/data`)
};
export default function Products() {
  const [data, updateData] = useState([]);
  useEffect(() => {
    fetchdata().then((res) => updateData(res.data));
  }, []);


  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {data.map((el) => (
          <div key={el.id}>
            <img style={{ width: "300px" }
            } src={el.img} alt="image" />
            <Link to={`/products/${el.id}`}>{el.model}</Link>
            <h3>{el.category}</h3>
            <h3>{el.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
