export class FrontendDeveloper {
  public writeHtmlCode(): void {
    // some method
  }
}

export class BackendDeveloper {
  public writeTypeScriptCode(): void {
    // some method
  }
}

export class SoftwareProject {
  public frontendDeveloper: FrontendDeveloper;
  public backendDeveloper: BackendDeveloper;

  constructor() {
    this.frontendDeveloper = new FrontendDeveloper();
    this.backendDeveloper = new BackendDeveloper();
  }

  public createProject(): void {
    this.frontendDeveloper.writeHtmlCode();
    this.backendDeveloper.writeTypeScriptCode();
  }
}
