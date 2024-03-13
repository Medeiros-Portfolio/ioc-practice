import { registry } from "tsyringe";
import { IDatabaseService } from "../../../types";
import { User } from "../../../entities/User";
import { CreateUserPayload } from "./PostgresState";

@registry([{
    token: 'DefaultState',
    useClass: DefaultState
}])
export class DefaultState implements IDatabaseService.State {
  create(payload: CreateUserPayload): Promise<User> {
    throw new Error("Method not implemented.");
  }
  connect(): string {
    throw new Error("Method not implemented.");
  }

  disconnect(): string {
    throw new Error("Method not implemented.");
  }
}