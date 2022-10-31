import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Universal wireless communication library",
  theme: ProjectThemes.Playful,
  founderName: Founders.jgromes,
  topic: AcademicTopics.Arduino,
  imagePath: "/images/jgromes.png",
  githubUrl: "https://github.com/jgromes/RadioLib",
};

export default props;

