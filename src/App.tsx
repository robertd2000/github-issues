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

//сделать нормальную шапку сайта
//возможность открывать/закрывать issues
//Добавить аватарки комментаторов
//убрать кнопку открыть/закрыть issue если пользователь не создал issue
