import App from "../app";
import { Provider } from "../context/clients";


function Root() {
  return (
    <div>
      <Provider>
        <App />
      </Provider>
    </div>
  );
}

export default Root;
