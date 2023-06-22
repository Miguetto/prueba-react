import { Header, Footer} from '../components';
import { InicioPage, PeliculasPage, SeriesPage } from '../pages';
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRouter = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<InicioPage />} />
        <Route path="peliculas" element={<PeliculasPage />} />
        <Route path="series" element={<SeriesPage />} />

        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>

      <Footer />
    </>
  )
}