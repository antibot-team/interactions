export type ApplicationCommandLocalization =
  | "id"
  | "da"
  | "de"
  | "en-GB"
  | "en-US"
  | "es-ES"
  | "fr"
  | "hr"
  | "it"
  | "Lt"
  | "hu"
  | "nl"
  | "no"
  | "pl"
  | "pt-BR"
  | "ro"
  | "fi"
  | "sv-SE"
  | "vi"
  | "tr"
  | "cs"
  | "el"
  | "bg"
  | "ru"
  | "uk"
  | "hi"
  | "th"
  | "zh-CN"
  | "ja"
  | "zh-TW"
  | "ko";

export type ApplicationCommandLocalizationPartial = Partial<
  Record<ApplicationCommandLocalization, string>
>;

