import type { Locale, TranslationDictionary } from "../types";
import { enDictionary } from "./en";
import { esDictionary } from "./es";
import { ptBrDictionary } from "./pt-br";
import { zhCnDictionary } from "./zh-cn";

export const DICTIONARIES: Record<Locale, TranslationDictionary> = {
  en: enDictionary,
  "pt-br": ptBrDictionary,
  es: esDictionary,
  "zh-cn": zhCnDictionary,
};

export function getDictionary(locale: Locale): TranslationDictionary {
  return DICTIONARIES[locale] ?? enDictionary;
}
