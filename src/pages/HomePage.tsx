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
import { Link } from "react-router-dom"
import {
  LuBus,
  LuCar,
  LuCrown,
  LuMapPin,
  LuPlane,
  LuBriefcase,
  LuHeart,
  LuPackage,
  LuShield,
  LuClock,
  LuStar,
  LuUsers,
  LuCalendar,
  LuMessageCircle,
  LuArrowRight,
  LuCircleCheck,
} from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp, getBookingMessage, MAPS_LINK } from "@/utils/whatsapp"

export function HomePage() {
  const { t } = useTranslation()

  return (
    <Box>
      {/* Hero Section */}
      <Box position="relative" minH={{ base: "85vh", lg: "75vh" }} overflow="hidden">
        <Image
          src="/hero-home.webp"
          alt="AM Tour & Travels"
          position="absolute"
          inset="0"
          w="full"
          h="full"
          objectFit="cover"
        />
        <Box
          position="absolute"
          inset="0"
          bg="linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))"
        />
        <Flex
          position="relative"
          minH={{ base: "85vh", lg: "75vh" }}
          align="center"
          justify="center"
          px="4"
        >
          <VStack gap="6" textAlign="center" maxW="2xl">
            <Image src="/logo.webp" alt="Logo" h="20" w="20" />
            <Heading
              as="h1"
              size={{ base: "2xl", md: "4xl" }}
              color="white"
              fontWeight="bold"
              lineHeight="tight"
            >
              {t("hero.title")}
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.200">
              {t("hero.subtitle")}
            </Text>
            <Flex gap="3" flexWrap="wrap" justify="center">
              <Button
                size="lg"
                bg="brand.500"
                color="white"
                _hover={{ bg: "brand.600" }}
                onClick={() => openWhatsApp(getBookingMessage("travel services"))}
              >
                <Icon as={FaWhatsapp} mr="2" />
                {t("hero.cta")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "white/10" }}
                asChild
              >
                <a href="tel:9871590403">
                  <Icon as={LuMapPin} mr="2" />
                  {t("hero.ctaCall")}
                </a>
              </Button>
            </Flex>
          </VStack>
        </Flex>
      </Box>

      {/* Trust Stats Bar */}
      <Box bg="brand.500" py="6">
        <SimpleGrid columns={{ base: 2, md: 4 }} maxW="6xl" mx="auto" px="4" gap="4">
          {[
            { num: "30+", label: t("stats.years") },
            { num: "50+", label: t("stats.vehicles") },
            { num: "10,000+", label: t("stats.customers") },
            { num: "25+", label: t("stats.destinations") },
          ].map((stat) => (
            <VStack key={stat.label} gap="0" textAlign="center">
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="white">
                {stat.num}
              </Text>
              <Text fontSize="sm" color="white/80">
                {stat.label}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Popular Tours Section */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "xl", md: "2xl" }} color="fg">
            {t("home.popularTours")}
          </Heading>
          <Text color="fg.muted" maxW="lg">
            {t("home.popularToursDesc")}
          </Text>
        </VStack>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="4">
          {[
            { img: "/dest-manali.webp", name: t("tours.manali"), desc: t("tours.manaliDesc") },
            { img: "/dest-shimla.webp", name: t("tours.shimla"), desc: t("tours.shimlaDesc") },
            { img: "/dest-amritsar.webp", name: t("tours.amritsar"), desc: t("tours.amritsarDesc") },
            { img: "/dest-agra.webp", name: t("tours.agra"), desc: t("tours.agraDesc") },
          ].map((tour) => (
            <Card.Root key={tour.name} overflow="hidden" variant="elevated" _hover={{ shadow: "xl", transform: "translateY(-2px)" }} transition="all" transitionDuration="fast">
              <Image src={tour.img} alt={tour.name} h="48" objectFit="cover" />
              <Card.Body gap="2" p="4">
                <Card.Title fontSize="md" fontWeight="semibold">{tour.name}</Card.Title>
                <Text fontSize="sm" color="fg.muted" lineClamp={2}>{tour.desc}</Text>
              </Card.Body>
              <Card.Footer p="4" pt="0">
                <Button
                  size="sm"
                  variant="outline"
                  colorPalette="brand"
                  w="full"
                  onClick={() => openWhatsApp(getBookingMessage(`a trip to ${tour.name}`))}
                >
                  {t("home.planTrip")}
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Grid>
        <Flex justify="center" mt="6">
          <Link to="/tours">
            <Button variant="ghost" colorPalette="brand">
              {t("home.viewAll")} <Icon as={LuArrowRight} ml="1" />
            </Button>
          </Link>
        </Flex>
      </Box>

      {/* Our Fleet Section */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <VStack gap="2" textAlign="center" mb="8">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("home.ourFleet")}
            </Heading>
            <Text color="fg.muted" maxW="lg">
              {t("home.ourFleetDesc")}
            </Text>
          </VStack>
          <Grid templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap="4">
            {[
              { img: "/vehicle-bus.webp", title: t("fleet.buses"), icon: LuBus },
              { img: "/vehicle-tempo.webp", title: t("fleet.tempo"), icon: LuBus },
              { img: "/vehicle-innova.webp", title: t("fleet.cars"), icon: LuCar },
              { img: "/vehicle-luxury.webp", title: t("fleet.luxury"), icon: LuCrown },
            ].map((v) => (
              <Box
                key={v.title}
                rounded="xl"
                overflow="hidden"
                position="relative"
                _hover={{ transform: "scale(1.02)" }}
                transition="all"
                transitionDuration="fast"
              >
                <Image src={v.img} alt={v.title} h={{ base: "36", lg: "48" }} w="full" objectFit="cover" />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                  p="3"
                >
                  <HStack gap="2">
                    <Icon as={v.icon} color="brand.300" />
                    <Text color="white" fontWeight="semibold" fontSize="sm">
                      {v.title}
                    </Text>
                  </HStack>
                </Box>
              </Box>
            ))}
          </Grid>
          <Flex justify="center" mt="6">
            <Link to="/fleet">
              <Button variant="ghost" colorPalette="brand">
                {t("home.exploreFleet")} <Icon as={LuArrowRight} ml="1" />
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>

      {/* Services Section */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "xl", md: "2xl" }} color="fg">
            {t("home.servicesTitle")}
          </Heading>
          <Text color="fg.muted" maxW="lg">
            {t("home.servicesDesc")}
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap="4">
          {[
            { icon: LuMapPin, title: t("services.localTours"), color: "brand.500" },
            { icon: LuBus, title: t("services.outstation"), color: "accent.500" },
            { icon: LuPlane, title: t("services.airport"), color: "blue.500" },
            { icon: LuBriefcase, title: t("services.corporate"), color: "gray.600" },
            { icon: LuUsers, title: t("services.tourist"), color: "teal.500" },
            { icon: LuCar, title: t("services.rental"), color: "orange.500" },
            { icon: LuHeart, title: t("services.weddingService"), color: "red.500" },
            { icon: LuPackage, title: t("services.holidays"), color: "green.500" },
          ].map((s) => (
            <VStack
              key={s.title}
              p="4"
              rounded="xl"
              bg="bg.subtle"
              gap="3"
              textAlign="center"
              _hover={{ shadow: "md", bg: "bg" }}
              transition="all"
              transitionDuration="fast"
            >
              <Flex
                w="12"
                h="12"
                rounded="full"
                bg={`${s.color}/10`}
                align="center"
                justify="center"
              >
                <Icon as={s.icon} boxSize="6" color={s.color} />
              </Flex>
              <Text fontSize="sm" fontWeight="medium" color="fg">
                {s.title}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt="6">
          <Link to="/services">
            <Button variant="ghost" colorPalette="brand">
              {t("home.viewServices")} <Icon as={LuArrowRight} ml="1" />
            </Button>
          </Link>
        </Flex>
      </Box>

      {/* Wedding Section */}
      <Box py={{ base: "12", lg: "16" }} position="relative" overflow="hidden">
        <Image
          src="/hero-wedding.webp"
          alt="Wedding Services"
          position="absolute"
          inset="0"
          w="full"
          h="full"
          objectFit="cover"
        />
        <Box position="absolute" inset="0" bg="black/60" />
        <Box position="relative" px="4" maxW="7xl" mx="auto">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" align="center">
            <VStack align="start" gap="4">
              <Heading size={{ base: "xl", md: "2xl" }} color="white">
                {t("home.weddingTitle")}
              </Heading>
              <Text color="gray.200" fontSize="md">
                {t("home.weddingDesc")}
              </Text>
              <VStack align="start" gap="2">
                {[t("wedding.inclusion1"), t("wedding.inclusion2"), t("wedding.inclusion3"), t("wedding.inclusion4")].map((inc) => (
                  <HStack key={inc} gap="2">
                    <Icon as={LuCircleCheck} color="brand.300" />
                    <Text color="gray.200" fontSize="sm">{inc}</Text>
                  </HStack>
                ))}
              </VStack>
              <Link to="/wedding">
                <Button size="lg" bg="brand.500" color="white" _hover={{ bg: "brand.600" }}>
                  {t("home.learnMore")} <Icon as={LuArrowRight} ml="2" />
                </Button>
              </Link>
            </VStack>
          </Grid>
        </Box>
      </Box>

      {/* Why Choose Us */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <VStack gap="2" textAlign="center" mb="8">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("home.whyChoose")}
            </Heading>
            <Text color="fg.muted" maxW="lg">
              {t("home.whyChooseDesc")}
            </Text>
          </VStack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="6">
            {[
              { icon: LuStar, title: t("whyUs.experience"), desc: t("whyUs.experienceDesc") },
              { icon: LuBus, title: t("whyUs.fleet"), desc: t("whyUs.fleetDesc") },
              { icon: LuClock, title: t("whyUs.support"), desc: t("whyUs.supportDesc") },
              { icon: LuPackage, title: t("whyUs.pricing"), desc: t("whyUs.pricingDesc") },
              { icon: LuCalendar, title: t("whyUs.custom"), desc: t("whyUs.customDesc") },
              { icon: LuShield, title: t("whyUs.safety"), desc: t("whyUs.safetyDesc") },
            ].map((item) => (
              <HStack key={item.title} align="start" gap="4" p="4" rounded="xl" bg="bg" shadow="sm">
                <Flex
                  w="10"
                  h="10"
                  rounded="lg"
                  bg="brand.muted"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={item.icon} boxSize="5" color="brand.fg" />
                </Flex>
                <Box>
                  <Text fontWeight="semibold" fontSize="sm" color="fg">
                    {item.title}
                  </Text>
                  <Text fontSize="sm" color="fg.muted" mt="1">
                    {item.desc}
                  </Text>
                </Box>
              </HStack>
            ))}
          </SimpleGrid>
        </Box>
      </Box>

      {/* How It Works */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "xl", md: "2xl" }} color="fg">
            {t("home.howItWorks")}
          </Heading>
          <Text color="fg.muted">{t("home.howItWorksDesc")}</Text>
        </VStack>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6">
          {[
            { num: "1", title: t("home.step1"), desc: t("home.step1Desc"), icon: LuMapPin },
            { num: "2", title: t("home.step2"), desc: t("home.step2Desc"), icon: LuCar },
            { num: "3", title: t("home.step3"), desc: t("home.step3Desc"), icon: LuMessageCircle },
          ].map((step) => (
            <VStack key={step.num} gap="4" textAlign="center" p="6" rounded="xl" bg="bg.subtle">
              <Flex
                w="14"
                h="14"
                rounded="full"
                bg="brand.500"
                align="center"
                justify="center"
              >
                <Icon as={step.icon} boxSize="6" color="white" />
              </Flex>
              <Box>
                <Text fontWeight="bold" fontSize="lg" color="fg">{step.title}</Text>
                <Text fontSize="sm" color="fg.muted" mt="1">{step.desc}</Text>
              </Box>
            </VStack>
          ))}
        </Grid>
      </Box>

      {/* Testimonials */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <VStack gap="2" textAlign="center" mb="8">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("home.testimonials")}
            </Heading>
          </VStack>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6">
            {[
              { text: t("testimonials.t1"), name: t("testimonials.t1Name") },
              { text: t("testimonials.t2"), name: t("testimonials.t2Name") },
              { text: t("testimonials.t3"), name: t("testimonials.t3Name") },
            ].map((review) => (
              <Card.Root key={review.name} p="6" variant="elevated">
                <Card.Body gap="4">
                  <HStack gap="1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} as={LuStar} boxSize="4" color="yellow.400" fill="yellow.400" />
                    ))}
                  </HStack>
                  <Text fontSize="sm" color="fg.muted" fontStyle="italic">
                    &ldquo;{review.text}&rdquo;
                  </Text>
                  <Text fontWeight="semibold" fontSize="sm" color="fg">
                    {review.name}
                  </Text>
                </Card.Body>
              </Card.Root>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* Popular Destinations Grid */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "xl", md: "2xl" }} color="fg">
            {t("home.destinations")}
          </Heading>
          <Text color="fg.muted" maxW="lg">
            {t("home.destinationsDesc")}
          </Text>
        </VStack>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
          gap="3"
        >
          {[
            { img: "/dest-manali.webp", name: t("tours.manali") },
            { img: "/dest-shimla.webp", name: t("tours.shimla") },
            { img: "/dest-haridwar.webp", name: t("tours.haridwar") },
            { img: "/dest-amritsar.webp", name: t("tours.amritsar") },
            { img: "/dest-vaishno-devi.webp", name: t("tours.vaishnoDevi") },
            { img: "/dest-agra.webp", name: t("tours.agra") },
            { img: "/dest-varanasi.webp", name: t("tours.varanasi") },
          ].map((dest) => (
            <Box
              key={dest.name}
              position="relative"
              rounded="xl"
              overflow="hidden"
              h={{ base: "32", lg: "40" }}
              _hover={{ transform: "scale(1.03)" }}
              transition="all"
              transitionDuration="fast"
            >
              <Image src={dest.img} alt={dest.name} w="full" h="full" objectFit="cover" />
              <Box
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                bg="linear-gradient(to top, rgba(0,0,0,0.8), transparent)"
                p="2"
              >
                <Text color="white" fontWeight="semibold" fontSize="xs" textAlign="center">
                  {dest.name}
                </Text>
              </Box>
            </Box>
          ))}
        </Grid>
        <Flex justify="center" mt="6">
          <Link to="/tours">
            <Button variant="ghost" colorPalette="brand">
              {t("home.viewAll")} <Icon as={LuArrowRight} ml="1" />
            </Button>
          </Link>
        </Flex>
      </Box>

      {/* About / Owner Section */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" alignItems="center">
            <Image
              src="/hero-about.webp"
              alt="Mohammad Ikram"
              rounded="xl"
              h={{ base: "64", lg: "80" }}
              objectFit="cover"
            />
            <VStack align="start" gap="4">
              <Heading size={{ base: "xl", md: "2xl" }} color="fg">
                {t("home.ownerMessage")}
              </Heading>
              <Text color="fg.muted" fontSize="md" lineHeight="tall">
                {t("home.ownerMessageDesc")}
              </Text>
              <HStack gap="3" flexWrap="wrap">
                <Link to="/about">
                  <Button variant="outline" colorPalette="brand">
                    {t("home.learnMore")} <Icon as={LuArrowRight} ml="1" />
                  </Button>
                </Link>
                <Button
                  bg="green.500"
                  color="white"
                  _hover={{ bg: "green.600" }}
                  onClick={() => openWhatsApp("Hi, I would like to discuss a travel booking.")}
                >
                  <Icon as={FaWhatsapp} mr="2" />
                  {t("common.enquireWhatsapp")}
                </Button>
              </HStack>
            </VStack>
          </Grid>
        </Box>
      </Box>

      {/* Google Maps Section */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="4" textAlign="center">
          <Heading size={{ base: "lg", md: "xl" }} color="fg">
            {t("contact.mapTitle")}
          </Heading>
          <Box w="full" h={{ base: "64", lg: "80" }} rounded="xl" overflow="hidden" shadow="md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5!2d77.28!3d28.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzAwLjAiTiA3N8KwMTYnNDguMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AM Tour & Travels Location"
            />
          </Box>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" colorPalette="brand" size="sm">
              <Icon as={LuMapPin} mr="2" />
              Open in Google Maps
            </Button>
          </a>
        </VStack>
      </Box>

      {/* Quick Enquiry CTA */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="brand.500">
        <VStack maxW="2xl" mx="auto" textAlign="center" gap="4">
          <Heading size={{ base: "xl", md: "2xl" }} color="white">
            {t("home.quickEnquiry")}
          </Heading>
          <Text color="white/80">
            {t("home.quickEnquiryDesc")}
          </Text>
          <Flex gap="3" flexWrap="wrap" justify="center">
            <Button
              size="lg"
              bg="white"
              color="brand.700"
              _hover={{ bg: "gray.100" }}
              onClick={() => openWhatsApp("Hi, I would like to enquire about your travel services. Please share details.")}
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
              <a href="tel:9871590403">
                {t("common.callNow")}
              </a>
            </Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  )
}
