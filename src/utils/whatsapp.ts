const WHATSAPP_NUMBER = "919871590403"

export function openWhatsApp(message: string) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank")
}

export function getBookingMessage(service: string, details?: string) {
  let msg = `Hi, I am interested in ${service}.`
  if (details) msg += ` ${details}`
  msg += "\nPlease share details and pricing."
  return msg
}

export function getEnquiryMessage(fields: {
  name: string
  phone: string
  service: string
  message: string
}) {
  return `New Enquiry from Website:
Name: ${fields.name}
Phone: ${fields.phone}
Service: ${fields.service}
Message: ${fields.message}`
}

export function getWeddingEnquiryMessage(fields: {
  name: string
  phone: string
  eventType: string
  date: string
  guests: string
  requirements: string
}) {
  return `Wedding/Event Enquiry:
Name: ${fields.name}
Phone: ${fields.phone}
Event Type: ${fields.eventType}
Date: ${fields.date}
Guests: ${fields.guests}
Requirements: ${fields.requirements}`
}

export const PHONE_PRIMARY = "9871590403"
export const PHONE_SECONDARY = "8860590402"
export const EMAIL = "amtravel.ikram@gmail.com"
export const MAPS_LINK = "https://maps.app.goo.gl/AhDmsnjg6Y3TCCTh7"
