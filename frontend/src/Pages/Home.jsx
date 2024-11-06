import React, { useState, useContext, } from 'react'
import Product from '../Products/Product'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar'
import "../Pages/Home.css"
import Products from "../db/data";
import Card from '../Components/Card'
import { ContextHandler } from '../context/MainContext'



const Home = () => {
    const { Query } = useContext(ContextHandler)
    const [selectCategory, SetselectCategory] = useState(null);


    ;





    //-------input filter-----


    const filterItem = Products.filter(product => product.title.toLocaleLowerCase().indexOf(Query.toLocaleLowerCase()) !== -1)


    //---Radio filter

    const ChangeHandlerRadio = (event) => {
        SetselectCategory(event.target.value)
    }

    //----Buttons Filter-----

    const ClickHandler = (event) => {
        SetselectCategory(event.target.value)
    }

    function FilterData(Products, selected, Query) {
        let FilteredProducts = Products;

        //filtring input item
        if (Query) {
            FilteredProducts = filterItem
        }

        //selected filter

        if (selected) {
            FilteredProducts = FilteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice === selected || title === selected)
        }

        return FilteredProducts.map(({ id, img, title, star, reviews, prevPrice, newPrice }) => (

            <Card

                key={Math.random()}
                id={id}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                prevPrice={prevPrice}
                newPrice={newPrice} />
        ))


    }

    const result = FilterData(Products, selectCategory, Query);






    return (
        <div ><br />
            <div className="container-fluid Sidebar ">

                <div className="row1">
                    <Sidebar ChangeHandlerRadio={ChangeHandlerRadio} />
                </div>

                <div className="row2">

                    <div className="">
                        <Recommended ClickHandler={ClickHandler} />
                        <Product result={result} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
