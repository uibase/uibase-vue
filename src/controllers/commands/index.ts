import { Command } from 'commander'
import { commandCreator } from './ICommandConstructor'
// import { StyleguideCommand } from 'src/scripts/commands/styleguide/styleguide'
import { InitCommand } from './init/index'

export default function(program: Command, workingDir: string): void {
  // commandCreator(StyleguideCommand, program, workingDir).handle()
  commandCreator(InitCommand, program, workingDir).handle()
}
