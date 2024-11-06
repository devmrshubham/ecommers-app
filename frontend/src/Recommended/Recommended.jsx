import React from 'react'
import "../Recommended/Recomended.css"
import Buttons from './Buttons'
import { useContext } from "react";
import { ContextHandler } from "../context/MainContext"

const Recommended = ({ ClickHandler }) => {
    const { setQuery } = useContext(ContextHandler)
    return (
        <div className='recomended'>
            <form className="d-flex ">
                <input className="form-control me-2" type="search" placeholder="Search Shoe" aria-label="Search" onChange={(e) => setQuery(e.target.value)} />

            </form>
            <h4>Recommended </h4>
            <div className="Recommended_buttons">

                <Buttons ClickHandler={ClickHandler} title="All Product" value="" />
                <Buttons ClickHandler={ClickHandler} title="Nike" value="Nike" />
                <Buttons ClickHandler={ClickHandler} title="Adidas" value="Adidas" />
                <Buttons ClickHandler={ClickHandler} title="Puma" value="Puma" />
                <Buttons ClickHandler={ClickHandler} title="Vans" value="Vans" />
            </div><br />

        </div>
    )
}

export default Recommended
