import { useEffect, useReducer } from "react";

// ----- Initial State -----
const initialState = {
  currentStep: 1,
  formData: {
    // Step 1
    name: "",
    email: "",
    age: "",
    // Step 2
    username: "",
    password: "",
    confirmPassword: "",
    // Step 3
    newsletter: false,
    notifications: true,
    theme: "light",
  },
  errors: {},
  isSubmitting: false,
  isCompleted: false,
};

// ----- Actions -----
const UPDATE_FIELD = "UPDATE_FIELD";
const SET_ERRORS = "SET_ERRORS";
const NEXT_STEP = "NEXT_STEP";
const PREV_STEP = "PREV_STEP";
const SUBMIT_FORM = "SUBMIT_FORM";
const RESET_FORM = "RESET_FORM";

// ----- Validation helpers -----
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateStep(step, data) {
  const errors = {};
  if (step === 1) {
    if (!data.name.trim()) errors.name = "Name is required";
    if (!emailRegex.test(data.email)) errors.email = "Invalid email";
    const ageNum = Number(data.age);
    if (!ageNum || ageNum < 18) errors.age = "Age must be 18+";
  }
  if (step === 2) {
    if (!data.username || data.username.length < 3) errors.username = "Username ≥ 3 chars";
    if (!data.password || data.password.length < 6) errors.password = "Password ≥ 6 chars";
    if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords must match";
  }
  // Step 3 has no validation per spec
  return errors;
}

// ----- Reducer -----
function formReducer(state, action) {
  switch (action.type) {
    case UPDATE_FIELD: {
      const { field, value } = action.data;
      return {
        ...state,
        formData: { ...state.formData, [field]: value },
        // Clear error for this field as user edits
        errors: { ...state.errors, [field]: undefined },
      };
    }
    case SET_ERRORS:
      return { ...state, errors: action.data || {} };
    case NEXT_STEP: {
      const errors = validateStep(state.currentStep, state.formData);
      if (Object.keys(errors).length > 0) {
        return { ...state, errors };
      }
      return { ...state, currentStep: Math.min(3, state.currentStep + 1), errors: {} };
    }
    case PREV_STEP:
      return { ...state, currentStep: Math.max(1, state.currentStep - 1) };
    case SUBMIT_FORM: {
      // Validate last step gates as well (even though step 3 has none)
      const errors = validateStep(state.currentStep, state.formData);
      if (Object.keys(errors).length > 0) {
        return { ...state, errors };
      }
      // Simulate submit
      return { ...state, isSubmitting: false, isCompleted: true };
    }
    case RESET_FORM:
      return { ...initialState };
    default:
      return state;
  }
}

// ----- Component -----
export default function FormWizard() {
  const [state, dispatch] = useReducer(
    formReducer,
    // restore persisted state (optional)
    (() => {
      try {
        const saved = localStorage.getItem("wizardState");
        return saved ? JSON.parse(saved) : initialState;
      } catch {
        return initialState;
      }
    })()
  );

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("wizardState", JSON.stringify(state));
  }, [state]);

  const { currentStep, formData, errors, isCompleted } = state;

  if (isCompleted) {
    return (
      <div>
        <p>🎉 Registration complete!</p>
        <pre className="card" style={{ overflowX: "auto" }}>
{JSON.stringify(formData, null, 2)}
        </pre>
        <button onClick={() => dispatch({ type: RESET_FORM })}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      <p className="badge">Step {currentStep} of 3</p>
      {currentStep === 1 && <Step1 data={formData} errors={errors} dispatch={dispatch} />}
      {currentStep === 2 && <Step2 data={formData} errors={errors} dispatch={dispatch} />}
      {currentStep === 3 && <Step3 data={formData} dispatch={dispatch} />}

      <hr />

      <div className="row">
        <button onClick={() => dispatch({ type: PREV_STEP })} disabled={currentStep === 1}>
          Back
        </button>
        {currentStep < 3 ? (
          <button onClick={() => dispatch({ type: NEXT_STEP })}>Next</button>
        ) : (
          <button onClick={() => dispatch({ type: SUBMIT_FORM })}>Submit</button>
        )}
        <button onClick={() => dispatch({ type: RESET_FORM })} style={{ marginLeft: "auto" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

// ----- Step components (presentation only) -----
function Field({ label, error, children }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
      {error ? <div className="error">{error}</div> : null}
    </div>
  );
}

function Step1({ data, errors, dispatch }) {
  return (
    <div>
      <Field label="Name" error={errors.name}>
        <input
          value={data.name}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "name", value: e.target.value } })}
          placeholder="John Doe"
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          value={data.email}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "email", value: e.target.value } })}
          placeholder="john@example.com"
        />
      </Field>

      <Field label="Age" error={errors.age}>
        <input
          type="number"
          value={data.age}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "age", value: e.target.value } })}
          placeholder="18"
          min={0}
        />
      </Field>
    </div>
  );
}

function Step2({ data, errors, dispatch }) {
  return (
    <div>
      <Field label="Username" error={errors.username}>
        <input
          value={data.username}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "username", value: e.target.value } })}
          placeholder="johndoe"
        />
      </Field>

      <Field label="Password" error={errors.password}>
        <input
          type="password"
          value={data.password}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "password", value: e.target.value } })}
          placeholder="******"
        />
      </Field>

      <Field label="Confirm Password" error={errors.confirmPassword}>
        <input
          type="password"
          value={data.confirmPassword}
          onChange={(e) =>
            dispatch({ type: UPDATE_FIELD, data: { field: "confirmPassword", value: e.target.value } })
          }
          placeholder="******"
        />
      </Field>
    </div>
  );
}

function Step3({ data, dispatch }) {
  return (
    <div>
      <Field label="Newsletter">
        <input
          type="checkbox"
          checked={data.newsletter}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "newsletter", value: e.target.checked } })}
        />
      </Field>

      <Field label="Notifications">
        <input
          type="checkbox"
          checked={data.notifications}
          onChange={(e) =>
            dispatch({ type: UPDATE_FIELD, data: { field: "notifications", value: e.target.checked } })
          }
        />
      </Field>

      <Field label="Theme">
        <select
          value={data.theme}
          onChange={(e) => dispatch({ type: UPDATE_FIELD, data: { field: "theme", value: e.target.value } })}
        >
          <option value="light">light</option>
          <option value="dark">dark</option>
        </select>
      </Field>
    </div>
  );
}
