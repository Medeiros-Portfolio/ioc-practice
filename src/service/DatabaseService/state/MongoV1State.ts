import { registry } from "tsyringe";
import { IDatabaseService } from "../../../types";

@registry([{
    token: 'MongoV1State',
    useClass: MongoV1State
}])
export class MongoV1State implements IDatabaseService.State {
  connect(): string {
    return 'MongoV1State: connect';
  }
  
  disconnect(): string {
    return 'MongoV1State: disconnect';
  }
}