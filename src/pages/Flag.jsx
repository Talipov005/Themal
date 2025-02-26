import React, {useState, useEffect} from 'react'
import ProductList from '../components/ProductList/ProductList'
import apiClient from '../axios/apiClient'
import { useParams } from 'react-router-dom'
import Country from '../components/Country/Country'

function Flag() {
    const {value} = useParams()
    const [product, setProduct] = useState([])

    async function getFlag() {
        try {
            const res = await apiClient.get(`/filter.php?a=${value}`)

            console.log(res);
            setProduct(res.data.meals)
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    useEffect(() => {
        getFlag()
    },[value])
  return (
    <div>
      Flag {value}
      <ProductList data={product}/>
      <Country/>
    </div>
  )
}

export default Flag
