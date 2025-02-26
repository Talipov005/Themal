import React, { useState, useEffect } from 'react';
import ApiClient from '../axios/ApiClient';
import './Home.css';
import ProductList from '../components/ProductList/ProductList';
import image2 from '../assets/meal-icon.png';
import Paypal from '../assets/Paypai.png';
import icon1 from '../assets/meal-icon1.png';
import icon2 from '../assets/meal-icon2.png';
import icon3 from '../assets/image-icon3.png';
import foto1 from '../assets/foto1.jpg';
import Country from '../components/Country/Country';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); 
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  async function getProduct() {
    try {
      const res = await ApiClient.get("/search.php?s=a");
      console.log(res);
      setProducts(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className='container-home'>
      <div className='container1'>
        <div>
          <img src={image2} alt="Значок еды" />
        </div>
        <div>
          <h1>Добро пожаловать на TheMealDB</h1>
          <p className='p1'>
            Добро пожаловать на TheMealDB: открытая, массовая -исходная база рецептов со всего мира.
            <br />
            Мы также предлагаем <span className='guron'>бесплатный API рецептов</span> для всех, кто хочет его использовать, с дополнительными функциями для подписчиков.
          </p>
          <img className='paypai' src={Paypal} alt="PayPal" />
          <p>
            Нажмите кнопку выше, чтобы перейти с бесплатного API рецептов на премиум-версию.
            <br />
            3 доллара в месяц с возможностью отмены в любое время. В настоящее время 54 подписчика.
          </p>
        </div>
        <div>
          <img src={image2} alt="Значок блюда" />
        </div>
      </div>
      <div className='total'>
        <input
          type="text"
          placeholder="Поиск блюда.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className='icon'>
          <img src={icon1} alt="Значок блюда" />
          <p>Всего блюд: 303</p>
          <div className='icon2'>
            <img src={icon2} alt="Значок ингредиентов" />
            <p>Всего ингредиентов: 575</p>
          </div>
          <img src={icon3} alt="Значок изображения" />
          <p>Изображений: 303</p>
        </div>
      </div>
      <div>
        <ProductList products={products} />
        <Country />
      </div>
      <div className='tamaktar'>
        <h3>Последние блюда</h3>
        <div className='cards'>
          <div className='card'>
            <img src={foto1} alt="" />
            <p>15-минутные бургеры с курицей и халлуми</p>
          </div>
        </div>
      </div>
      <h2 className='ahref'>
        {['A /', 'B /', 'C /', 'D /', 'E /', 'F /', 'G /', 'H /', 'I /', 'J /', 'K /', 'L /', 'M /', 'N /', 'O /', 'P /', 'Q /', 'R /', 'S /', 'T /', 'U /', 'V /', 'W /', 'X /', 'Y /', 'Z'].map((letter) => (
          <Link to={`/bukva/${letter}`} key={letter}>
            {letter}
          </Link>
        ))}
      </h2>
    </div>
  );
}

export default Home;