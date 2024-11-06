import React from "react";
import "../price/price.css";
import Input from "../Sidebar/Input";

const Price = ({ ChangeHandlerRadio }) => {
  return (
    <div>
      <div className="mobail">
        <h4>Price</h4>

        <div className="lable-radio">
          <div className="form-check">
            <input className="form-check-input " type="radio" name="test2" value="" id="test2" onChange={ChangeHandlerRadio} />
            <label className="form-check-label" htmlFor="test2">
              All
            </label>
          </div>

        </div>


        <Input ChangeHandlerRadio={ChangeHandlerRadio} value={50} title="$0 - $50" name="test2" />
        <Input ChangeHandlerRadio={ChangeHandlerRadio} value={100} title="$50 - $100" name="test2" />
        <Input ChangeHandlerRadio={ChangeHandlerRadio} value={150} title="$100 - $150" name="test2" />
        <Input ChangeHandlerRadio={ChangeHandlerRadio} value={200} title="over $150" name="test2" />


      </div>
      <div className="sidebar-btn">
        <div className="btn-group dropend">
          <button type="button" className="btn btn-secondary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
            Price
          </button>
          <ul className="dropdown-menu">
            <li>
              <div className="lable-radio">
                <div className="form-check">
                  <input className="form-check-input " type="radio" name="test2" value="" id="test2" onChange={ChangeHandlerRadio} />
                  <label className="form-check-label" htmlFor="test2">
                    All
                  </label>
                </div>

              </div>
            </li>

            <li>

              <Input ChangeHandlerRadio={ChangeHandlerRadio} value={50} title="$0 - $50" name="test2" />
            </li>
            <li>  <Input ChangeHandlerRadio={ChangeHandlerRadio} value={100} title="$50 - $100" name="test2" /></li>
            <li>  <Input ChangeHandlerRadio={ChangeHandlerRadio} value={150} title="$100 - $150" name="test2" /></li>
            <li> <Input ChangeHandlerRadio={ChangeHandlerRadio} value={200} title="over $150" name="test2" /></li>

          </ul>
        </div><br /><br />

      </div>



    </div>
  );
};

export default Price;
