import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Layout, BreedPage, CatPage } from "./pages";
import "normalize.css";
import { GlobalStyles } from "./styles/GlobalStyles";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/breeds" element={<BreedPage />} />
          <Route path="/breeds/:id" element={<CatPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
