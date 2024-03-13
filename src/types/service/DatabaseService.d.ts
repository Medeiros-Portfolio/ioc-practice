export namespace IDatabaseService {
  export interface Context {
    connect(): void;
    disconnect(): void;
  }

  export type State = Context;
}