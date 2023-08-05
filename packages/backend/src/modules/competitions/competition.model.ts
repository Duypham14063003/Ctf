import { Level } from '../levels/level.model';

export class BaseCompetition {
  name: string;
  description: string;
  image: JSON;
  startTime: Date;
  duration: number;
  endTime: Date;
  authors: string[];
  levels: Level[];
  created: Date;
  updated: Date;
  deleted: boolean;

  constructor(
    name: string,
    description: string,
    startTime: Date,
    duration: number,
    authors: string[],
    levels: Level[]
  ) {
    this.name = name;
    this.description = description;
    this.startTime = startTime;
    this.endTime = new Date(startTime.getTime());
    this.endTime.setHours(startTime.getHours() + Math.floor(duration / 60));
    this.endTime.setMinutes(startTime.getMinutes() + (duration % 60));
    this.duration = duration;
    this.authors = authors;
    this.levels = levels;
    this.created = new Date();
    this.updated = new Date();
    this.deleted = false;
  }
}

export class Competition extends BaseCompetition {
  id: string;
}
