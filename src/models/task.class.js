import { LEVELS } from "./levels.enum";

export class Task {
  name = "";
  description = "";
  comleted = false;
  level = LEVELS.NORMAL;

  constructor(name, description, comleted, level) {
    this.name = name;
    this.description = description;
    this.comleted = comleted;
    this.level = level;
  }
}
