import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { FormProvider } from "./contexts/FormContext";

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);

root.render (
    <FormProvider>
        <App />
    </FormProvider>
);