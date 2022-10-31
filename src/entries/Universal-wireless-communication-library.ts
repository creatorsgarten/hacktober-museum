import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";


const props: CardProps = {
  display: "dark",
  title: "Universal wireless communication library",
  theme: ProjectThemes.Mindful,
  founderName: Founders.jgromes,
  topic: AcademicTopics.Arduino,
  githubUrl: "https://github.com/jgromes/RadioLib",
  imagePath: "/images/jgromes.png",
};
export default props;