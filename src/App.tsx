import { Suspense } from "react";
import Loading from "./pages/Loading";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-two min-w-screen min-h-screen">
        <Navbar />
        <main className="min-h-[80vh] xl:max-w-[85rem] xl:mx-auto p-5">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
