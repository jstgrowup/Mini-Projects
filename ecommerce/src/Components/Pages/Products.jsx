import axios from "axios"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Box, Image, Heading } from "@chakra-ui/react"
export default function Products() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get(`https://peaceful-sands-12465.herokuapp.com/data`).then((res) => setdata(res.data)).catch((err) => alert(err))


    }, [])

    return (
        <>

            <Box style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
                {data.map((el) => (
                    <Box key={el.id} style={{ height: "500px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Image style={{ width: "300px" }
                        } src={el.img} alt="image" />
                        <Link style={{ textDecoration: "none" }} to={`/products/${el.id}`}><Heading size="sm">{el.model}</Heading></Link>
                        <Heading size={""}>{el.category}</Heading>
                        <Heading>{el.price}</Heading>
                    </Box>
                ))}
            </Box>


        </>
    )
}