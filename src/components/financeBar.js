import React from 'react';

const FinanceBar = (props) => {
	return(
		<div className="financeBar">
			<div className="financeText">
				<span className="financeBold">Instant Financing Available </span>
					 - 0% APR for up to 48 Months!
			</div>
			<button className="financeButton">Apply Now</button>
		</div>
		)
}

export default FinanceBar;