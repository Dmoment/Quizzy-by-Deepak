import React from 'react';

const Navbar = () => {
  return(
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div className="mb-2 sm:mb-0">
        <p  className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Quizzy</p>
    </div>
    </nav>
  )   
}

export default Navbar