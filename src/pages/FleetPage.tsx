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
  LuBus,
  LuCar,
  LuCrown,
  LuUsers,
  LuSnowflake,
  LuMusic,
  LuShield,
  LuBriefcase,
  LuNavigation,
  LuHeart,
  LuCircleCheck,
} from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp, getBookingMessage } from "@/utils/whatsapp"

export function FleetPage() {
  const { t } = useTranslation()

  const featureIcons = {
    ac: LuSnowflake,
    music: LuMusic,
    seats: LuUsers,
    luggage: LuBriefcase,
    gps: LuNavigation,
    firstAid: LuShield,
  }

  const vehicleCategories = [
    {
      id: "buses",
      title: t("fleet.buses"),
      desc: t("fleet.busesDesc"),
      image: "/vehicle-bus.webp",
      icon: LuBus,
      vehicles: [
        { name: "Volvo Coach", capacity: "45-52", features: ["ac", "music", "seats", "luggage", "gps", "firstAid"] },
        { name: "Semi-Deluxe Bus", capacity: "35-45", features: ["ac", "music", "seats", "luggage"] },
        { name: "Luxury Coach", capacity: "40-50", features: ["ac", "music", "seats", "luggage", "gps", "firstAid"] },
      ],
    },
    {
      id: "tempo",
      title: t("fleet.tempo"),
      desc: t("fleet.tempoDesc"),
      image: "/vehicle-tempo.webp",
      icon: LuBus,
      vehicles: [
        { name: "10-Seater", capacity: "10", features: ["ac", "music", "seats", "luggage"] },
        { name: "12-Seater", capacity: "12", features: ["ac", "music", "seats", "luggage"] },
        { name: "16-Seater", capacity: "16", features: ["ac", "music", "seats", "luggage", "gps"] },
        { name: "20-Seater", capacity: "20", features: ["ac", "music", "seats", "luggage", "gps"] },
        { name: "26-Seater", capacity: "26", features: ["ac", "music", "seats", "luggage", "gps", "firstAid"] },
      ],
    },
    {
      id: "cars",
      title: t("fleet.cars"),
      desc: t("fleet.carsDesc"),
      image: "/vehicle-innova.webp",
      icon: LuCar,
      vehicles: [
        { name: "Innova Crysta", capacity: "6-7", features: ["ac", "music", "seats", "luggage"] },
        { name: "Ertiga", capacity: "6-7", features: ["ac", "music", "seats", "luggage"] },
        { name: "Dzire", capacity: "4", features: ["ac", "music", "seats"] },
        { name: "Sedan", capacity: "4", features: ["ac", "music", "seats"] },
        { name: "SUV", capacity: "6-7", features: ["ac", "music", "seats", "luggage"] },
      ],
    },
    {
      id: "luxury",
      title: t("fleet.luxury"),
      desc: t("fleet.luxuryDesc"),
      image: "/vehicle-luxury.webp",
      icon: LuCrown,
      vehicles: [
        { name: "Audi", capacity: "4", features: ["ac", "music", "seats", "gps"] },
        { name: "BMW", capacity: "4", features: ["ac", "music", "seats", "gps"] },
        { name: "Mercedes", capacity: "4", features: ["ac", "music", "seats", "gps"] },
        { name: "Jaguar", capacity: "4", features: ["ac", "music", "seats", "gps"] },
        { name: "Fortuner", capacity: "6-7", features: ["ac", "music", "seats", "luggage", "gps"] },
      ],
    },
  ]

  const featureLabels: Record<string, string> = {
    ac: t("fleet.acAvailable"),
    music: t("fleet.musicSystem"),
    seats: t("fleet.comfortableSeats"),
    luggage: t("fleet.luggageSpace"),
    gps: t("fleet.gps"),
    firstAid: t("fleet.firstAid"),
  }

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" h={{ base: "56", lg: "72" }} overflow="hidden">
        <Image src="/hero-fleet.webp" alt="Fleet" position="absolute" inset="0" w="full" h="full" objectFit="cover" />
        <Box position="absolute" inset="0" bg="black/50" />
        <Flex position="relative" h="full" align="center" justify="center" px="4">
          <VStack textAlign="center" gap="2">
            <Heading size={{ base: "2xl", md: "3xl" }} color="white">{t("fleet.title")}</Heading>
            <Text color="gray.200" fontSize="md">{t("fleet.subtitle")}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Vehicle Categories */}
      {vehicleCategories.map((cat, idx) => (
        <Box
          key={cat.id}
          py={{ base: "12", lg: "16" }}
          px="4"
          bg={idx % 2 === 0 ? "bg" : "bg.subtle"}
        >
          <Box maxW="7xl" mx="auto">
            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" alignItems="start">
              <Box order={{ base: 0, lg: idx % 2 === 0 ? 0 : 1 }}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  rounded="xl"
                  h={{ base: "56", lg: "72" }}
                  w="full"
                  objectFit="cover"
                  shadow="lg"
                />
              </Box>
              <VStack align="start" gap="4">
                <HStack gap="3">
                  <Flex w="10" h="10" rounded="lg" bg="brand.muted" align="center" justify="center">
                    <Icon as={cat.icon} boxSize="5" color="brand.fg" />
                  </Flex>
                  <Box>
                    <Heading size="lg" color="fg">{cat.title}</Heading>
                    <Text fontSize="sm" color="fg.muted">{cat.desc}</Text>
                  </Box>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} gap="3" w="full">
                  {cat.vehicles.map((v) => (
                    <Card.Root key={v.name} size="sm" variant="outline">
                      <Card.Body p="3" gap="2">
                        <Flex justify="space-between" align="center">
                          <Text fontWeight="semibold" fontSize="sm">{v.name}</Text>
                          <HStack gap="1" bg="brand.muted" px="2" py="0.5" rounded="full">
                            <Icon as={LuUsers} boxSize="3" color="brand.fg" />
                            <Text fontSize="xs" color="brand.fg" fontWeight="medium">{v.capacity}</Text>
                          </HStack>
                        </Flex>
                        <Flex gap="1" flexWrap="wrap">
                          {v.features.map((f) => (
                            <HStack key={f} gap="1" px="1.5" py="0.5" bg="bg.subtle" rounded="sm">
                              <Icon as={featureIcons[f as keyof typeof featureIcons]} boxSize="3" color="fg.muted" />
                              <Text fontSize="2xs" color="fg.muted">{featureLabels[f]}</Text>
                            </HStack>
                          ))}
                        </Flex>
                      </Card.Body>
                    </Card.Root>
                  ))}
                </SimpleGrid>

                <Button
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: "brand.600" }}
                  onClick={() => openWhatsApp(getBookingMessage(cat.title))}
                >
                  <Icon as={FaWhatsapp} mr="2" />
                  {t("fleet.bookVehicle")}
                </Button>
              </VStack>
            </Grid>
          </Box>
        </Box>
      ))}

      {/* Special Occasions */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="brand.500">
        <Box maxW="7xl" mx="auto">
          <VStack textAlign="center" gap="4" mb="8">
            <HStack gap="2">
              <Icon as={LuHeart} boxSize="6" color="white" />
              <Heading size={{ base: "xl", md: "2xl" }} color="white">
                {t("fleet.specialTitle")}
              </Heading>
            </HStack>
            <Text color="white/80" maxW="lg">
              {t("fleet.specialDesc")}
            </Text>
          </VStack>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6">
            {["Audi", "BMW", "Mercedes", "Jaguar", "Fortuner"].map((car) => (
              <Flex
                key={car}
                align="center"
                gap="3"
                p="4"
                rounded="xl"
                bg="white/10"
                _hover={{ bg: "white/20" }}
                transition="all"
                transitionDuration="fast"
              >
                <Icon as={LuCircleCheck} color="white" boxSize="5" />
                <Text color="white" fontWeight="medium">{car}</Text>
              </Flex>
            ))}
          </Grid>
          <Flex justify="center" mt="8">
            <Button
              size="lg"
              bg="white"
              color="brand.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => openWhatsApp(getBookingMessage("a luxury car for wedding/special occasion"))}
            >
              <Icon as={FaWhatsapp} mr="2" />
              {t("home.enquireNow")}
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
