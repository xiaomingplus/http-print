const {Command, flags} = require('@oclif/command')
const server = require('./server')
class HttpPrintCommand extends Command {
  async run() {
    const {flags} = this.parse(HttpPrintCommand)
    const options = {}
    if (flags.port) {
      options.port = flags.port
    }
    server(options)
  }
}

HttpPrintCommand.description = 'Create a http server and console all request info'

HttpPrintCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  port: flags.string({char: 'p', description: 'http port,default is 3001'}),
}

module.exports = HttpPrintCommand
