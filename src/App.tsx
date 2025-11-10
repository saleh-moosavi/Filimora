import HomePage from "./pages/HomePage";
import Category from "./pages/Category";
import DcmaPage from "./pages/DcmaPage";
import Footer from "./components/Footer";
import MovieItem from "./pages/MovieItem";
import PremiumPage from "./pages/PremiumPage";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Navbar/Header";
import QuestionsPage from "./pages/QuestionsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="bg-two">
      <BrowserRouter>
        <main className="min-h-screen flex flex-col justify-between">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<MovieItem />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/dcma" element={<DcmaPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/questions" element={<QuestionsPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
