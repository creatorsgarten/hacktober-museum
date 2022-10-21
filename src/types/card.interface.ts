import { Founders } from "../enums/founders.enum";
import { AcademicTopics } from "../enums/topics.enum";

export interface DetailedPageProps {
  inspiredBy?: "21September";
  keywords: ["Empty of space"];
  descriptionMarkdown: "Empty of space";
  contributingMarkdown?: "21Sept";
}

export interface CardProps {
  display: "light";
  title: "Kachaooo";
  theme: "playful";
  founderName: Founders;
  topic: AcademicTopics;
  githubUrl: string;
  imagePath: string | undefined;
  detail?: DetailedPageProps;
}
