import ICommand from './ICommand'
import { Command } from 'commander'

export default interface ICommandConstructor {
  new (program: Command, workingDir: string): ICommand
}

export const commandCreator = (
  cmd: ICommandConstructor,
  program: Command,
  workingDir: string
): ICommand => {
  return new cmd(program, workingDir)
}
