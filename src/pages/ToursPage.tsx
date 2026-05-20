import {
  Box,
  Badge,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { LuClock, LuMapPin, LuCalendar, LuArrowRight } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp, getBookingMessage } from "@/utils/whatsapp"

export function ToursPage() {
  const { t } = useTranslation()

  const regions = [
    {
      id: "himachal",
      title: t("tours.himachal"),
      desc: t("tours.himachalDesc"),
      featured: true,
      destinations: [
        {
          name: t("tours.manali"),
          desc: t("tours.manaliDesc"),
          img: "/dest-manali.webp",
          distance: "540 km",
          time: "12-14 hrs",
          season: "Oct - Jun",
          featured: true,
        },
        {
          name: t("tours.shimla"),
          desc: t("tours.shimlaDesc"),
          img: "/dest-shimla.webp",
          distance: "350 km",
          time: "7-8 hrs",
          season: "All Year",
        },
        {
          name: t("tours.kullu"),
          desc: t("tours.kulluDesc"),
          img: "/dest-manali.webp",
          distance: "500 km",
          time: "11-12 hrs",
          season: "Mar - Jun, Sep - Nov",
        },
      ],
    },
    {
      id: "uttarakhand",
      title: t("tours.uttarakhand"),
      desc: t("tours.uttarakhandDesc"),
      destinations: [
        {
          name: t("tours.haridwar"),
          desc: t("tours.haridwarDesc"),
          img: "/dest-haridwar.webp",
          distance: "230 km",
          time: "5-6 hrs",
          season: "All Year",
        },
      ],
    },
    {
      id: "punjab",
      title: t("tours.punjab"),
      desc: t("tours.punjabDesc"),
      destinations: [
        {
          name: t("tours.amritsar"),
          desc: t("tours.amritsarDesc"),
          img: "/dest-amritsar.webp",
          distance: "450 km",
          time: "7-8 hrs",
          season: "Oct - Mar",
        },
      ],
    },
    {
      id: "jk",
      title: t("tours.jk"),
      desc: t("tours.jkDesc"),
      destinations: [
        {
          name: t("tours.vaishnoDevi"),
          desc: t("tours.vaishnoDeviDesc"),
          img: "/dest-vaishno-devi.webp",
          distance: "640 km",
          time: "10-12 hrs",
          season: "Mar - Oct",
        },
      ],
    },
    {
      id: "up",
      title: t("tours.up"),
      desc: t("tours.upDesc"),
      destinations: [
        {
          name: t("tours.agra"),
          desc: t("tours.agraDesc"),
          img: "/dest-agra.webp",
          distance: "210 km",
          time: "3-4 hrs",
          season: "Oct - Mar",
        },
        {
          name: t("tours.mathura"),
          desc: t("tours.mathuraDesc"),
          img: "/dest-agra.webp",
          distance: "180 km",
          time: "3 hrs",
          season: "All Year",
        },
        {
          name: t("tours.varanasi"),
          desc: t("tours.varanasiDesc"),
          img: "/dest-varanasi.webp",
          distance: "810 km",
          time: "12-14 hrs",
          season: "Oct - Mar",
        },
        {
          name: t("tours.ayodhya"),
          desc: t("tours.ayodhyaDesc"),
          img: "/dest-varanasi.webp",
          distance: "630 km",
          time: "10-11 hrs",
          season: "All Year",
        },
      ],
    },
    {
      id: "rajasthan",
      title: t("tours.rajasthan"),
      desc: t("tours.rajasthanDesc"),
      transportOnly: true,
      destinations: [],
    },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" h={{ base: "56", lg: "72" }} overflow="hidden">
        <Image src="/hero-destinations.webp" alt="Destinations" position="absolute" inset="0" w="full" h="full" objectFit="cover" />
        <Box position="absolute" inset="0" bg="black/50" />
        <Flex position="relative" h="full" align="center" justify="center" px="4">
          <VStack textAlign="center" gap="2">
            <Heading size={{ base: "2xl", md: "3xl" }} color="white">{t("tours.title")}</Heading>
            <Text color="gray.200" fontSize="md">{t("tours.subtitle")}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Regions */}
      {regions.map((region, idx) => (
        <Box
          key={region.id}
          py={{ base: "12", lg: "16" }}
          px="4"
          bg={idx % 2 === 0 ? "bg" : "bg.subtle"}
        >
          <Box maxW="7xl" mx="auto">
            <VStack align="start" gap="2" mb="6">
              <HStack gap="3">
                <Heading size={{ base: "lg", md: "xl" }} color="fg">
                  {region.title}
                </Heading>
                {region.featured && (
                  <Badge colorPalette="orange" size="sm">Popular</Badge>
                )}
                {region.transportOnly && (
                  <Badge colorPalette="gray" size="sm">{t("tours.transportOnly")}</Badge>
                )}
              </HStack>
              <Text color="fg.muted" fontSize="sm">{region.desc}</Text>
            </VStack>

            {region.destinations.length > 0 ? (
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: region.destinations.length > 2 ? "repeat(3, 1fr)" : "repeat(2, 1fr)" }}
                gap="5"
              >
                {region.destinations.map((dest) => (
                  <Card.Root
                    key={dest.name}
                    overflow="hidden"
                    variant="elevated"
                    _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
                    transition="all"
                    transitionDuration="fast"
                  >
                    <Box position="relative">
                      <Image src={dest.img} alt={dest.name} h="48" w="full" objectFit="cover" />
                      {dest.featured && (
                        <Badge position="absolute" top="3" right="3" colorPalette="orange" size="sm">
                          Top Destination
                        </Badge>
                      )}
                    </Box>
                    <Card.Body p="4" gap="3">
                      <Card.Title fontSize="lg" fontWeight="bold">{dest.name}</Card.Title>
                      <Text fontSize="sm" color="fg.muted" lineClamp={2}>{dest.desc}</Text>
                      <VStack align="start" gap="1.5">
                        <HStack gap="2">
                          <Icon as={LuMapPin} boxSize="4" color="brand.fg" />
                          <Text fontSize="xs" color="fg.muted">
                            {t("tours.distance")}: {dest.distance}
                          </Text>
                        </HStack>
                        <HStack gap="2">
                          <Icon as={LuClock} boxSize="4" color="brand.fg" />
                          <Text fontSize="xs" color="fg.muted">
                            {t("tours.travelTime")}: {dest.time}
                          </Text>
                        </HStack>
                        <HStack gap="2">
                          <Icon as={LuCalendar} boxSize="4" color="brand.fg" />
                          <Text fontSize="xs" color="fg.muted">
                            {t("tours.bestSeason")}: {dest.season}
                          </Text>
                        </HStack>
                      </VStack>
                    </Card.Body>
                    <Card.Footer p="4" pt="0">
                      <Button
                        size="sm"
                        bg="brand.500"
                        color="white"
                        _hover={{ bg: "brand.600" }}
                        w="full"
                        onClick={() => openWhatsApp(getBookingMessage(`a trip to ${dest.name}`, `Distance: ${dest.distance}, Travel time: ${dest.time}`))}
                      >
                        <Icon as={FaWhatsapp} mr="2" />
                        {t("home.planTrip")}
                      </Button>
                    </Card.Footer>
                  </Card.Root>
                ))}
              </Grid>
            ) : (
              <Card.Root variant="outline" p="6">
                <Card.Body>
                  <HStack justify="space-between" flexWrap="wrap" gap="4">
                    <Text color="fg.muted" fontSize="sm">
                      {t("tours.rajasthanDesc")}
                    </Text>
                    <Button
                      size="sm"
                      variant="outline"
                      colorPalette="brand"
                      onClick={() => openWhatsApp(getBookingMessage("transport to Rajasthan"))}
                    >
                      <Icon as={FaWhatsapp} mr="1" />
                      {t("common.enquireWhatsapp")}
                    </Button>
                  </HStack>
                </Card.Body>
              </Card.Root>
            )}
          </Box>
        </Box>
      ))}

      {/* CTA */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="brand.500">
        <VStack maxW="2xl" mx="auto" textAlign="center" gap="4">
          <Heading size={{ base: "xl", md: "2xl" }} color="white">
            {t("services.customPackage")}
          </Heading>
          <Text color="white/80">
            {t("services.customPackageDesc")}
          </Text>
          <Button
            size="lg"
            bg="white"
            color="brand.700"
            _hover={{ bg: "gray.100" }}
            onClick={() => openWhatsApp("Hi, I would like to plan a custom trip.\n\nDestination: \nTravel Dates: \nNumber of Passengers: \nVehicle Preference: \nSpecial Requirements: ")}
          >
            <Icon as={FaWhatsapp} mr="2" />
            {t("common.enquireWhatsapp")}
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}
