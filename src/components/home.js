import React from 'react';
import SlideShow from './slideShow';
import Featured from './featured';
import FinanceBar from './financeBar';
import New from './new';

const Home = (props) => {
	return (
		<div className="homeWrapper">
			<SlideShow />
			<Featured mattress={props.mattress} />
			<FinanceBar />
			<New mattress={props.mattress} />
		</div>
		)
}

export default Home;