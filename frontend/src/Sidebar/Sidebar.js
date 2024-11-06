import React from 'react';
import "../Sidebar/sidebar.css"
import Category from "./Category/Category";
import Price from "../price/Price";
import Color from "./color/Colors"

const Sidebar = ({ ChangeHandlerRadio }) => {
    return (
        <div className=''>
<br />
            <Category ChangeHandlerRadio={ChangeHandlerRadio} /><br />
            <Price ChangeHandlerRadio={ChangeHandlerRadio} /><br />
            <Color ChangeHandlerRadio={ChangeHandlerRadio} />
        </div>

    )
}

export default Sidebar
