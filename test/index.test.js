const {expect, test} = require('@oclif/test')
const cmd = require('..')

describe('http-print', () => {
  test
  .stdout()
  .do(() => cmd.run([]))
  .it('runs default http server', ctx => {
    expect(ctx.stdout).to.contain('listen at 3001')
  })

  test
  .stdout()
  .do(() => cmd.run(['--port', '3002']))
  .it('runs with --port 3002', ctx => {
    expect(ctx.stdout).to.contain('listen at 3002')
  })
})
