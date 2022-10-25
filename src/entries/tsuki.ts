import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "Tsuki",
  theme: ProjectThemes.Playful,
  founderName: Founders.Gusb3ll,
  topic: AcademicTopics.Python,
  imagePath:
    "https://user-images.githubusercontent.com/77166960/154808873-1bdd3aab-1aa4-4fcd-a3e6-17dfcde3b720.png",
  githubUrl: "https://github.com/Gusb3ll/Tsuki",
};

export default props;
