import React from 'react';
import img from "../Images/Reset password-cuate.png";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';



const Edit = () => {
    const { token, id } = useParams();
    const navigate = useNavigate()
    const SubmitHandler = (e) => {
        e.preventDefault()


        const data = {
            password: e.target.password.value,
        }

        const ResetPassword = async () => {

            await axios.put(`${window.location.origin}/reset-password/${id}/${token}`, data)
                .then(
                    (success) => {
                        if (success.data.status === 1) {
                            toast.success(success.data.msg)
                            e.target.reset()
                            navigate("/login")



                        } else {
                            toast.error(success.data.msg)
                        }
                    }
                )
        }

        ResetPassword()
    }

    return (
        <div className="container register  mt-5">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 form-img">
                    <img src={img} alt="img" className='img-fluid' />
                </div>
                <div className="col-12 col-sm-12 col-md-6 input-form  ">


                    <h3>Reset Password</h3>
                    <br /><br />

                    <form encType='multipart/form-data' onSubmit={SubmitHandler}>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">New Password :</label>
                            <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder='Enter your new Password' />
                        </div><br />

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>


                </div>

            </div><br /><br />

        </div>
    )
}

export default Edit
