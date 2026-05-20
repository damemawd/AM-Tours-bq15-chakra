import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { ServicesPage } from "@/pages/ServicesPage"
import { FleetPage } from "@/pages/FleetPage"
import { ToursPage } from "@/pages/ToursPage"
import { WeddingPage } from "@/pages/WeddingPage"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import "@/i18n"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="fleet" element={<FleetPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="wedding" element={<WeddingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
