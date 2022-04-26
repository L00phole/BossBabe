import { useTyping } from "./useTyping";

const typing = [
  "Träning … För det är en annan dag för att bli bättre!",
  "Goda saker kommer till dem som svettas.",
  "Du är den enda som kan begränsa din storhet.",
  "Framgång börjar med självdisciplin.",
];

const RCTypeWriting = () => {
  const myTyping = useTyping(typing);

  return <span>{myTyping}</span>;
};

export default RCTypeWriting;
