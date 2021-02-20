import path from 'path'
import { DiscappConfig } from 'discapp'

import { startTyping, stopTyping } from './Hooks/Typing'

export const config: DiscappConfig = {
  /**
   * Commands directory path
   *
   * Defines the path which the commands will be imported from.
   */
  commandsDirectory: path.resolve(__dirname, './Commands'),

  /**
   * The Discord token
   */
  token: String(process.env.DISCORD_TOKEN),

  /**
   * The message prefix.
   *
   * Leave it empty for no prefix.
   */
  prefix: '!',

  /**
   * Discapp hooks
   */
  hooks: {
    beforeCommand: [startTyping],
    afterCommand: [stopTyping],
  },
}
