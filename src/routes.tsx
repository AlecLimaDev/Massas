import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Cardapio from "./pages/Cardapio/Cardapio";
import Menu from "./components/Menu/Menu";
import PaginaPadrao from "./components/PaginaPadrao/PaginaPadrao";
import Sobre from "./pages/Sobre/Sobre";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import Prato from "./pages/Prato/Prato";

export default function AppRouter() {
    return (
        <main className="container">
            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="/cardapio" element={<Cardapio />} />
                        <Route path="/sobre" element={<Sobre />} />
                    </Route>
                    <Route path="/prato/:id" element={<Prato />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </main>
    )
}