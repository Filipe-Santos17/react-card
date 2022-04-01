import {FcSimCardChip} from "react-icons/fc";

export default function card({numbCard, nameCard,secretNcard}) {
  return (
    <section className="Card">
        <div>
            <FcSimCardChip/>
        </div>
        <img src="" alt="bandeira"/>
        <h3>5454 5454 5454 5454</h3>
        <h4>Filipe Marques</h4>
        <p>1234</p>
        {/* 
        <h3>{numbCard}</h3>
        <h4>{nameCard}</h4>
        <p>{secretNcard}</p>
        */}
    </section>
  )
}
