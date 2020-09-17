#!/usr/bin/env node
import commandHandler from './commands'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Command } = require('commander')
// eslint-disable-next-line @typescript-eslint/no-var-requires

const program = new Command()
const workingDir: string = process.env.PWD as string

commandHandler(program, workingDir)

program.parse(process.argv)
