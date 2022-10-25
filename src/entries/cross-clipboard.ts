import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Cross Clipbaord - A multi device clipboard sharing over P2P network",
  theme: ProjectThemes.Mindful,
  founderName: Founders.Ntsd,
  topic: AcademicTopics.Go,
  imagePath: "/images/cross-clipboard.jpg",
  githubUrl: "https://github.com/ntsd/cross-clipboard",
};

export default props;
