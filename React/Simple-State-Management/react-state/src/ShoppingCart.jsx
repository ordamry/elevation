import { useReducer } from "react";

// Action types
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function calcTotals(items) {
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return { total, itemCount: items.length };
}

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const product = action.data;
      const nextItems = [...state.items, { ...product, id: Date.now() }];
      return { ...state, items: nextItems, ...calcTotals(nextItems) };
    }
    case REMOVE_ITEM: {
      const id = action.data;
      if (!state.items.some((i) => i.id === id)) {
        // Edge case: trying to remove a non-existent item → no change
        return state;
      }
      const nextItems = state.items.filter((i) => i.id !== id);
      return { ...state, items: nextItems, ...calcTotals(nextItems) };
    }
    case CLEAR_CART:
      return { ...initialState };
    default:
      return state;
  }
}

export default function ShoppingCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div>
      <div style={{ marginBottom: 8 }}>
        <strong>
          Items: {state.itemCount} | Total: ${state.total.toFixed(2)}
        </strong>
      </div>

      <div className="row" style={{ marginBottom: 8 }}>
        <button onClick={() => dispatch({ type: ADD_ITEM, data: { name: "Laptop", price: 999 } })}>
          Add Laptop
        </button>
        <button onClick={() => dispatch({ type: ADD_ITEM, data: { name: "Mouse", price: 25 } })}>
          Add Mouse
        </button>
        <button onClick={() => dispatch({ type: CLEAR_CART })} disabled={!state.items.length}>
          Clear Cart
        </button>
      </div>

      <ul style={{ paddingLeft: 16 }}>
        {state.items.map((item) => (
          <li key={item.id} style={{ marginBottom: 6 }}>
            {item.name} — ${item.price}{" "}
            <button onClick={() => dispatch({ type: REMOVE_ITEM, data: item.id })}>
              remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Expected Actions:
// dispatch({ type: 'ADD_ITEM', data: { name: 'Laptop', price: 999 } })
// dispatch({ type: 'REMOVE_ITEM', data: itemId })
// dispatch({ type: 'CLEAR_CART' })
