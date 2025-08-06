import { useState } from 'react';
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
  const [state, setState] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
    ],
    shouldDiscount: false,
    currentPage: "Landing"
  });

  const goToHome = () => {
    setState({ ...state, currentPage: "Home" });
  };

  const goToLanding = () => {
    setState({ ...state, currentPage: "Landing" });
  };

  return (
    <>
      <div>
        <button onClick={goToHome}>Go to Home</button>
        <button onClick={goToLanding}>Go to Landing</button>
      </div>

      {state.currentPage === "Landing" ? (
        <Landing user={state.user} store={state.store} />
      ) : (
        <Home store={state.store} shouldDiscount={state.shouldDiscount} />
      )}
    </>
  );
}

export default App;
