import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiClient from '../axios/apiClient'; 
import './Search.css'

function Search() {
    const { text } = useParams();  
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        
        async function fetchProduct() {
            setLoading(true);  
            try {
                const response = await apiClient.get(`/search.php?s=${text}`);
                setProducts(response.data.meals || []);  
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);  
            }
        }

        if (text) {
            fetchProduct(); 
        }
    }, [text]);  

    return (
        <div className='glava'>
            <h2>Блюды на букву: {text}</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
              {products.length > 0 ? (
                  <div className="product-list">
                        {products.map((product) => (
                             <div key={product.idMeal} className="product-card">
                                 <img 
                                    src={product.strMealThumb} 
                                    alt={product.strMeal} 
                                    className="product-image" 
                                    />
                         <p>{product.strMeal}</p>
                      </div>
                            ))}
                        </div>
                    ) : (
                        <p>Такой блюдо нету</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Search;
