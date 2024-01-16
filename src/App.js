import Main from "./components/Main/Main.jsx";
import Chatmain from "./pages/Chatmain.jsx";
import WithGpt from "./pages/WithGpt.jsx";
import WithSanta from "./pages/WithSanta.jsx";
import "./styles/main.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Main/>
      <Routes >
          <Route path="/gpt" element={<WithGpt/>}></Route>
          <Route path="/santa" element={<WithSanta/>}></Route>
          <Route path="/" element={<Chatmain/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
