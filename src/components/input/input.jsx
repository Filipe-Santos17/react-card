import {P, Input} from "./input.element"

export default function input({ typeInp, ID, Min, Max, valor,Handle, icon, place }) {
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
      />
    </P>
  );
}

//required onfocus
