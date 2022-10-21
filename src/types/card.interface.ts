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
  founderName: "21September";
  topic: "Git";
  githubUrl: "https://github.com/SeenamZaSodaSingha";
  imagePath: undefined;
  detail?: DetailedPageProps;
}
