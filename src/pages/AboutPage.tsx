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
  LuShield,
  LuHeart,
  LuClock,
  LuBadgeCheck,
  LuBus,
  LuMapPin,
  LuUsers,
  LuStar,
} from "react-icons/lu"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp } from "@/utils/whatsapp"

export function AboutPage() {
  const { t } = useTranslation()

  const values = [
    { icon: LuShield, title: t("about.value1"), desc: t("about.value1Desc"), color: "blue.500" },
    { icon: LuHeart, title: t("about.value2"), desc: t("about.value2Desc"), color: "red.500" },
    { icon: LuClock, title: t("about.value3"), desc: t("about.value3Desc"), color: "accent.500" },
    { icon: LuBadgeCheck, title: t("about.value4"), desc: t("about.value4Desc"), color: "green.500" },
  ]

  const timeline = [
    t("about.timeline1"),
    t("about.timeline2"),
    t("about.timeline3"),
    t("about.timeline4"),
    t("about.timeline5"),
    t("about.timeline6"),
  ]

  return (
    <Box>
      {/* Hero */}
      <Box position="relative" h={{ base: "56", lg: "72" }} overflow="hidden">
        <Image src="/hero-about.webp" alt="About Us" position="absolute" inset="0" w="full" h="full" objectFit="cover" />
        <Box position="absolute" inset="0" bg="black/50" />
        <Flex position="relative" h="full" align="center" justify="center" px="4">
          <VStack textAlign="center" gap="2">
            <Heading size={{ base: "2xl", md: "3xl" }} color="white">{t("about.title")}</Heading>
            <Text color="gray.200" fontSize="md">{t("about.subtitle")}</Text>
          </VStack>
        </Flex>
      </Box>

      {/* Our Story */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="8" alignItems="center">
          <VStack align="start" gap="4">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("about.story")}
            </Heading>
            <Text color="fg.muted" lineHeight="tall">
              {t("about.storyP1")}
            </Text>
            <Text color="fg.muted" lineHeight="tall">
              {t("about.storyP2")}
            </Text>
          </VStack>
          <SimpleGrid columns={2} gap="4">
            {[
              { num: "30+", label: t("stats.years"), icon: LuStar },
              { num: "50+", label: t("stats.vehicles"), icon: LuBus },
              { num: "10,000+", label: t("stats.customers"), icon: LuUsers },
              { num: "25+", label: t("stats.destinations"), icon: LuMapPin },
            ].map((stat) => (
              <Card.Root key={stat.label} variant="elevated" p="4" textAlign="center">
                <Card.Body gap="2" align="center">
                  <Icon as={stat.icon} boxSize="6" color="brand.fg" />
                  <Text fontWeight="bold" fontSize="2xl" color="fg">{stat.num}</Text>
                  <Text fontSize="xs" color="fg.muted">{stat.label}</Text>
                </Card.Body>
              </Card.Root>
            ))}
          </SimpleGrid>
        </Grid>
      </Box>

      {/* Mission */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="7xl" mx="auto" textAlign="center">
          <VStack gap="4" maxW="2xl" mx="auto">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("about.mission")}
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="tall" fontStyle="italic">
              &ldquo;{t("about.missionDesc")}&rdquo;
            </Text>
          </VStack>
        </Box>
      </Box>

      {/* Values */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <VStack gap="2" textAlign="center" mb="8">
          <Heading size={{ base: "xl", md: "2xl" }} color="fg">
            {t("about.values")}
          </Heading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="6">
          {values.map((v) => (
            <HStack key={v.title} align="start" gap="4" p="5" rounded="xl" bg="bg.subtle">
              <Flex
                w="12"
                h="12"
                rounded="xl"
                bg={`${v.color}/10`}
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon as={v.icon} boxSize="6" color={v.color} />
              </Flex>
              <Box>
                <Text fontWeight="bold" fontSize="md" color="fg">{v.title}</Text>
                <Text fontSize="sm" color="fg.muted" mt="1">{v.desc}</Text>
              </Box>
            </HStack>
          ))}
        </SimpleGrid>
      </Box>

      {/* Timeline */}
      <Box py={{ base: "12", lg: "16" }} px="4" bg="bg.subtle">
        <Box maxW="3xl" mx="auto">
          <VStack gap="2" textAlign="center" mb="8">
            <Heading size={{ base: "xl", md: "2xl" }} color="fg">
              {t("about.timeline")}
            </Heading>
          </VStack>
          <VStack gap="0" align="stretch">
            {timeline.map((item, idx) => (
              <HStack key={idx} gap="4" align="start" py="4" borderBottomWidth={idx < timeline.length - 1 ? "1px" : "0"} borderColor="border.subtle">
                <Flex
                  w="8"
                  h="8"
                  rounded="full"
                  bg="brand.500"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Text color="white" fontWeight="bold" fontSize="xs">{idx + 1}</Text>
                </Flex>
                <Text color="fg" fontWeight="medium" fontSize="sm" pt="1">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* Owner */}
      <Box py={{ base: "12", lg: "16" }} px="4" maxW="7xl" mx="auto">
        <Grid templateColumns={{ base: "1fr", lg: "auto 1fr" }} gap="8" alignItems="center">
          <Box
            w={{ base: "48", lg: "64" }}
            h={{ base: "48", lg: "64" }}
            rounded="full"
            overflow="hidden"
            shadow="xl"
            mx={{ base: "auto", lg: "0" }}
          >
            <Image
              src="/hero-about.webp"
              alt={t("about.owner")}
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
          <VStack align={{ base: "center", lg: "start" }} gap="3" textAlign={{ base: "center", lg: "start" }}>
            <Heading size="xl" color="fg">{t("about.owner")}</Heading>
            <Text color="brand.fg" fontWeight="medium">{t("about.ownerRole")}</Text>
            <Text color="fg.muted" lineHeight="tall" maxW="xl">
              {t("about.ownerDesc")}
            </Text>
            <Button
              bg="green.500"
              color="white"
              _hover={{ bg: "green.600" }}
              onClick={() => openWhatsApp("Hi Mohammad Ikram ji, I would like to discuss a travel booking with AM Tour & Travels.")}
            >
              <Icon as={FaWhatsapp} mr="2" />
              {t("common.enquireWhatsapp")}
            </Button>
          </VStack>
        </Grid>
      </Box>
    </Box>
  )
}
