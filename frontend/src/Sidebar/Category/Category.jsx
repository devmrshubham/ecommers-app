import React from 'react';
import "../Category/Category.css";
import Input from '../Input';

const Category = ({ ChangeHandlerRadio }) => {
    return (
        <>
            <div className='mobail'>
                <h4>Category</h4>
                <div className="lable-radio">
                    <div className="form-check">
                        <input className="form-check-input " type="radio" name="test" value="" id="test" onChange={ChangeHandlerRadio} />
                        <label className="form-check-label" htmlFor="test">
                            All
                        </label>
                    </div>

                </div>


                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="sneakers" title="Sneakers" name="test" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="flats" title="Flats" name="test" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="sandals" title="Sandals" name="test" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="heels" title="Heels" name="test" />



            </div>

            <div className="sidebar-btn"><br /><br />
                <div className="btn-group dropend">
                    <button type="button" className="btn btn-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="lable-radio">
                                <div className="form-check">
                                    <input className="form-check-input " type="radio" name="test" value="" id="test" onChange={ChangeHandlerRadio} />
                                    <label className="form-check-label" htmlFor="test">
                                        All
                                    </label>
                                </div>

                            </div>
                        </li>

                        <li>

                            <Input ChangeHandlerRadio={ChangeHandlerRadio} value="sneakers" title="Sneakers" name="test" />
                        </li>
                        <li>   <Input ChangeHandlerRadio={ChangeHandlerRadio} value="flats" title="Flats" name="test" /></li>
                        <li>   <Input ChangeHandlerRadio={ChangeHandlerRadio} value="sandals" title="Sandals" name="test" /></li>
                        <li>  <Input ChangeHandlerRadio={ChangeHandlerRadio} value="heels" title="Heels" name="test" /></li>

                    </ul>
                </div><br /><br />

            </div>
        </>

    )
}

export default Category
