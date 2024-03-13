import { AppDataSource } from "../../../data-source";
import { User } from "../../../entities/User";
import { IDatabaseService } from "../../../types";
import { registry } from 'tsyringe';

export type CreateUserPayload = {
  name: string;
  email: string;
};

@registry([
  {token: 'PostgresState', useClass: PostgresState}
])
export class PostgresState implements IDatabaseService.State{
  connect(): string {
    throw new Error("Method not implemented.");
  }
  disconnect(): string {
    throw new Error("Method not implemented.");
  }
  
  async create({
    name,
    email
  }: CreateUserPayload): Promise<User> {
    const user = new User()
    user.name = name
    user.email = email

    return AppDataSource.manager.save(user)
  }
}