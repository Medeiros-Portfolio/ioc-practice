import { IDatabaseService } from '../../../types/service/DatabaseService'
import { registry } from 'tsyringe'

@registry([
  { token: 'SQLiteState', useClass: SQLiteState }
])
export class SQLiteState implements IDatabaseService.State {
  connect(): string {
    return 'Connected to SQLite database'
  }
  disconnect(): string {
    return 'Disconnected from SQLite database'
  }
}