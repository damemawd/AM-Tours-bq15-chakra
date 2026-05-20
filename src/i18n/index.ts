import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./en"
import hi from "./hi"

let savedLang = "en"
try {
  savedLang = localStorage.getItem("am-lang") || "en"
} catch {
  // localStorage unavailable
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
})

export default i18n
