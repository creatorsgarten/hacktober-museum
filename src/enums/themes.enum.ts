import { faBrain, faGamepad } from "@fortawesome/free-solid-svg-icons";

export enum ProjectThemes {
  Playful = "playful",
  Mindful = "mindful",
}

export const ProjectThemesFa = {
  [ProjectThemes.Playful]: faGamepad,
  [ProjectThemes.Mindful]: faBrain,
};
