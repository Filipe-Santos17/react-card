import { useState } from "react";
import { BsFillPersonFill, BsFillCreditCard2FrontFill, BsFillCreditCardFill } from "react-icons/bs";
import { Global } from "../style/globalStyle";
import { Main, InputSection, CardSection } from "./main.element";
import Input from "./input/input";
import Card from "./card/card";

export default function MAIN() {

  const [name, setName] = useState();
  const [number, setNumber] = useState()
  const [secretKey, setSecretKey] = useState()

  function HandleNameChange({ currentTarget }) {
    const newName = currentTarget.value;
    setName(newName);
  }

  function HandleNumberChange({ currentTarget }) {
    const newNumber = currentTarget.value;
    setNumber(newNumber);
  }

  function HandleSecretKeyChange({ currentTarget }) {
    const newSecretKey = currentTarget.value;
    setSecretKey(newSecretKey);
  }

  return (
    <Main>
      <Global />
      <InputSection>
        <Input
          icon={<BsFillPersonFill/>}
          ID="Name"
          typeInp="text"
          Min={5}
          Max={25}
          value={name}
          Handle={HandleNameChange}
        />
        <Input
          icon={<BsFillCreditCard2FrontFill />}
          ID="Number"
          typeInp="text"
          Min={19}
          Max={19}
          value={number}
          Handle={HandleNumberChange}
        />
        <Input
          icon={<BsFillCreditCardFill/>}
          ID="KeyCard"
          typeInp="text"
          Min={4}
          Max={4}
          value={secretKey}
          Handle={HandleSecretKeyChange}
        />
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
