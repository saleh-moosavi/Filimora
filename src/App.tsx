import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import DcmaPage from "./pages/DcmaPage";
import Footer from "./components/Footer";
import MovieItem from "./pages/MovieItem";
import PremiumPage from "./pages/PremiumPage";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar/Navbar";
import QuestionsPage from "./pages/QuestionsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-two min-w-screen min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="min-h-[80vh] xl:max-w-[85rem] xl:mx-auto p-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<MovieItem />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/dcma" element={<DcmaPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
