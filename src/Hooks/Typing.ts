/**
 * These hooks simulate a loading effect by making your bot
 * start typing during command execution time.
 */

import { CommandHookFunction } from 'discapp'

export const startTyping: CommandHookFunction = ({ context }) => {
  context.getChannel().startTyping()
}

export const stopTyping: CommandHookFunction = ({ context }) => {
  context.getChannel().stopTyping()
}
