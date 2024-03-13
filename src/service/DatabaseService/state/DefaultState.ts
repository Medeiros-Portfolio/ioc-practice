import { registry } from "tsyringe";
import { IDatabaseService } from "../../../types";

@registry([{
    token: 'DefaultState',
    useClass: DefaultState
}])
export class DefaultState implements IDatabaseService.State {
  connect(): string {
    throw new Error("Method not implemented.");
  }

  disconnect(): string {
    throw new Error("Method not implemented.");
  }
}