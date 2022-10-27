import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Awesome Rickroll Videos",
  theme: ProjectThemes.Playful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Markdown,
  githubUrl: "https://github.com/narze/awesome-rickroll-videos",
  imagePath: "/images/rickroll.jpg",
};

export default props;
