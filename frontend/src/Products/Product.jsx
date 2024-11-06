import React from "react";
import "../Products/Product.css";


const Product = ({ result }) => {
    console.log()
    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="row product-card">

                {result} 
                

            </div>
            
        </div>
    );
};

export default Product;
