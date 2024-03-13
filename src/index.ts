import { container } from "tsyringe";
import DatabaseService from "./service/DatabaseService";

const service = container.resolve(DatabaseService)

service.connect()