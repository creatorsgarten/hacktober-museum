import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "light",
  title: "Torpleng but Anisong",
  theme: ProjectThemes.Playful,
  founderName: Founders.CunnyDev,
  topic: AcademicTopics.Solid,
  imagePath: "/images/torpleng-anisong.webp",
  githubUrl: "https://github.com/CunnyDev/torpleng-anisong",
};

export default props;
