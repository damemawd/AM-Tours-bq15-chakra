import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { BottomNav } from "./BottomNav"
import { FloatingWhatsApp } from "./FloatingWhatsApp"

export function Layout() {
  return (
    <Box minH="100vh" bg="bg">
      <Header />
      <Box as="main" pb={{ base: "16", lg: "0" }}>
        <Outlet />
      </Box>
      <Footer />
      <BottomNav />
      <FloatingWhatsApp />
    </Box>
  )
}
