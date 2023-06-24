import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateComponent = () =>{
    return <Outlet />
}

export default PrivateComponent;