import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import {
  LuMapPin,
  LuBus,
  LuPlane,
  LuBriefcase,
  LuUsers,
  LuCar,
  LuHeart,
  LuPackage,
  LuArrowRight,
  LuCircleCheck,
  LuPhone,
} from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp, getBookingMessage, PHONE_PRIMARY } from "@/utils/whatsapp"

export function ServicesPage() {
  const { t } = useTranslation()

  const services = [
    {
      icon: LuMapPin,
      title: t("services.localTours"),
      desc: t("services.localToursDesc"),
      color: "brand.500",
    },
    {
      icon: LuBus,
      title: t("services.outstation"),
      desc: t("services.outstationDesc"),
      color: "accent.500",
    },
    {
      icon: LuPlane,
      title: t("services.airport"),
      desc: t("services.airportDesc"),
      color: "blue.500",
    },
    {
      icon: LuBriefcase,
      title: t("services.corporate"),
      desc: t("services.corporateDesc"),
      color: "gray.600",
    },
    {
      icon: LuUsers,
      title: t("services.tourist"),
      desc: t("services.touristDesc"),
      color: "teal.500",
    },
    {
      icon: LuCar,
      title: t("services.rental"),
      desc: t("services.rentalDesc"),
      color: "orange.500",
    },
    {
      icon: LuHeart,
      title: t("services.weddingService"),
      desc: t("services.weddingServiceDesc"),
      color: "red.500",
    },
    {
      icon: LuPackage,
      title: t("services.holidays"),
      desc: t("services.holidaysDesc"),
      color: "green.500",
    },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" h={{ base: "56", lg: "72" }} overflow="hidden">
        <Image src="/hero-services.webp" alt="Services" position="absolute" inset="0" w="full" h="full" objectFit="cover" />
        <Box position="absolute" inset="0" bg="black/50" />
        <Flex position="relative" h="full" align="center" justify="center" px="4">
          <VStack textAlign="center" gap="2">
            <Heading size={{ base: "2xl", md: "3xl" }} color="white">{t("services.title")}</Heading>
            <Text color="gray.200" fontSize="md">{t("services.subtitle")}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Services Grid */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap="6">
          {services.map((service) => (
            <Card.Root
              key={service.title}
              variant="elevated"
              _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
              transition="all"
              transitionDuration="fast"
            >
              <Card.Body p="6" gap="4">
                <HStack gap="4" align="start">
                  <Flex
                    w="12"
                    h="12"
                    rounded="xl"
                    bg={`${service.color}/10`}
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={service.icon} boxSize="6" color={service.color} />
                  </Flex>
                  <Box flex="1">
                    <Text fontWeight="bold" fontSize="md" color="fg" mb="1">
                      {service.title}
                    </Text>
                    <Text fontSize="sm" color="fg.muted" lineHeight="tall">
                      {service.desc}
                    </Text>
                  </Box>
                </HStack>
              </Card.Body>
              <Card.Footer p="6" pt="0">
                <Button
                  size="sm"
                  variant="outline"
                  colorPalette="brand"
                  onClick={() => openWhatsApp(getBookingMessage(service.title))}
                >
                  <Icon as={FaWhatsapp} mr="1" />
                  {t("common.enquireWhatsapp")}
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Grid>
      </Box>

      {/* Holiday Packages Detail */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" alignItems="center">
            <VStack align="start" gap="4">
              <Heading size={{ base: "xl", md: "2xl" }} color="fg">
                {t("services.holidays")}
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                {t("services.holidaysDesc")}
              </Text>
              <VStack align="start" gap="2">
                {[
                  "Hotel bookings at best rates",
                  "Travel tickets arrangement",
                  "Comfortable transportation",
                  "Event arrangements",
                  "Customized itineraries",
                  "24/7 travel support",
                ].map((item) => (
                  <HStack key={item} gap="2">
                    <Icon as={LuCircleCheck} color="accent.500" boxSize="4" />
                    <Text fontSize="sm" color="fg">{item}</Text>
                  </HStack>
                ))}
              </VStack>
              <Button
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.600" }}
                onClick={() => openWhatsApp(getBookingMessage("a complete holiday package"))}
              >
                <Icon as={FaWhatsapp} mr="2" />
                {t("common.getQuote")}
              </Button>
            </VStack>
            <Image
              src="/dest-manali.webp"
              alt="Holiday Packages"
              rounded="xl"
              h={{ base: "56", lg: "72" }}
              w="full"
              objectFit="cover"
              shadow="lg"
            />
          </Grid>
        </Box>
      </Box>

      {/* Custom Package CTA */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="brand.500">
        <VStack maxW="2xl" mx="auto" textAlign="center" gap="4">
          <Heading size={{ base: "xl", md: "2xl" }} color="white">
            {t("services.customPackage")}
          </Heading>
          <Text color="white/80">
            {t("services.customPackageDesc")}
          </Text>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3" w="full" maxW="md">
            <Button
              size="lg"
              bg="white"
              color="brand.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => openWhatsApp("Hi, I need a custom travel package. Here are my requirements:\n\nDestination: \nDates: \nPassengers: \nBudget: ")}
            >
              <Icon as={FaWhatsapp} mr="2" />
              {t("common.enquireWhatsapp")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{ bg: "white/10" }}
              asChild
            >
              <a href={`tel:${PHONE_PRIMARY}`}>
                <Icon as={LuPhone} mr="2" />
                {t("common.callNow")}
              </a>
            </Button>
          </SimpleGrid>
        </VStack>
      </Box>
    </Box>
  )
}
