import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Awesome Cheab Quotes - คำคมเฉียบ ๆ",
  theme: ProjectThemes.Playful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Vue,
  githubUrl: "https://github.com/narze/awesome-cheab-quotes",
  imagePath: undefined,
};

export default props;
