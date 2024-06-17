import { BRLField } from "./components/BRLField";
import { CEPField } from "./components/CEPField";
import { CNPJField } from "./components/CNPJField";
import { CPFField } from "./components/CPFField";
import { PhoneField } from "./components/PhoneField";

export const App = () => {
  return (
    <main>
      <h1>⚛️ React Inputmask</h1>
      <label htmlFor="cpfField">CPF</label>
      <CPFField id="cpfField" autoFocus />
      <hr />
      <label htmlFor="cnpjField">CNPJ</label>
      <CNPJField id="cnpjField" />
      <hr />
      <label htmlFor="cepField">CEP</label>
      <CEPField id="cepField" />
      <hr />
      <label htmlFor="landlineField">Telefone</label>
      <PhoneField id="landlineField" maskType="landline" />
      <hr />
      <label htmlFor="mobileField">Celular</label>
      <PhoneField id="mobileField" maskType="mobile" />
      <hr />
      <label htmlFor="phoneField">Telefone ou Celular</label>
      <PhoneField id="phoneField" />
      <hr />
      <label htmlFor="brlField">R$</label>
      <BRLField id="brlField" />
      <hr />
      <label htmlFor="brlPrefixField">Preço (com prefixo)</label>
      <BRLField id="brlPrefixField" maskPrefix />
    </main>
  );
};
