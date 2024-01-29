
import { Provider } from "react-redux";
import "../App.css"
import Body from './Body';
import Header from './Header';
import store from "../utils/Store";

function App() {
  return (
    
    <div >
      <Provider store={store}>
      <Header/>
      <Body/>
      </Provider>
      
    </div>
  );
}

export default App;
