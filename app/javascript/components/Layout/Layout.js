import React, {useState} from 'react';
import Navbar from "../Navbar/Navbar"
import Login from "../Login/Login"


export const Context = React.createContext({ name: null, setName: () => {} });

export const Layout = () => {
  const [name, setName] = useState(null)

  return(
    <Context.Provider value={{name, setName}}>
          <Navbar />
          <Login />
    </Context.Provider>
  )
    
}

export default Layout