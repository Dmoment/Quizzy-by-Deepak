import React from 'react';
/* import  classes from "./Layout.css" */
const Navbar = props => {

        return(
            <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
             <div class="mb-2 sm:mb-0">
                <p  class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Quizzy</p>
            </div>

            </nav>
        )
    
}



export default Navbar