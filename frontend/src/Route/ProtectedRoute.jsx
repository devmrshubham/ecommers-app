import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ContextHandler } from '../context/MainContext';

const ProtectedRoute = ({ Component }) => {
    const { Avtive } = useContext(ContextHandler)
    const navigate = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("user")
        if (!login) {

            toast.error("User Not Authorized Please login")
            navigate("/login");

        }
    }, [])




    return (
        <div>
            {Avtive === false ? <>{navigate("/login")}</> : <Component />}

        </div>
    )
}

export default ProtectedRoute
