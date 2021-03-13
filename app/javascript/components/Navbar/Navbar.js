import NavItems from "./NavItems"
import React, { useContext} from 'react'
import {Context} from '../Layout/Layout'


const Navbar = () => {
  const {name} = useContext(Context)
  console.log({name})
  let isLoggedIn = <NavItems className="text-2xl no-underline text-grey-darkest hover:text-blue-dark" link = './'>Report</NavItems>
  if({name}.name!= null){
    isLoggedIn = <NavItems  className="text-2xl no-underline text-grey-darkest hover:text-blue-dark" link = './name'>Welcome Aboard {{name}.name}</NavItems>
    console.log({name}.name)
  }
  return(
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div className="mb-2 sm:mb-0">
        <p  className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Quizzy</p>
    </div>
    
    <div className="mb-2 sm:mb-0">
        {isLoggedIn}
    </div>
    </nav>
  )   
}

export default Navbar