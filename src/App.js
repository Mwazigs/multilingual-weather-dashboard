
import './App.css';

import { Provider as StoreProvider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage';


function App() {
  return (
    <StoreProvider store={store}>
    <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<Layout />} /> */}
            <Route path="/" element={<LandingPage />} />
            
          </Routes>
        </div>
      </Router>
    </StoreProvider>
 




  );
}

export default App;
