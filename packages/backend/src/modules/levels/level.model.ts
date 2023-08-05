export class BaseLevel {
  description: string;
  secret: string;

  constructor(secret: string, description: string, ) {
    this.description = description;
    this.secret = secret;
  }
}

export class Level extends BaseLevel {
  id: string;
}
