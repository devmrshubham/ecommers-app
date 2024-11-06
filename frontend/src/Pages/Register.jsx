import React from 'react'
import img from "../Images/Sign up-pana.png"
import { Link } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';


const Register = () => {


    const SubmitHandler = (e) => {
        e.preventDefault()

        const data = {
            name: e.target.name.value,
            gmail: e.target.gmail.value,
            password: e.target.password.value

        }

        const SingUp = async () => {

            await axios.post(`${window.location.origin}/sign-up`, data)
                .then(
                    (success) => {
                        if (success.data.status === 1) {
                            toast.success(success.data.msg)
                            e.target.reset()

                        } else {
                            toast.error(success.data.msg)
                        }
                    }
                )
        }

        SingUp()
    }

    return (
        <div className="container register  mt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 form-img">
                    <img src={img} alt="img" className='img-fluid' />
                </div>
                <div className="col-12 col-sm-12 col-md-6 input-form">

                    <h3>Sign Up</h3>

                    <form encType='multipart/form-data' onSubmit={(e) => SubmitHandler(e)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name :</label>
                            <input type="text" name='name' className="form-control" id="exampleInputEmail1" placeholder='Enter Your name' />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email :</label>
                            <input type="email" name='gmail' className="form-control" id="exampleInputPassword1" placeholder='Enter your Email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Password :</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword2" placeholder='Enter your password' />
                        </div>
                        <div className="">
                            <p> Already have an a account    <Link to="/login">login</Link></p>
                        </div>
                        <button type="submit" className="btn btn-primary">Sing up</button>
                    </form>


                </div>

            </div>
            <br /><br />

        </div>
    )
}

export default Register
