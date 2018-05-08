import React from 'react';

const Hamburger = props => {
  const layers = []
  for(let i = 0; i < props.layers; i++) {
    layers.push(<div key={i} className={`bar-${i}`}></div>)
  }
  return <div
      className={`hamburger  ${props.visibility()}`}
      onClick={() => props.toggle()}>
        {layers}
    </div>;
}
export default Hamburger;
