import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/recipe/:id" element={<Details />} />
                    <Route
                        path="*"
                        element={
                            <section className="p-3">
                                <h3 className="text-center font-bold py-6 text-red-400">
                                    Page Not Found!!
                                </h3>
                            </section>
                        }
                    />
                </Routes>
            </main>
            <Footer name="Nuru" />
        </>
    );
}
