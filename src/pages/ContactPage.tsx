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
import { LuPhone, LuMail, LuMapPin, LuClock } from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import {
  openWhatsApp,
  getEnquiryMessage,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  EMAIL,
  MAPS_LINK,
} from "@/utils/whatsapp"

export function ContactPage() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = () => {
    if (form.name && form.phone) {
      openWhatsApp(getEnquiryMessage(form))
    }
  }

  const contactCards = [
    {
      icon: LuPhone,
      title: t("contact.phone"),
      lines: [PHONE_PRIMARY, PHONE_SECONDARY],
      color: "blue.500",
      action: `tel:${PHONE_PRIMARY}`,
    },
    {
      icon: FaWhatsapp,
      title: t("contact.whatsapp"),
      lines: [PHONE_PRIMARY],
      color: "green.500",
      action: "whatsapp",
    },
    {
      icon: LuMail,
      title: t("contact.email"),
      lines: [EMAIL],
      color: "brand.500",
      action: `mailto:${EMAIL}`,
    },
    {
      icon: LuClock,
      title: t("contact.hours"),
      lines: [t("contact.hoursDetail")],
      color: "accent.500",
    },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" h={{ base: "56", lg: "72" }} overflow="hidden">
        <Image src="/hero-contact.webp" alt="Contact" position="absolute" inset="0" w="full" h="full" objectFit="cover" />
        <Box position="absolute" inset="0" bg="black/50" />
        <Flex position="relative" h="full" align="center" justify="center" px="4">
          <VStack textAlign="center" gap="2">
            <Heading size={{ base: "2xl", md: "3xl" }} color="white">{t("contact.title")}</Heading>
            <Text color="gray.200" fontSize="md">{t("contact.subtitle")}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Quick Connect Cards */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "lg", md: "xl" }} color="fg">
            {t("contact.quickConnect")}
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 2, lg: 4 }} gap="4">
          {contactCards.map((card) => (
            <Card.Root
              key={card.title}
              variant="elevated"
              textAlign="center"
              _hover={{ shadow: "xl", transform: "translateY(-2px)" }}
              transition="all"
              transitionDuration="fast"
              cursor={card.action ? "pointer" : "default"}
              onClick={() => {
                if (card.action === "whatsapp") {
                  openWhatsApp("Hi, I would like to enquire about your services.")
                } else if (card.action) {
                  window.open(card.action, "_self")
                }
              }}
            >
              <Card.Body p="5" gap="3" align="center">
                <Flex w="12" h="12" rounded="full" bg={`${card.color}/10`} align="center" justify="center">
                  <Icon as={card.icon} boxSize="6" color={card.color} />
                </Flex>
                <Text fontWeight="semibold" fontSize="sm" color="fg">{card.title}</Text>
                {card.lines.map((line) => (
                  <Text key={line} fontSize="xs" color="fg.muted">{line}</Text>
                ))}
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      {/* Address & Form */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8">
            {/* Form */}
            <Card.Root variant="elevated">
              <Card.Body p="6" gap="4">
                <Heading size="lg" color="fg">{t("contact.formTitle")}</Heading>
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
                  <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">{t("contact.formService")}</Text>
                  <Input
                    placeholder={t("contact.selectService")}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" fontWeight="medium" mb="1" color="fg">{t("contact.formMessage")}</Text>
                  <Textarea
                    placeholder={t("contact.formMessage")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
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

            {/* Address & Map */}
            <VStack gap="6" align="stretch">
              <Card.Root variant="elevated">
                <Card.Body p="6" gap="4">
                  <Heading size="md" color="fg">{t("contact.address")}</Heading>
                  <HStack align="start" gap="3">
                    <Icon as={LuMapPin} boxSize="5" color="brand.fg" mt="1" />
                    <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                      {t("contact.addressFull")}
                    </Text>
                  </HStack>
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" colorPalette="brand" size="sm" w="full">
                      <Icon as={LuMapPin} mr="2" />
                      Open in Google Maps
                    </Button>
                  </a>
                </Card.Body>
              </Card.Root>

              <Box h={{ base: "56", lg: "full" }} rounded="xl" overflow="hidden" shadow="md" minH="56">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.28!3d28.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzAwLjAiTiA3N8KwMTYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "224px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AM Tour & Travels Location"
                />
              </Box>
            </VStack>
          </Grid>
        </Box>
      </Box>

      {/* CTA */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="brand.500">
        <VStack maxW="2xl" mx="auto" textAlign="center" gap="4">
          <Heading size={{ base: "xl", md: "2xl" }} color="white">
            {t("home.quickEnquiry")}
          </Heading>
          <Text color="white/80">{t("home.quickEnquiryDesc")}</Text>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap="3" w="full" maxW="md">
            <Button
              size="lg"
              bg="white"
              color="brand.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => openWhatsApp("Hi, I would like to enquire about your travel services. Please call me back.")}
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
