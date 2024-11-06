import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { ContextHandler } from "../context/MainContext"
import { TiShoppingCart } from "react-icons/ti";





const Layout = () => {
    const { Avtive, setActive, setQuery } = useContext(ContextHandler)

    useEffect(() => {
        let login = localStorage.getItem("user")
        if (!login) {

            setActive(false)

        } else {
            setActive(true)
        }
    }, [Avtive])

    const LogOut = () => {
        localStorage.setItem("user", "")
        setActive(false)
        toast.success("User Log Out")
    }

    return (
        <>
            <div className="container-fluid main">
                <div className="row">

                    {
                        Avtive ?
                            <ul>
                                <li className="logo"> Online Shopping</li>
                                <li className="input_fild">
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search Shoe" aria-label="Search" onChange={(e) => setQuery(e.target.value)} />

                                    </form>

                                </li>  <li><NavLink to="/home" >Home</NavLink></li>
                                <Link>
                                    <li className="cart_item"><TiShoppingCart /> <div className="count">0</div></li></Link>

                                <li><button onClick={LogOut} className="btn btn-danger">LogOut</button></li>
                                <li></li>


                            </ul> :
                            <ul>
                                <li>
                                    <NavLink to="/home" >Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Signup</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>

                            </ul>
                    }



                </div>
            </div><br /><br />
            <div className="">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
