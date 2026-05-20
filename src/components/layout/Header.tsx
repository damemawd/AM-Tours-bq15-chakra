import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import { LuPhone, LuMenu, LuX } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { useState } from "react"
import { ColorModeButton } from "@/components/ui/color-mode"
import { openWhatsApp, PHONE_PRIMARY } from "@/utils/whatsapp"

export function Header() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "hi" : "en"
    i18n.changeLanguage(newLang)
    localStorage.setItem("am-lang", newLang)
  }

  const navItems = [
    { path: "/", label: t("nav.home") },
    { path: "/services", label: t("nav.services") },
    { path: "/fleet", label: t("nav.fleet") },
    { path: "/tours", label: t("nav.tours") },
    { path: "/wedding", label: t("nav.wedding") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ]

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg"
      borderBottomWidth="1px"
      borderColor="border.subtle"
      shadow="sm"
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px="4"
        py="2"
        align="center"
        justify="space-between"
      >
        <Link to="/">
          <HStack gap="2">
            <Image src="/logo.webp" alt="AM Tour & Travels" h="10" w="10" objectFit="contain" />
            <Box>
              <Text fontWeight="bold" fontSize="sm" lineHeight="tight" color="brand.fg">
                AM Tour & Travels
              </Text>
              <Text fontSize="2xs" color="fg.muted">
                {i18n.language === "hi" ? "एएम टूर एंड ट्रैवल्स" : "Since 1993"}
              </Text>
            </Box>
          </HStack>
        </Link>

        <HStack as="nav" gap="1" display={{ base: "none", lg: "flex" }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Text
                px="3"
                py="1.5"
                rounded="md"
                fontSize="sm"
                fontWeight="medium"
                color={location.pathname === item.path ? "brand.fg" : "fg.muted"}
                bg={location.pathname === item.path ? "brand.muted" : "transparent"}
                _hover={{ bg: "brand.muted", color: "brand.fg" }}
                transition="colors"
                transitionDuration="fast"
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </HStack>

        <HStack gap="1">
          <Box
            as="button"
            onClick={toggleLang}
            px="2"
            py="1"
            rounded="md"
            fontSize="xs"
            fontWeight="bold"
            bg="accent.muted"
            color="accent.fg"
            _hover={{ bg: "accent.emphasized" }}
            cursor="pointer"
            transition="colors"
            transitionDuration="fast"
          >
            {i18n.language === "en" ? "हिं" : "EN"}
          </Box>

          <ColorModeButton />

          <IconButton
            aria-label="WhatsApp"
            variant="ghost"
            size="sm"
            color="green.500"
            onClick={() => openWhatsApp("Hi, I would like to know more about your services.")}
          >
            <FaWhatsapp />
          </IconButton>

          <IconButton
            aria-label="Call"
            variant="ghost"
            size="sm"
            display={{ base: "flex", lg: "none" }}
            asChild
          >
            <a href={`tel:${PHONE_PRIMARY}`}>
              <LuPhone />
            </a>
          </IconButton>

          <IconButton
            aria-label="Menu"
            variant="ghost"
            size="sm"
            display={{ base: "flex", lg: "none" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <LuX /> : <LuMenu />}
          </IconButton>
        </HStack>
      </Flex>

      {mobileMenuOpen && (
        <Box
          display={{ base: "block", lg: "none" }}
          px="4"
          pb="4"
          borderTopWidth="1px"
          borderColor="border.subtle"
          bg="bg"
        >
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
              <Text
                py="2.5"
                px="3"
                rounded="md"
                fontSize="sm"
                fontWeight="medium"
                color={location.pathname === item.path ? "brand.fg" : "fg"}
                bg={location.pathname === item.path ? "brand.muted" : "transparent"}
                _hover={{ bg: "brand.muted" }}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  )
}
