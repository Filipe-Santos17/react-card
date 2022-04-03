import {P, Input} from "./input.element"

export default function input({ typeInp, ID, Min, Max, valor,Handle, icon}) {
  return (
    <P>
      {icon}
      <Input 
        type={typeInp} 
        name={ID} 
        id={ID} 
        minLength={Min} 
        maxLength={Max} 
        value={valor}
        onChange={Handle}
      />
    </P>
  );
}

//required onfocus
