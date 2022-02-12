export interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

export class Troll implements Character {
  public shoot(): void {
    // some method
  }

  public swim(): void {
    // a troll can't swim
  }

  public talk(): void {
    // a troll can't talk
  }

  public dance(): void {
    // some method
  }
}
