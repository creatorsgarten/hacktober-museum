import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "light",
  title: "Coffee to Code",
  theme: ProjectThemes.Mindful,
  founderName: Founders.Narze,
  topic: AcademicTopics.LanguageDiversity,
  imagePath: "/images/coffee-to-code.jpg",
  githubUrl: "https://github.com/narze/coffee-to-code",
};

export default props;
