import test from "node:test";
import assert from "node:assert/strict";
import { isValidCnpj, isCorporateEmail } from "../src/lib/cnpj.ts";

test("CNPJ: aceita válido (com e sem máscara) e recusa dígito errado, tamanho errado e repetidos", () => {
  assert.equal(isValidCnpj("19.904.935/0001-20"), true); // CNPJ da própria Deepson (rodapé do site)
  assert.equal(isValidCnpj("19904935000120"), true);
  assert.equal(isValidCnpj("19.904.935/0001-21"), false);
  assert.equal(isValidCnpj("1990493500012"), false);
  assert.equal(isValidCnpj("11.111.111/1111-11"), false);
});

test("E-mail: só corporativo", () => {
  assert.equal(isCorporateEmail("compras@empresa.com.br"), true);
  assert.equal(isCorporateEmail("fulano@gmail.com"), false);
  assert.equal(isCorporateEmail("Fulano@Hotmail.com"), false);
  assert.equal(isCorporateEmail("x@outlook.com.br"), false);
  assert.equal(isCorporateEmail("x@yahoo.com.br"), false);
  assert.equal(isCorporateEmail("sem-arroba.com"), false);
});
