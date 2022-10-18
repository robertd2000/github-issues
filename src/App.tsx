import { AppRouter } from "./components/AppRouter";
import Nav from "./components/UI/Nav";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

