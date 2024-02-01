import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./Pages/View";
import Editor from "./Pages/Editor";
import NotFound from "./Pages/404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Editor />} />
                <Route path="view" element={<View />} />
                <Route path="view/:cardId" element={<View />} />
                <Route path="404" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
