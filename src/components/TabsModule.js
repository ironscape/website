import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class TabsModule extends Component {
	static propTypes = {
		children: PropTypes.instanceOf(Array).isRequired,
	};

	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.children[0].props.label,
		};
	}

	onClickTabItem = (tab) => {
		this.setState({ activeTab: tab });
	};

	render() {
		const {
			onClickTabItem,
			props: { children },
			state: { activeTab },
		} = this;

		return (
			<section
				style={{
					maxWidth: '1100px',
					margin: '5rem auto',
				}}>
				<h2 className='h2 txt-center tab-headline'>What we can do for you?</h2>
				<div className='tabs'>
					<ul className='tab-list'>
						{children.map((child) => {
							const { label } = child.props;
							return <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem} />;
						})}
					</ul>
					<div className='tab-content'>
						{children.map((child) => {
							if (child.props.label !== activeTab) return undefined;
							return child.props.children;
						})}
					</div>
				</div>
			</section>
		);
	}
}

export default TabsModule;
