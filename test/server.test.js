const {expect, test} = require('@oclif/test')
const server = require('../src/server')

describe('http-print', () => {
  test
  .stdout()
  .do(() => server({
    port: 3003,
  }))
  .it('runs with --port 3003', ctx => {
    expect(ctx.stdout).to.contain('listen at 3003')
  })
})

