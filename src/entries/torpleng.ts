import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "light",
  title: "Torpleng - ต่อเพลง",
  theme: ProjectThemes.Playful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Vue,
  imagePath: "/images/torpleng.jpg",
  githubUrl: "https://github.com/narze/torpleng",
};

export default props;
