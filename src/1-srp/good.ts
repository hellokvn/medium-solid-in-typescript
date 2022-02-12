export class Book {
  public title: string;
  public author: string;
  public description: string;
  public pages: number;

  // constructor and other methods
}

export class Persistence {
  public saveToFile(book: Book): void {
    // some fs.write method to save book to file
  }
}
