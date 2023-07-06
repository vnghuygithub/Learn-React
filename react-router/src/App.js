import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/news'>News</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='./' element={<HomePage />} />
        <Route path='./news' element={<NewsPage />} />
        <Route path='./contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
