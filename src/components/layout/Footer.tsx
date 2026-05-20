import { Box, Flex, Grid, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, MAPS_LINK } from "@/utils/whatsapp"

export function Footer() {
  const { t } = useTranslation()

  return (
    <Box
      as="footer"
      bg={{ base: "gray.900", _dark: "gray.950" }}
      color="gray.300"
      pt="12"
      pb={{ base: "24", lg: "8" }}
    >
      <Box maxW="7xl" mx="auto" px="4">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "2fr 1fr 1fr 1.5fr" }}
          gap="8"
        >
          <VStack align="start" gap="4">
            <HStack gap="3">
              <Image src="/logo.webp" alt="AM Tour & Travels" h="12" w="12" objectFit="contain" />
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="white">
                  AM Tour & Travels
                </Text>
                <Text fontSize="xs" color="gray.400">
                  Since 1993
                </Text>
              </Box>
            </HStack>
            <Text fontSize="sm" color="gray.400" maxW="xs">
              {t("footer.description")}
            </Text>
          </VStack>

          <VStack align="start" gap="3">
            <Text fontWeight="semibold" color="white" fontSize="sm">
              {t("footer.quickLinks")}
            </Text>
            <VStack align="start" gap="2">
              <Link to="/services">
                <Text fontSize="sm" _hover={{ color: "brand.300" }}>{t("nav.services")}</Text>
              </Link>
              <Link to="/fleet">
                <Text fontSize="sm" _hover={{ color: "brand.300" }}>{t("nav.fleet")}</Text>
              </Link>
              <Link to="/tours">
                <Text fontSize="sm" _hover={{ color: "brand.300" }}>{t("nav.tours")}</Text>
              </Link>
              <Link to="/wedding">
                <Text fontSize="sm" _hover={{ color: "brand.300" }}>{t("nav.wedding")}</Text>
              </Link>
              <Link to="/about">
                <Text fontSize="sm" _hover={{ color: "brand.300" }}>{t("nav.about")}</Text>
              </Link>
              <Link to="/contact">
                <Text fontSize="sm" _hover={{ color: "brand.300" }}>{t("nav.contact")}</Text>
              </Link>
            </VStack>
          </VStack>

          <VStack align="start" gap="3">
            <Text fontWeight="semibold" color="white" fontSize="sm">
              {t("footer.contactInfo")}
            </Text>
            <VStack align="start" gap="2">
              <HStack gap="2">
                <Icon as={LuPhone} boxSize="4" color="brand.300" />
                <a href={`tel:${PHONE_PRIMARY}`}>
                  <Text fontSize="sm">{PHONE_PRIMARY}</Text>
                </a>
              </HStack>
              <HStack gap="2">
                <Icon as={LuPhone} boxSize="4" color="brand.300" />
                <a href={`tel:${PHONE_SECONDARY}`}>
                  <Text fontSize="sm">{PHONE_SECONDARY}</Text>
                </a>
              </HStack>
              <HStack gap="2">
                <Icon as={FaWhatsapp} boxSize="4" color="green.400" />
                <Text fontSize="sm">{PHONE_PRIMARY}</Text>
              </HStack>
              <HStack gap="2">
                <Icon as={LuMail} boxSize="4" color="brand.300" />
                <Text fontSize="sm">{EMAIL}</Text>
              </HStack>
            </VStack>
          </VStack>

          <VStack align="start" gap="3">
            <Text fontWeight="semibold" color="white" fontSize="sm">
              {t("contact.address")}
            </Text>
            <HStack align="start" gap="2">
              <Icon as={LuMapPin} boxSize="4" color="brand.300" mt="1" />
              <Text fontSize="sm" color="gray.400">
                {t("contact.addressFull")}
              </Text>
            </HStack>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
              <Flex
                align="center"
                gap="2"
                px="3"
                py="1.5"
                rounded="md"
                bg="brand.500/10"
                _hover={{ bg: "brand.500/20" }}
              >
                <Icon as={LuMapPin} boxSize="4" color="brand.300" />
                <Text fontSize="sm" color="brand.300">
                  Google Maps
                </Text>
              </Flex>
            </a>
          </VStack>
        </Grid>

        <Box borderTopWidth="1px" borderColor="gray.800" mt="8" pt="6">
          <Text fontSize="xs" textAlign="center" color="gray.500">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
