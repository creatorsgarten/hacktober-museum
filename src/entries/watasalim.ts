import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "light",
  title: "Watasalim",
  theme: ProjectThemes.Playful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Next,
  imagePath: "/images/watasalim.png",
  githubUrl: "https://github.com/narze/awesome-salim-quotes",
};

export default props;
