import React from 'react'


const Input = ({ ChangeHandlerRadio, value, color, title, name }) => {

    return (
        <>

            <div className="lable-radio">
                <div className="form-check">
                    <input className={`form-check-input `} style={{ background: `${value}` }} type="radio" name={name} id={value} onChange={ChangeHandlerRadio} value={value} />
                    <label className="form-check-label" htmlFor={value}>
                        {title}
                    </label>
                </div>

            </div>


        </>
    )
}

export default Input
