import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createContext } from 'react';

export const server="http://localhost:5000/api/v1";

export const Context=createContext({isAuthenticated:false, setLoading: () => {}, setUser: () => {},setIsAuthenticated: () => {},userMobile:0,setUserMobile:()=>{},});

const AppWrapper = () =>{

const [isAuthenticated, setIsAuthenticated] = useState(false);
const [loading, setLoading]=useState(false);
const [user,setUser]=useState({});
const [userMobile, setUserMobile] = useState(localStorage.getItem('userMobile') || '');

useEffect(() => {
  localStorage.setItem('userMobile', userMobile);
}, [userMobile]);

return (
    <Context.Provider
    value={{
      isAuthenticated,
      setIsAuthenticated,
      loading,
      setLoading,
      user,
      setUser,
      userMobile,
      setUserMobile,
    }}
    >
    <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppWrapper />
  </React.StrictMode>,
)
