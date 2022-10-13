import logo from "./logo.svg";
import "./App.css";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import PropType from "prop-types";

function App() {
  return (
    <StrictMode>
      {/* <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider> */}
      123
    </StrictMode>
  );
}

App.propTypes = {
  store: PropType.any.isRequired,
  persistor: PropType.any.isRequired,
};

export default App;
