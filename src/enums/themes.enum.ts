import { faBrain, faGamepad, faGear } from "@fortawesome/free-solid-svg-icons";

export enum ProjectThemes {
  playful = "playful",
  mindful = "mindful",
}

export const ProjectThemesFa = {
  [ProjectThemes.playful]: faBrain,
  [ProjectThemes.mindful]: faGamepad,
};
