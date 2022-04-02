import { SectionCard, TopIcons, NumCard, ContentInfo} from "./card.element"
import { FcSimCardChip } from "react-icons/fc";

export default function card({ numberCard, nameCard, secretKeycard, logo,typeCard}) {
  return (
    <SectionCard>
      <div className="Content">
        <TopIcons>
          <div className="chip"><FcSimCardChip /></div>
          <img src={logo} alt={`Bandeira ${typeCard}`} />
        </TopIcons>
        <NumCard>{numberCard}</NumCard>
        <ContentInfo>
          <h4 className="nome">{nameCard}</h4>
          <p>{secretKeycard}</p>
        </ContentInfo>
      </div>
    </SectionCard>
  );
}