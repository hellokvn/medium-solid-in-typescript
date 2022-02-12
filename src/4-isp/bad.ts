export interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

export class Goblin implements Character {
  public shoot(): void {
    // some method
  }
  public swim(): void {
    // a goblin can't swim
  }
  public talk(): void {
    // a goblin can't talk
  }
  public dance(): void {
    // some method
  }
}
