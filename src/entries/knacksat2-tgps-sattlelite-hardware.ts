import { Founders } from "../enums/founders.enum";
import { ProjectThemes } from "../enums/themes.enum";
import { AcademicTopics } from "../enums/topics.enum";
import { CardProps } from "../types/card.interface";

const props: CardProps = {
  display: "dark",
  title: "KNACKSAT2 TGPS Sattlelite hardware",
  theme: ProjectThemes.Playful,
  founderName: Founders.KNACKSAT2TGPS,
  topic: AcademicTopics.HardwareANDcpp,
  imagePath: "/images/TGPSPro.png",
  githubUrl: "https://github.com/KNACKSAT2-TGPS",
};

export default props;
