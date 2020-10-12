import { commandCreator } from './ICommandConstructor'
import { CreateCommand } from './create'
import { StyleguideCommand } from 'src/scripts/commands/styleguide/styleguide'
import { InitCommand } from './init'
import { Command } from 'commander'

export default function(program: Command, workingDir: string): void {
  commandCreator(CreateCommand, program, workingDir).handle()
  commandCreator(StyleguideCommand, program, workingDir).handle()
  commandCreator(InitCommand, program, workingDir).handle()
}
