import React from 'react'
import {Provider} from 'react-redux';
import reactDOM from 'react-dom/client';
import Home from './Components/Home';
import appStore from './Store/appStore';

 function App() {
  return (
   <>
   <Provider store={appStore}>
   <Home></Home>
   </Provider>
   </>
  )
}
export default App;
const root = reactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);

