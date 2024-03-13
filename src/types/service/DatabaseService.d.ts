export namespace IDatabaseService {
  export interface Context {
    connect(): string;
    disconnect(): string;
  }

  export type State = Context;
}