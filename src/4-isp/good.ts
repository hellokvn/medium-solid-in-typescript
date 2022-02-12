export interface Talker {
  talk(): void;
}

export interface Shooter {
  shoot(): void;
}

export interface Swimmer {
  swim(): void;
}

export interface Dancer {
  dance(): void;
}

export class Goblin implements Shooter, Dancer {
  public shoot(): void {
    // some method
  }
  public dance(): void {
    // some method
  }
}
