import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Char_page from "./assets/component/Char_Page/Char_page";
import New_char from "./assets/component/New_Char/New_char";
import Chars_List from "./assets/component/Chars_List/Chars_list";
import NotFound from "./assets/component/NotFound/Notfound";
import MainMenu from "./assets/component/Main_Menu/Main_menu";
import "./App.css";
import Combat_page from "./assets/component/Combat_Page/Combat_page";
Combat_page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/new" element={<New_char />} />
        <Route path="/charsList" element={<Chars_List />} />
        <Route path="/char/:id" element={<Char_page />} />
        <Route path="/combat" element={<Combat_page/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
