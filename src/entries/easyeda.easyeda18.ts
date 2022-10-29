import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "EasyEDA2021-i18n",
  theme: ProjectThemes.Mindful,
  founderName: Founders.EasyEDA2021,
  topic: AcademicTopics.JavaScript,
  githubUrl: "https://github.com/EasyEDA2021",
  imagePath: "94C6FB5B-8587-4175-8224-82F5D961249F.jpeg"
};

export default props;
