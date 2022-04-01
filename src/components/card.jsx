import { FcSimCardChip } from "react-icons/fc";

export default function card({ numbCard, nameCard, secretNcard }) {
  return (
    <section className="Card">
      <div className="conte">
        <div className="icons">
          <div className="chip">
            <FcSimCardChip />
          </div>
          <img src="" alt="bandeira" />
        </div>
        <h3 className="numero">5454 5454 5454 5454</h3>
        <div className="content">
          <h4 className="nome">Filipe Marques</h4>
          <p>1234</p>
        </div>
      </div>
      {/* 
        <h3>{numbCard}</h3>
        <h4>{nameCard}</h4>
        <p>{secretNcard}</p>
        */}
    </section>
  );
}
