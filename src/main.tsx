import ReactDOM from "react-dom/client";
import App from './App.tsx';
import './main.css';
import { BrowserRouter, Router } from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);
  
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);