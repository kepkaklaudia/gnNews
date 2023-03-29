import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import pl from "./translation/pl.json";

export const i18next = () =>(
   i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      pl: {
        translation: pl,
      }
    },
    lng: "en",
    fallbackLng: "en",
  })
)