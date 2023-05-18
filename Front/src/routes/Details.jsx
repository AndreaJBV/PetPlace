import { useEffect, useState } from "react";
import { Product } from "../components/Product.jsx";
import { useParams } from 'react-router-dom'

const Details = () => {

      const [details, setDetails] = useState([])

      const { id } = useParams()

      const getDetail = async()=>{
            const res = await fetch(`http://localhost:8080/api/v1/petDayCare/detail/${id}`)
            const data = await res.json()
            setDetails(data)
      }

      useEffect(()=>{
            getDetail()
      }, [])


  return (
      <div className="detail-container">  

            <Product
                  id={details.id}
                  type={details.type}
                  name={details.name}
                  image={details.image}
                  capacity={details.capacity}
                  address={details.address}
                  city={details.city}
                  detail={details.detail}
                  basicPrice={details.basicPrice}
            />
      
      </div>
  )
}

export default Details;