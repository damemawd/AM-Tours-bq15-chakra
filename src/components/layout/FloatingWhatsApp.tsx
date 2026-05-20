import { Box, Icon } from "@chakra-ui/react"
import { FaWhatsapp } from "react-icons/fa6"
import { openWhatsApp } from "@/utils/whatsapp"

export function FloatingWhatsApp() {
  return (
    <Box
      position="fixed"
      bottom={{ base: "20", lg: "6" }}
      right="4"
      zIndex="overlay"
    >
      <Box
        as="button"
        onClick={() => openWhatsApp("Hi, I would like to enquire about your travel services.")}
        bg="green.500"
        color="white"
        rounded="full"
        p="3.5"
        shadow="xl"
        _hover={{ bg: "green.600", transform: "scale(1.1)" }}
        transition="all"
        transitionDuration="fast"
        cursor="pointer"
      >
        <Icon as={FaWhatsapp} boxSize="7" />
      </Box>
    </Box>
  )
}
