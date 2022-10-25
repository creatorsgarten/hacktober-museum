import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "MukPakPak - มุกแป๊ก ๆ",
  theme: ProjectThemes.Playful,
  founderName: Founders.Tinarskii,
  topic: AcademicTopics.Solid,
  imagePath: "/images/mukpakpak.jpeg",
  githubUrl: "https://github.com/tinarskii/mukpakpak",
};

export default props;
