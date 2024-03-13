import { registry } from "tsyringe";
import { IDatabaseService } from "../../../types";

@registry([{
    token: 'MongoV1State',
    useClass: MongoV1State
}])
export class MongoV1State implements IDatabaseService.State {
  connect(): void {
    console.log('MongoV1State: connect');
  }
  
  disconnect(): void {
    console.log('MongoV1State: disconnect');
  }
}