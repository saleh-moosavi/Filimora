import { Suspense } from "react";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-two min-w-screen min-h-screen">
      <Navbar />
      <main className="min-h-[80vh] xl:max-w-[85rem] xl:mx-auto p-5">
        <Suspense fallback={<p>loading</p>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
