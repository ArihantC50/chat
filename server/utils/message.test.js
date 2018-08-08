var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');
describe('generateMessage',()=>{
  it('should generate correct message object',() => {
    var from = 'jen';
    var text = 'some';
    var message = generateMessage(from,text);
    expect(message.createdAT).toBeA('number');
  expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage',()=>{
  it('should be correct location object',()=>{
    var from = 'Arihant';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from,latitude,longitude);
    expect(message.createdAT).toBeA('number');
  expect(message).toInclude({from, url});
  });
});
