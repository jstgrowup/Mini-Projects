import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Sneakers() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`https://peaceful-sands-12465.herokuapp.com/data?category=sneakrs`).then((res) => setdata(res.data)).catch((err) => alert(err))


    }, [])

    return (
        <>
            <h1>Sneaker</h1>
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
    )
}