import { container, inject, injectable } from "tsyringe";
import { getContainerConfig } from "../../util/getContainerConfig";
import { IDatabaseService } from "../../types";
import './state'

const BUSINESS = 'DatabaseService';

container.register(BUSINESS, {
  useFactory: (container) => {
    const config = getContainerConfig(BUSINESS)
    return container.resolve(config)
  }
})

@injectable()
export class DatabaseService implements IDatabaseService.Context {
  constructor(
    @inject(BUSINESS)
    private state: IDatabaseService.State
  ) {}
  
  connect(): string {
    return this.state.connect()
  }

  disconnect(): string {
    return this.state.disconnect()
  }
}
  