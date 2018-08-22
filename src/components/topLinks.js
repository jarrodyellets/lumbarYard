import React from 'react';

const TopLinks = () => {
  return (
      <div className="topIcons" aria-label="top icons">
        <div className="topLeft">
          <i className="fab fa-facebook socialTop"></i>
          <i className="fab fa-instagram socialTop"></i>
          <i className="fab fa-twitter-square socialTop"></i>
          <div className="shipping">Free shipping on orders over $1000!</div>
        </div>
        <div className="slogan">Mattress professionals since 1997</div>
      </div>
    )
}

export default TopLinks;