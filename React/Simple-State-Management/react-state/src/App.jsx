import ShoppingCart from "./ShoppingCart";
import { ThemeProvider } from "./theme/ThemeContext";
import ThemeApp from "./theme/ThemeApp";
import FormWizard from "./form/FormWizard";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>React State Exercises</h1>
        <p className="badge">useReducer • Context • Validation</p>
      </div>

      <div className="row" style={{ marginTop: 16 }}>
        <div className="card" style={{ flex: 1, minWidth: 280 }}>
          <h2>Exercise 1 — Shopping Cart (useReducer)</h2>
          <ShoppingCart />
        </div>

        <div className="card" style={{ flex: 1, minWidth: 280 }}>
          <h2>Exercise 2 — Theme via Context</h2>
          <ThemeProvider>
            <ThemeApp />
          </ThemeProvider>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Exercise 3 — Multi-step Form Wizard (useReducer)</h2>
        <FormWizard />
      </div>
    </div>
  );
}
