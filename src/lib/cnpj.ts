/** Validações dos formulários públicos (comprador e organizador de feira). A Edge Function repete as mesmas regras. */

export const onlyDigits = (s: string) => s.replace(/\D/g, "");

/** CNPJ numérico com dígitos verificadores (módulo 11). */
export function isValidCnpj(input: string): boolean {
  const d = onlyDigits(input);
  if (d.length !== 14 || /^(\d)\1{13}$/.test(d)) return false;
  const dv = (base: string) => {
    let w = base.length - 7;
    let sum = 0;
    for (const ch of base) {
      sum += Number(ch) * w--;
      if (w < 2) w = 9;
    }
    const r = sum % 11;
    return r < 2 ? 0 : 11 - r;
  };
  return dv(d.slice(0, 12)) === Number(d[12]) && dv(d.slice(0, 13)) === Number(d[13]);
}

export const FREE_EMAIL_DOMAINS = [
  "gmail.com", "googlemail.com", "hotmail.com", "hotmail.com.br", "outlook.com", "outlook.com.br", "live.com",
  "msn.com", "yahoo.com", "yahoo.com.br", "icloud.com", "bol.com.br", "uol.com.br", "terra.com.br", "ig.com.br",
];

/** E-mail válido e de domínio corporativo (não gratuito). */
export function isCorporateEmail(input: string): boolean {
  const email = input.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return false;
  return !FREE_EMAIL_DOMAINS.includes(email.split("@")[1]);
}
