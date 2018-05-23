import React from 'react';
import SingleMattress from './singleMattress';

const Mattresses = (props) =>{
  const mattresses = props.mattress.map((mattress) => {
    return  <div key={mattress.id}>
              <SingleMattress name={mattress.name}
                              size={mattress.size}
                              image={mattress.image}
                              id={mattress.id}
                              price={mattress.price}
                              index={mattress.index}
                              mattress={props.mattress}
                              handleCurrentMattress={props.handleCurrentMattress} />
            </div>
  });
  return (
    <div className="mattressWrapper">
      <div className="mattressTitle">Mattress Collections</div>
      <div className="mattressGrid">
        {mattresses}
      </div>
    </div>
    )
}

export default Mattresses;