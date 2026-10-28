
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div>
      <h1>Главная страница</h1>
      <p>Добро пожаловать в наше приложение!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>О нас</h1>
      <p>Это учебный проект, созданный с помощью React.</p>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h1>Контакты</h1>
      <p>Связаться с нами: example@email.com</p>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 — Страница не найдена</h1>
      <p>Извините, такой страницы не существует.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Главная</Link>
        {" | "}
        <Link to="/about">О нас</Link>
        {" | "}
        <Link to="/contacts">Контакты</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;