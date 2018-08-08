var expect = require('expect');
var {generateMessage} = require('./message');
describe('generateMessage',()=>{
  it('should generate correct message object',() => {
    var from = 'jen';
    var text = 'some';
    var message = generateMessage(from,text);
    expect(message.createdAT).toBeA('number');
  expect(message).toInclude({from, text});
  });
});
