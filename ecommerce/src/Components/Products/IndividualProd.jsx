import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Image } from "@chakra-ui/react"
const fetchdata = (id) => {
    return axios.get(`https://peaceful-sands-12465.herokuapp.com/data/${id}`)
}
export default function IndividualProd() {
    const [data, UpdateData] = useState({})
    const params = useParams()

    useEffect(() => {
        fetchdata(params.id).
            then((res) => UpdateData(res.data))
            .catch((err) => alert(err))


    }, [params.id])
    // console.log(data);
    return (
        <>
            <Image src={data.img} alt="image" />
            <h3>{data.model}</h3>
            <h3>{data.category}</h3>
            <Link to="/">HOME PAGE</Link>
        </>
    )
}