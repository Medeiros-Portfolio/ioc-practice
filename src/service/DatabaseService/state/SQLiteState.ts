import { User } from '../../../entities/User'
import { IDatabaseService } from '../../../types/service/DatabaseService'
import { registry } from 'tsyringe'
import { CreateUserPayload } from './PostgresState'

@registry([
  { token: 'SQLiteState', useClass: SQLiteState }
])
export class SQLiteState implements IDatabaseService.State {
  create(payload: CreateUserPayload): Promise<User> {
    throw new Error('Method not implemented.')
  }
  connect(): string {
    return 'Connected to SQLite database'
  }
  disconnect(): string {
    return 'Disconnected from SQLite database'
  }
}