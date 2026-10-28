
import { NavLink } from 'react-router-dom'



function Nav() {
  
    return (
        <nav className='mr-6 mb-2  py-4  bg-green-400 p-4 rounded-br-full'>
            <div className='flex flex-start'>
                <NavLink to='/'>Home</NavLink>
                
            </div>
               <h1>TRAVEL OUR WORLD</h1>
        </nav>
    )
}
export default Nav