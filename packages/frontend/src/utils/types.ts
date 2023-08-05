export interface typeContest {
  id: number;
  name: string;
  authors: string[];
  duration: string;
  start: string;
  description: string;
  number_of_levels: {
    level: number;
    suggestion: string;
  }[];
  registered: number;
}
export interface typeRanking {
  key: number;
  name: string;
  image: string;
  solved: number;
  point: number;
  country: string;
  level: number;
}
