import { useContext } from 'react'
import img from "../Images/Login-pana.png"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import { ContextHandler } from '../context/MainContext'


const Login = () => {
  const { setActive } = useContext(ContextHandler)
  const navigate = useNavigate()
  const LoginHandler = (e) => {
    e.preventDefault()

    const data = {

      gmail: e.target.gmail.value,
      password: e.target.password.value

    }

    const LogIn = async () => {

      await axios.post(`${window.location.origin}/log-in`, data)
        .then(
          (success) => {
            if (success.data.status === 1) {

              toast.success(success.data.msg)
              localStorage.setItem("user", JSON.stringify(success.data.user))
              setActive(true)
              e.target.reset()
              navigate("/home")

            } else {
              toast.error(success.data.msg)
            }
          }
        )
    }

    LogIn()
  }
  return (
    <div className="container register  mt-5">
      <div className="row">
      <div className="col-12 col-sm-12 col-md-6 form-img">
          <img src={img} alt="img" className='img-fluid' />
        </div>
        <div className="col-12 col-sm-12 col-md-6 input-form">

          <h3>Log in</h3>

          <form encType='multipart/form-data' onSubmit={LoginHandler}>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Email :</label>
              <input type="email" name='gmail' className="form-control" id="exampleInputPassword1" placeholder='Enter your Email' />
            </div>
            <div className=" mb-1">
              <label htmlFor="exampleInputPassword2" className="form-label">Password :</label>
              <input type="password" name='password' className="form-control" id="exampleInputPassword2" placeholder='Enter your password' />
            </div>
            <div className=" option">
              <ul>
                <li> <p> if you have to create account    <Link to="/">Sign Up</Link></p></li>
                <li> <p> forgot your password   <Link to="/login/forgot">forgot</Link></p></li>
              </ul>


            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
          </form>


        </div>
       
      </div><br /><br />

    </div>
  )
}

export default Login
