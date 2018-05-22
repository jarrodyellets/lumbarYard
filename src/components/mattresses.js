import React from 'react';
import SingleMattress from './singleMattress';

const Mattresses = (props) =>{
  const mattresses = props.mattress.map((mattress) => {
    return  <div key={mattress.name}>
              <SingleMattress name={mattress.name}
                              image={mattress.image}
                              price={mattress.price} />
            </div>
  });
  return (
    <div className="mattressWrapper">
      <div className="mattressGrid">
        {mattresses}
      </div>
    </div>
    )
}

export default Mattresses;