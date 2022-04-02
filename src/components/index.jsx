import { useState } from "react"
import { Global, Main} from "../style/globalStyle"
import Input from "./input/input"
import Card from "./card/card"

export default function main() {

  const [name, setName] = useState({})

  function HandleNameChange(e){
    const NewName = e.target.value
    setName(NewName)
  }

  return (
    <Main>
        <Global/>
        <Input
          ID = "Teste"
          typeInp = "text" 
          Min = {2}
          Max = {12}
          TextLabel = "Texto de teste"
          value={name}
          Handle={HandleNameChange}
        />
        <Card
          numberCard = ""
          nameCard = {name}
          secretKeycard = ""
          logo = ""
          typeCard = ""
        />
    </Main>
  )
}
