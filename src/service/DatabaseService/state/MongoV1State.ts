import { registry } from "tsyringe";
import { IDatabaseService } from "../../../types";
import { CreateUserPayload } from "./PostgresState";
import { User } from "../../../entities/User";

@registry([{
    token: 'MongoV1State',
    useClass: MongoV1State
}])
export class MongoV1State implements IDatabaseService.State {
  create(payload: CreateUserPayload): Promise<User> {
    throw new Error("Method not implemented.");
  }
  connect(): string {
    return 'MongoV1State: connect';
  }
  
  disconnect(): string {
    return 'MongoV1State: disconnect';
  }
}