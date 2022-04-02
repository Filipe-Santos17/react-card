export default function input({ typeInp, ID, Min, Max, TextLabel }) {
  return (
    <>
      <input type={typeInp} name={ID} id={ID} minLength={Min} maxLength={Max} />
      <label htmlFor={ID}>{TextLabel}</label>
    </>
  );
}

//required onfocus
