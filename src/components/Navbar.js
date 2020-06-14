import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active',
					  })
					: this.setState({
							navBarActiveClass: '',
					  });
			},
		);
	};

	render() {
		return (
			<nav className='navbar is-transparent' role='navigation' aria-label='main-navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<Link to='/' className='navbar-item' title='Logo'>
							<img src={logo} alt='Ironscape Logo' style={{ width: '200px' }} />
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							onClick={() => this.toggleHamburger()}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div id='navMenu' className={`navbar-menu ${this.state.navBarActiveClass}`}>
						<div className='navbar-end has-text-centered'>
							<Link className='navbar-item' to='/about'>
								Why Ironscape
							</Link>
							{/* <Link className='navbar-item' to='/products'>
								Services
							</Link> */}
							<Link className='navbar-item' to='/gallery'>
								Our Work
							</Link>
							<Link className='navbar-item last' to='/contact'>
								Contact
							</Link>
							{/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
