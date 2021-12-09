import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.item}><NavLink activeClassName={classes.activelink} to="/profile">Profile</NavLink></div>
			<div className={classes.item}><NavLink activeClassName={classes.activelink} to="/dialogs">Messages</NavLink></div>
			<div className={classes.item}><NavLink activeClassName={classes.activelink} to="/News">News</NavLink></div>
			<div className={classes.item}><NavLink activeClassName={classes.activelink} to="/Music">Music</NavLink></div>
			<div className={classes.item}><NavLink activeClassName={classes.activelink} to="/Settings">Settings</NavLink></div>
		</nav>
	)
}
export default Navbar;


/*{`${classes.item} ${classes.active}`*/