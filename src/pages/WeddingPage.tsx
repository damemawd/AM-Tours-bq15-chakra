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
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import {
  LuHeart,
  LuCar,
  LuHotel,
  LuUtensilsCrossed,
  LuUsers,
  LuPlane,
  LuCrown,
  LuCircleCheck,
  LuStar,
} from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp, getWeddingEnquiryMessage, getBookingMessage } from "@/utils/whatsapp"

export function WeddingPage() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    requirements: "",
  })

  const handleSubmit = () => {
    if (form.name && form.phone) {
      openWhatsApp(getWeddingEnquiryMessage(form))
    }
  }

  const luxuryCars = [
    { name: "Mercedes-Benz", desc: "Elegant sophistication for your special day" },
    { name: "BMW", desc: "Premium luxury with dynamic style" },
    { name: "Audi", desc: "Modern elegance and comfort" },
    { name: "Jaguar", desc: "Classic British luxury" },
    { name: "Fortuner", desc: "Premium SUV for the entourage" },
  ]

  const inclusions = [
    { icon: LuCar, text: t("wedding.inclusion1") },
    { icon: LuUsers, text: t("wedding.inclusion2") },
    { icon: LuHotel, text: t("wedding.inclusion3") },
    { icon: LuUtensilsCrossed, text: t("wedding.inclusion4") },
    { icon: LuUsers, text: t("wedding.inclusion5") },
    { icon: LuPlane, text: t("wedding.inclusion6") },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" h={{ base: "56", lg: "72" }} overflow="hidden">
        <Image src="/hero-wedding.webp" alt="Wedding" position="absolute" inset="0" w="full" h="full" objectFit="cover" />
        <Box position="absolute" inset="0" bg="black/50" />
        <Flex position="relative" h="full" align="center" justify="center" px="4">
          <VStack textAlign="center" gap="2">
            <Heading size={{ base: "2xl", md: "3xl" }} color="white">{t("wedding.title")}</Heading>
            <Text color="gray.200" fontSize="md">{t("wedding.subtitle")}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Wedding Transport */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" alignItems="center">
          <VStack align="start" gap="4">
            <HStack gap="2">
              <Icon as={LuHeart} boxSize="6" color="red.500" />
              <Heading size={{ base: "xl", md: "2xl" }} color="fg">
                {t("wedding.transport")}
              </Heading>
            </HStack>
            <Text color="fg.muted" lineHeight="tall" fontSize="md">
              {t("wedding.transportDesc")}
            </Text>
            <Button
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
              onClick={() => openWhatsApp(getBookingMessage("wedding transport services"))}
            >
              <Icon as={FaWhatsapp} mr="2" />
              {t("common.enquireWhatsapp")}
            </Button>
          </VStack>
          <Image
            src="/hero-wedding.webp"
            alt="Wedding Transport"
            rounded="xl"
            h={{ base: "56", lg: "72" }}
            objectFit="cover"
            shadow="lg"
          />
        </Grid>
      </Box>

      {/* What's Included */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <VStack gap="2" textAlign="center" mb="8">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("wedding.inclusions")}
            </Heading>
            <Text color="fg.muted">{t("wedding.inclusionsDesc")}</Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="4">
            {inclusions.map((inc) => (
              <HStack
                key={inc.text}
                gap="3"
                p="4"
                rounded="xl"
                bg="bg"
                shadow="sm"
                _hover={{ shadow: "md" }}
                transition="all"
                transitionDuration="fast"
              >
                <Flex
                  w="10"
                  h="10"
                  rounded="full"
                  bg="brand.muted"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={inc.icon} boxSize="5" color="brand.fg" />
                </Flex>
                <Text fontWeight="medium" fontSize="sm" color="fg">
                  {inc.text}
                </Text>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* Luxury Cars Gallery */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <HStack gap="2" justify="center">
            <Icon as={LuCrown} boxSize="6" color="brand.fg" />
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("wedding.luxuryGallery")}
            </Heading>
          </HStack>
          <Text color="fg.muted">{t("wedding.luxuryGalleryDesc")}</Text>
        </VStack>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap="4">
          {luxuryCars.map((car) => (
            <Card.Root
              key={car.name}
              variant="elevated"
              _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
              transition="all"
              transitionDuration="fast"
            >
              <Card.Body p="5" gap="3">
                <Flex align="center" gap="3">
                  <Flex
                    w="10"
                    h="10"
                    rounded="full"
                    bg="brand.muted"
                    align="center"
                    justify="center"
                  >
                    <Icon as={LuCrown} boxSize="5" color="brand.fg" />
                  </Flex>
                  <Box>
                    <Text fontWeight="bold" fontSize="md" color="fg">{car.name}</Text>
                    <Text fontSize="xs" color="fg.muted">{car.desc}</Text>
                  </Box>
                </Flex>
                <HStack gap="1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} as={LuStar} boxSize="3" color="yellow.400" fill="yellow.400" />
                  ))}
                </HStack>
              </Card.Body>
              <Card.Footer p="5" pt="0">
                <Button
                  size="sm"
                  variant="outline"
                  colorPalette="brand"
                  w="full"
                  onClick={() => openWhatsApp(getBookingMessage(`${car.name} for wedding/event`))}
                >
                  <Icon as={FaWhatsapp} mr="1" />
                  {t("common.enquireWhatsapp")}
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Grid>
      </Box>

      {/* Complete Packages */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" alignItems="center">
            <Image
              src="/vehicle-luxury.webp"
              alt="Wedding Packages"
              rounded="xl"
              h={{ base: "56", lg: "72" }}
              w="full"
              objectFit="cover"
              shadow="lg"
            />
            <VStack align="start" gap="4">
              <Heading size={{ base: "xl", md: "2xl" }} color="fg">
                {t("wedding.packages")}
              </Heading>
              <Text color="fg.muted" lineHeight="tall">
                {t("wedding.packagesDesc")}
              </Text>
              <VStack align="start" gap="2">
                {[
                  "Baraat vehicle arrangements",
                  "Doli ceremony luxury car",
                  "Guest transportation (buses & tempo travellers)",
                  "Airport pickup for outstation guests",
                  "Hotel booking at partner properties",
                  "Catering and food arrangements",
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
                onClick={() => openWhatsApp(getBookingMessage("a complete wedding package"))}
              >
                <Icon as={FaWhatsapp} mr="2" />
                {t("common.getQuote")}
              </Button>
            </VStack>
          </Grid>
        </Box>
      </Box>

      {/* Inquiry Form */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "xl", md: "2xl" }} color="fg">
            {t("wedding.inquiryTitle")}
          </Heading>
          <Text color="fg.muted">{t("wedding.inquiryDesc")}</Text>
        </VStack>
        <Card.Root maxW="xl" mx="auto" variant="elevated">
          <Card.Body p="6" gap="4">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">{t("contact.formName")}</Text>
                <Input
                  placeholder={t("contact.formName")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">{t("contact.formPhone")}</Text>
                <Input
                  placeholder={t("contact.formPhone")}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">Event Type</Text>
                <Input
                  placeholder="Wedding / Reception / Party"
                  value={form.eventType}
                  onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">Event Date</Text>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                />
              </Box>
              <Box>
                <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">Number of Guests</Text>
                <Input
                  placeholder="Approximate guests"
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                />
              </Box>
            </SimpleGrid>
            <Box>
              <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">Requirements</Text>
              <Textarea
                placeholder="Tell us about your requirements..."
                value={form.requirements}
                onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                rows={4}
              />
            </Box>
            <Button
              bg="brand.500"
              color="white"
              _hover={{ bg: "brand.600" }}
              size="lg"
              w="full"
              onClick={handleSubmit}
            >
              <Icon as={FaWhatsapp} mr="2" />
              {t("contact.formSubmit")}
            </Button>
          </Card.Body>
        </Card.Root>
      </Box>
    </Box>
  )
}
