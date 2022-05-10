import { Routes, Route } from "react-router-dom";
import Nevbar from "./Component/Nevbar.js";
import Newslist from "./Component/Newslist.js"
import Date from "./Component/Time.js"

function App() {
  const API_KEY ="cc2c724622fd43808d0974b8155cff8b";
  return (
    <>
      <div className="App">
      <Nevbar />
        <Routes>
            <Route path="/" element={<Newslist api_kry={API_KEY} category="general"/>} />
            <Route path="/business" element={<Newslist api_kry={API_KEY} category="business"/>} />
            <Route path="/entertainment" element={<Newslist api_kry={API_KEY} category="entertainment"/>} />
            <Route path="/general" element={<Newslist api_kry={API_KEY} category="general"/>} />
            <Route path="/health" element={<Newslist api_kry={API_KEY} category="health"/>} />
            <Route path="/science" element={<Newslist api_kry={API_KEY} category="science"/>} />
            <Route path="/sports" element={<Newslist api_kry={API_KEY} category="sports"/>} />
            <Route path="/technology" element={<Newslist api_kry={API_KEY} category="technology"/>} />
            <Route path="/science" element={<Newslist api_kry={API_KEY} category="science"/>} />
        </Routes>
    </div>
    </>
  );
}
export default App;
