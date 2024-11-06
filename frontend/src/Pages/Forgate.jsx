import React from 'react';
import img from "../Images/Forgot password-bro.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Forgate = () => {

    const navigate = useNavigate()
    const SubmitHandler = (e) => {
        e.preventDefault()

        const data = {

            gmail: e.target.gmail.value,


        }

        const ForgatePassword = async () => {

            await axios.post(`${window.location.origin}/forgot-password`, data)
                .then(
                    (success) => {
                        if (success.data.status === 1) {
                            console.log(success)
                            toast.success(success.data.msg)
                            e.target.reset()
                            navigate(`/reset-password/${success.data.token}/${success.data.user._id}`)


                        } else {
                            toast.error(success.data.msg)
                        }
                    }
                )
        }

        ForgatePassword()
    }

    return (
        <div className="container register  mt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 form-img">
                    <img src={img} alt="img" className='img-fluid' />
                </div>
                <div className="col-12 col-sm-12 col-md-6 input-form  ">


                    <h3>Forgot Password</h3>
                    <br /><br />

                    <form encType='multipart/form-data' onSubmit={SubmitHandler}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email :</label>
                            <input type="email" name='gmail' className="form-control" id="exampleInputPassword1" placeholder='Enter your Email' />
                        </div><br />

                        <button type="submit" className="btn btn-primary">Forgot</button>
                    </form>


                </div>

            </div><br /><br />

        </div>
    )
}

export default Forgate
