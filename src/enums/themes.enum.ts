import { faBrain, faGamepad } from "@fortawesome/free-solid-svg-icons";

export enum ProjectThemes {
  playful = "playful",
  mindful = "mindful",
}

export const ProjectThemesFa = {
  [ProjectThemes.playful]: faGamepad,
  [ProjectThemes.mindful]: faBrain,
};
