import React from 'react';

const FinanceBar = () => {
  return(
    <div className="financeBar" aria-label="finance bar">
      <div className="financeText">
        <span className="financeBold">Instant Financing Available </span>
           <span className="finaceDash">-</span> 0% APR for up to 48 Months!
      </div>
      <button className="financeButton">Apply Now</button>
    </div>
    )
}

export default FinanceBar;
