import React from 'react'

import { FaStar } from "react-icons/fa";
import { BsBagHeartFill } from "react-icons/bs";



const Card = ({ img, title, star, reviews, prevPrice, newPrice, id, SetProductId }) => {



   
    return (
        <>
            <div className="card">
                <img src={img} loading='lazy' style={{ height: "150px" }} className="card-img-top pb-2 img-fluid" alt={title} />
                <div className="card-body p-0">
                    <h6 className="card-title">{title}</h6>


                    <div className="">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className='total-review'>{reviews}</span>
                    </div>
                    <div className=" d-flex justify-content-between align-items-center">
                        <div className="price">
                            <del>{prevPrice}</del> {newPrice}
                        </div>
                        <div className="bag">
                            <BsBagHeartFill />
                        </div>
                    </div><br />
                    <div className="Add_to">
                        <button  className=' btn btn-primary outline-none border-none'>Add to Cart</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card
