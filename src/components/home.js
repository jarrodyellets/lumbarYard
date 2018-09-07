import React from 'react';
import PropTypes from 'prop-types';
import SlideShow from './slideShow';
import Featured from './featured';
import FinanceBar from './financeBar';
import New from './new';

const Home = (props) => {
  return (
    <div className="homeWrapper" aria-label="home">
      <SlideShow mattress={props.mattress}
                 width={props.width}
                 handlePage={props.handlePage}
                 handleCurrentMattress={props.handleCurrentMattress} />
      <Featured mattress={props.mattress}
                handleCurrentMattress={props.handleCurrentMattress} />
      <FinanceBar />
      <New mattress={props.mattress}
           handleCurrentMattress={props.handleCurrentMattress} />
    </div>
    )
}

Home.propTypes = {
  mattress: PropTypes.array,
  width: PropTypes.number,
  handlePage: PropTypes.func,
  handleCurrentMattress: PropTypes.func
}

export default Home;
