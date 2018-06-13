import React from 'react';
import SingleMattress from './singleMattress';

const Mattresses = (props) =>{
  const mattresses = props.mattress.map((mattress) => {
    return  <div className="mattressGridChild" key={mattress.id}>
              <SingleMattress name={mattress.name}
                              size={mattress.size}
                              image={mattress.image}
                              id={mattress.id}
                              price={mattress.price}
                              index={mattress.index}
                              mattress={props.mattress}
                              handleCurrentMattress={props.handleCurrentMattress} />
              <hr className={["mattressHr" + mattress.index, "mattressHr"].join(" ")} />
            </div>
  });
  return (
    <div className="mattressWrapper" aria-label="mattresses">
      <div className="mattressTitle">Mattress Collections</div>
      <div className="mattressGrid">
        {mattresses}
      </div>
    </div>
    )
}

export default Mattresses;