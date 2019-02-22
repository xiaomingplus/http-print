const {Command, flags} = require('@oclif/command')
const server = require('./server')
class HttpconsoleCommand extends Command {
  async run() {
    const {flags} = this.parse(HttpconsoleCommand)
    const options = {}
    if (flags.port) {
      options.port = flags.port
    }
    server(options)
  }
}

HttpconsoleCommand.description = `Describe the command here
...
Extra documentation goes here
`

HttpconsoleCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  port: flags.string({char: 'p', description: 'http port'}),
}

module.exports = HttpconsoleCommand
