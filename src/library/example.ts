import { Extra } from './extra';

const api = new Extra();

function summon(): string {
  return api.summon();
}

function despawn(): number {
  return api.despawn();
}

export { summon, despawn };
