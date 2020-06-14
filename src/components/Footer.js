import React from 'react';
import logodark from '../images/logodark.svg';
import facebook from '../images/social/facebook.svg';
import instagram from '../images/social/instagram.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='content has-text-centered'>
				<div className='columns'>
					<div className='column '>
						<img src={logodark} alt='Ironscape Dark Logo' style={{ width: '14em' }} />
					</div>
					<div className='column '>
						<section className='menu'>
							<ul className='menu-list'>
								<li>
									<a href='tel:+9403689991' className='navbar-item'>
										940-368-9991
									</a>
								</li>
								<li>
									<a className='navbar-item' href='mailto:mickey@ironscapellc.com'>
										mickey@ironscapellc.com
									</a>
								</li>
							</ul>
						</section>
					</div>
					<div className='column social'>
						<a title='facebook' href='https://www.facebook.com/ironscapellc/' target='_blank'>
							<img src={facebook} alt='Ironscape, LLC Facebook' />
						</a>
						<a title='instagram' href='https://www.instagram.com/ironscapellc/' target='_blank'>
							<img src={instagram} alt='Ironscape, LLC Instagram' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
