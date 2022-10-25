import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "light",
  title: "Dumb Questions - คำถามโง่ ๆ",
  theme: ProjectThemes.Playful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Git,
  githubUrl: "https://github.com/narze/dumb-questions-th",
  imagePath: undefined,
};

export default props;
