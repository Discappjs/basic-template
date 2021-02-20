import { Command, BaseCommand, Argument } from 'discapp'

@Command()
export class GreetCommand extends BaseCommand {
  @Argument()
  public name: string

  public async execute() {
    return `Hello, ${this.name}`
  }
}
