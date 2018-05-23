import React from 'react';
import SlideShow from './slideShow';
import Featured from './featured';
import FinanceBar from './financeBar';
import New from './new';

const Home = (props) => {
	return (
		<div className="homeWrapper">
			<SlideShow handlePage={props.handlePage} />
			<Featured mattress={props.mattress} 
                handlePage={props.handlePage} 
                handleCurrentMattress={props.handleCurrentMattress} />
			<FinanceBar />
			<New mattress={props.mattress}
           handlePage={props.handlePage} 
           handleCurrentMattress={props.handleCurrentMattress} />
		</div>
		)
}

export default Home;