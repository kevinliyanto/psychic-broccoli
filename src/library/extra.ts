/* eslint-disable class-methods-use-this */
export class Extra {
  constructor() {
    // eslint-disable-next-line no-console
    console.log(`Created Extra`);
  }

  summon(): string {
    // eslint-disable-next-line no-console
    console.log(`Summoned`);
    return `Summoned`;
  }

  despawn(): number {
    return new Date().getTime();
  }
}
