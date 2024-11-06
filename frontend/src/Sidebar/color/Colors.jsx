import React from 'react';
import "../color/color.css"
import Input from '../Input';

const Colors = ({ ChangeHandlerRadio }) => {
    return (
        <>
            <div className='mobail'>
                <h4>Colors</h4>

                <div className="lable-radio">
                    <div className="form-check">
                        <input className="form-check-input " type="radio" name="test3" value="" id="test3" onChange={ChangeHandlerRadio} />
                        <label className="form-check-label" htmlFor="test3">
                            All
                        </label>
                    </div>

                </div>


                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="black" title="Black" name="test3" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="blue" title="Blue" name="test3" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="red" title="Red" name="test3" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="green" title="Green" name="test3" />
                <Input ChangeHandlerRadio={ChangeHandlerRadio} value="white" title="White" name="test3" />


            </div>
            <div className="sidebar-btn">
                <div className="btn-group dropend">
                    <button type="button" className="btn btn-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                        Colors
                    </button>
                    <ul className="dropdown-menu">
                        <li>
                            <div className="lable-radio">
                                <div className="form-check">
                                    <input className="form-check-input " type="radio" name="test3" value="" id="test3" onChange={ChangeHandlerRadio} />
                                    <label className="form-check-label" htmlFor="test3">
                                        All
                                    </label>
                                </div>

                            </div>
                        </li>

                        <li>

                            <Input ChangeHandlerRadio={ChangeHandlerRadio} value="black" title="Black" name="test3" />
                        </li>
                        <li>   <Input ChangeHandlerRadio={ChangeHandlerRadio} value="blue" title="Blue" name="test3" /></li>
                        <li>  <Input ChangeHandlerRadio={ChangeHandlerRadio} value="red" title="Red" name="test3" /></li>
                        <li>  <Input ChangeHandlerRadio={ChangeHandlerRadio} value="green" title="Green" name="test3" /></li>
                        <li>   <Input ChangeHandlerRadio={ChangeHandlerRadio} value="white" title="White" name="test3" /></li>

                    </ul>
                </div>

            </div>
        </>
    )
}

export default Colors
