import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Deploydeemai.today",
  theme: ProjectThemes.Mindful,
  founderName: Founders.Narze,
  topic: AcademicTopics.Svelte,
  imagePath: "/images/deploydeemai.png",
  githubUrl: "https://github.com/narze/deploydeemai.today",
};

export default props;
