import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Card from "./Components/Card";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hover from "./Components/Hover";




const apiURL = "https://ecommerce-response.herokuapp.com/";
function App() {

  const [product, setProduct] = useState(null);
  const loadProducts = async () => {
    const x = await axios.get(apiURL);
    setProduct(x.data);
  }
  const handle = () => {
    if (!product) {

    }
  }
  useEffect(() => {
    loadProducts();
  }, {});
  const [Option, setOption] = useState("all");



  return (
    <>
      <BrowserRouter>
        <Header />
        <select name="SelectBox" type="categories" onChange={e => setOption(e.target.value)} >
          <option value="all">All</option>
          <option value="Laptop"  >Laptops</option>
          <option value="Mobile">Mobile</option>
          <option value="Headphones">Headphones</option>
        </select>
        <div className="cards">
          {
            product &&
            <div>
              {product.filter(el => el.category === Option || Option === "all").map(el => {
                return (
                  <Link to={`/${el.id}`}>
                    <Card
                      photo={el.photo}
                      name={el.name}
                      price={el.price}
                    />
                    <Switch>
                      <Route exact path={`/${el.id}`} >
                        <Hover
                          photo={el.photo}
                          name={el.name}
                          price={el.price} />
                      </Route>
                    </Switch>
                  </Link>

                )
              })}
            </div>
          }
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
