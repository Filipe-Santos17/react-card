import { useState } from "react";
import { BsFillPersonFill, BsFillCreditCard2FrontFill, BsFillCreditCardFill } from "react-icons/bs";
import { Global } from "../style/globalStyle";
import { Main, InputSection, CardSection } from "./main.element";
import Title from "./title/title"
import Input from "./input/input";
import Card from "./card/card";

export default function MAIN() {

  const [name, setName] = useState();
  const [number, setNumber] = useState()
  const [data, setData] = useState()
  const [secretKey, setSecretKey] = useState()

  function HandleNameChange({ currentTarget }) {
    const newName = currentTarget.value;
    setName(newName);
  }

  function HandleNumberChange({ currentTarget }) {
    const newNumber = currentTarget.value;
    setNumber(newNumber);
  }

  function HandleDataChange({ currentTarget }) {
    const newData = currentTarget.value;
    setData(newData);
  }

  function HandleSecretKeyChange({ currentTarget }) {
    const newSecretKey = currentTarget.value;
    setSecretKey(newSecretKey);
  }

  return (
    <Main>
      <Global />
      <InputSection>
        <Title>React Card</Title>

        <Input
          icon={<BsFillPersonFill/>}
          ID="Name"
          typeInp="text"
          Min={5}
          Max={25}
          place="Nome do Titular"
          value={name}
          Handle={HandleNameChange}
        />

        <Input
          icon={<BsFillCreditCard2FrontFill />}
          ID="Number"
          typeInp="text"
          Min={19}
          Max={19}
          place="Numero do Cartão"
          value={number}
          Handle={HandleNumberChange}
        />

        <Input
          icon={<BsFillCreditCardFill/>}
          ID="DataCard"
          typeInp="text"
          Min={4}
          Max={4}
          place="Validade"
          value={data}
          Handle={HandleDataChange}
        />

        <Input
          icon={<BsFillCreditCardFill/>}
          ID="KeyCard"
          typeInp="text"
          Min={4}
          Max={4}
          place="CVV"
          value={secretKey}
          Handle={HandleSecretKeyChange}
        />

        <footer>
          <p>Build for <span>Filipe Marques</span></p>
        </footer>
      </InputSection>
      <CardSection>
        <Card
          numberCard={number}
          nameCard={name}
          secretKeycard={secretKey}
          logo=""
          typeCard=""
        />
      </CardSection>
    </Main>
  );
}
