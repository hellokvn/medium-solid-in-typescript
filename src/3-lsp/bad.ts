export interface Shape {
  calculateArea(): number;
}

export class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

export class Square extends Rectangle {
  public _width: number;
  public _height: number;

  constructor(width: number, height: number) {
    super(width, height);

    this._width = width;
    this._height = height;
  }
}
