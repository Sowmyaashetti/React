import {Link} from 'react-router-dom';
export const Navbar = () => {
    return (
        <div>Navbar
          <Link to = "/"> Home </Link>
          <Link to = "/profile"> Profile </Link>
          <Link to = "/contact"> Contact </Link>
        </div>
    );
};