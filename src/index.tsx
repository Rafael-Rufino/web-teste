import ReactDOM from "react-dom";

import App from "./App";

// test-component is the name of our made up Web Component that we have
// published to npm:
import {
  applyPolyfills,
  defineCustomElements,
} from "stencil-tailwind-template/loader";

ReactDOM.render(<App />, document.getElementById("root"));

applyPolyfills().then(() => {
  defineCustomElements(window);
});
