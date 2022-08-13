import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const fetchdata = (id) => {
    return axios.get("http://localhost:8080/data/"+id)
}
export default function IndividualProd() {
    const [data, UpdateData] = useState({})
    const params = useParams()
   
    useEffect(() => {
        fetchdata(params.id).
        then((res) => UpdateData(res.data))
        .catch((err) => console.log(err))


    }, [params.id])
    console.log(data);
    return (
        <>
            <h1>indiprod</h1>
            <h3>{data.model}</h3>
        </>
    )
}