import { Command, BaseCommand } from 'discapp'

@Command()
export class PingCommand extends BaseCommand {
  public execute() {
    return 'pong'
  }
}
