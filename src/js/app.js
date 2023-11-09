export default class ErrorRepository {
  constructor() {
    this.repo = new Map();
  }

  addErr(data) {
    data.forEach((e) => {
      this.repo.set(e[0], e[1]);
    });
  }

  translate(code) {
    const errObject = this.repo.get(code);
    return errObject !== undefined ? errObject : "Unknown error";
  }
}
