import Arrivals from '../components/arrivalView/arrivals';
import Departures from '../components/depatureVeiw/depatures';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Provider store={store} >
        <Arrivals />
        <Departures />
      </Provider>  
    </div>
  );
}

export default App;
