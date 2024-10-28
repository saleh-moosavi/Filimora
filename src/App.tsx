import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import MovieItem from "./pages/movieItem/MovieItem";
import Category from "./pages/listOfCategory/Category";
import DcmaPage from "./pages/DcmaPage";
import PremiumPage from "./pages/PremiumPage";
import QuestionsPage from "./pages/QuestionsPage";

function App() {
  return (
    <div className="bg-two">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieItem />} />
          <Route path="/category" element={<Category />} />
          <Route path="/dcma" element={<DcmaPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
