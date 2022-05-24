import { NavLink } from 'react-router-dom';

const NavMenu = (props) => {

  return (
      <nav>
        <ul className={`flex ${props.flexCol}`}>
          <li className={props.itemClass}>
            <NavLink className={props.navActive} to='/'>
              Home
            </NavLink>
          </li>
          <li className={props.itemClass}>
            <NavLink className={props.navActive} to='/services'>
              Services
            </NavLink>
          </li>
          <li className={props.itemClass}>
            <NavLink className={props.navActive} to='/about'>
              About
            </NavLink>
          </li>
          <li className={props.itemClass}>
            <NavLink className={props.navActive} to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default NavMenu;
