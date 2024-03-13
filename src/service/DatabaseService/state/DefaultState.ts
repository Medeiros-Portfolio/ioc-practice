import { registry } from "tsyringe";
import { IDatabaseService } from "../../../types";

@registry([{
    token: 'DefaultState',
    useClass: DefaultState
}])
export class DefaultState implements IDatabaseService.State {
  connect(): void {
    throw new Error("Method not implemented.");
  }

  disconnect(): void {
    throw new Error("Method not implemented.");
  }
}