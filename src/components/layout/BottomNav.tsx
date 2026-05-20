import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Link, useLocation } from "react-router-dom"
import { LuHouse, LuBriefcase, LuBus, LuMapPin, LuPhone } from "react-icons/lu"

const navItems = [
  { path: "/", icon: LuHouse, labelKey: "nav.home" },
  { path: "/services", icon: LuBriefcase, labelKey: "nav.services" },
  { path: "/fleet", icon: LuBus, labelKey: "nav.fleet" },
  { path: "/tours", icon: LuMapPin, labelKey: "nav.tours" },
  { path: "/contact", icon: LuPhone, labelKey: "nav.contact" },
]

export function BottomNav() {
  const { t } = useTranslation()
  const location = useLocation()

  return (
    <Box
      display={{ base: "block", lg: "none" }}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      zIndex="sticky"
      bg="bg"
      borderTopWidth="1px"
      borderColor="border.subtle"
      shadow="lg"
      pb="env(safe-area-inset-bottom)"
    >
      <Flex justify="space-around" align="center" py="1.5">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <Link key={item.path} to={item.path} style={{ flex: 1 }}>
              <VStack gap="0.5" align="center">
                <Icon
                  as={item.icon}
                  boxSize="5"
                  color={isActive ? "brand.solid" : "fg.muted"}
                />
                <Text
                  fontSize="2xs"
                  fontWeight={isActive ? "semibold" : "normal"}
                  color={isActive ? "brand.solid" : "fg.muted"}
                >
                  {t(item.labelKey)}
                </Text>
              </VStack>
            </Link>
          )
        })}
      </Flex>
    </Box>
  )
}
