import TitleCard from "@/components/TitleCard";
import CardComp from "@/components/CardComp";
import { cards } from "@/data/cards";

export default function Projects() {
  return (
    <div id="projects" className="mx-auto max-w-6xl mt-10 md:mt-20">
      <TitleCard title={"PROJECTS"} />
      {cards.map((card) => (
        <CardComp
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          href={card.href}
          link={card.link}
          react={card.react}
          next={card.next}
          tailwind={card.tailwind}
          tscript={card.tscript}
          netlify={card.netlify}
          node={card.node}
        />
      ))}
    </div>
  );
}
