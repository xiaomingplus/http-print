const http = require('http')
const debug = require('debug')('http-print')
const chalk = require('chalk')
const createHttpServer = function (options) {
  options = Object.assign({
    port: 3001,
  }, options)
  const {port} = options
  debug('port:s%', port)
  http.createServer((request, response) => {
    const {
      headers,
      method,
      url,
    } = request
    // eslint-disable-next-line no-console
    console.log('\n--- ' + chalk.blue(method) + ' request ' + chalk.green(url), new Date(), '---')
    let body = []
    request.on('error', err => {
      // eslint-disable-next-line no-console
      console.error(chalk.red(err))
    }).on('data', chunk => {
      body.push(chunk)
    }).on('end', () => {
      body = Buffer.concat(body).toString()
      // BEGINNING OF NEW STUFF

      response.on('error', err => {
        // eslint-disable-next-line no-console
        console.error(chalk.red(err))
      })

      response.statusCode = 200
      response.setHeader('Content-Type', 'text/plain')
      response.writeHead(200, {
        'Content-Type': 'application/json',
      })

      const responseBody = {
        headers,
        method,
        url,
        body,
      }
      if (method === 'POST' || method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
      // eslint-disable-next-line no-console
        console.log(chalk.blue('body start'))
        // eslint-disable-next-line no-console
        console.log(body)
        // eslint-disable-next-line no-console
        console.log(chalk.blue('body end'))
      }
      response.write(JSON.stringify(responseBody))
      response.end()
    })
  }).listen(port)
  // eslint-disable-next-line no-console
  console.log(`${chalk.green('listen at ' + port)}`)
}
module.exports = createHttpServer

