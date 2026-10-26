
import { NavLink } from 'react-router-dom'



function Nav() {
  
    return (
        <nav>
            <div className='mb-6 flex items-center justify-between py-4'>
                <NavLink to='/'>Home</NavLink>
                
            </div>
        </nav>
    )
}
export default Nav