
import { Provider } from "react-redux";
import "../App.css"

import Header from './Header';
import store from "../utils/Store";
import { Outlet } from "react-router-dom";


function App() {
  return (
    
    <div >
      <Provider store={store}>
      <Header/>
      <Outlet/>
      </Provider>
      
    </div>
  );
}

export default App;
