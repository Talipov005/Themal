import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiClient from '../Axios/apiClient';
import './Ingridient.css'
import ProductList from '../components/ProductList/ProductList';

const IMAGE_API = "http://www.themealdb.com/images/ingredients";

function Ingi() {
    const { title } = useParams();
    const [meals, setMeals] = useState([]);
    const [ingredientImage, setIngredientImage] = useState(null);

    useEffect(() => {

        async function getIngredientImage() {
            const imageUrl = `${IMAGE_API}/${title}.png`; 
            setIngredientImage(imageUrl);
        }

        async function getMealsByIngredient() {
            try {
                const res = await apiClient.get(`/filter.php?i=${title}`);
                setMeals(res.data.meals || []);
            } catch (error) {
                console.log(error);
            }
        }

        getIngredientImage();
        getMealsByIngredient();
    }, [title]);

    return (
        <div className="ingredient">
            <div className="image">
                {ingredientImage && (
                    <img src={ingredientImage} alt={title} />
                )}

                <div className="arrow">
                    <img src="" alt="" />
                </div>
            </div>
            <div className="meals-list">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <div key={meal.idMeal} className="cartalar">
                            <Link to={`/meal/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <h3>{meal.strMeal}</h3>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Бул ингридиент менен жасалган тамактар жок</p>
                )}
            </div>
            <ProductList/>
        </div>
    );
}

export default Ingi;
