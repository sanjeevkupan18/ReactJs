// import React from 'react';
// import Counter from './components/Counter'
// import { CounterContext } from './Context/Counter';
// import { useContext } from 'react';

// const App = ()=>{
//   const counterState = useContext(CounterContext);


//   return (
//     <div className="App">
//       <h1>Count is {counterState.count}</h1>
//       <Counter />
//       <Counter />
//       <Counter />
//       <Counter />
//     </div>
//   )
// }

// export default App;

import React from 'react';
import Item from './components/Item'
import Cart from './components/Cart'

const App=()=>{
  return (
    <div className="App">
      <Item name="Macbook Pro" price={100000}/>
      <Item name="Pendrive" price={800}/>
      <Item name="Mobile" price={12000}/>
      <Cart />
    </div>
  )
}

export default App;