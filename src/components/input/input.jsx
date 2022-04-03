import {P, Input} from "./input.element"

export default function input({ typeInp, ID, Min, Max, valor,Handle, icon, place, KDown }) {
  return (
    <P>
      {icon}
      <Input 
        type={typeInp} 
        name={ID} 
        id={ID} 
        minLength={Min} 
        maxLength={Max} 
        placeholder={place}
        value={valor}
        onChange={Handle}
        onKeyDown={KDown}
      />
    </P>
  );
}

//required onfocus
