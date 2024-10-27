import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import MovieItem from "./pages/movieItem/MovieItem";
import Category from "./pages/listOfCategory/Category";

function App() {
  return (
    <div className="bg-gray-800">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<MovieItem />} />
            <Route path="/category" element={<Category />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
