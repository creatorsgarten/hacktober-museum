import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Nunmun - นั่นมัน....!",
  theme: ProjectThemes.Playful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Svelte,
  imagePath: "/images/nunmun.png",
  githubUrl: "https://github.com/narze/nunmun",
};

export default props;
