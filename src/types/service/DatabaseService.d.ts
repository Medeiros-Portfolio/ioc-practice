export namespace IDatabaseService {
  export interface Context {
    connect(): string;
    disconnect(): string;
    create(payload: CreateUserPayload): Promise<User>;
  }

  export type State = Context;
}