const Consoler = require('../consoler.js');
const http = require('http');

const consoler = new Consoler({
  prefix: '[httpServer]', // adds prefix string to output
  // levels: { error: false }, // disables "error" log level * consoler.error will be a noop function
  // time: 'iso', // time format is an ISO string
});

const consoler2 = new Consoler({
  levels: { log: true }, // enables "log" log level only * the other log levels will be a noop function
  time: 'iso', // disables time output
  // colors: false, // disable ANSI color styles
});

const consoler3 = new Consoler({
  time: 'lts', // disables time output
});

let reqId = 0;

const server = http.createServer();

server.listen(3000);

server.on('request', (req, res) => {
  reqId++;
  consoler.log({ reqId, url: req.url });
  res.end('Hello');
});

consoler.info(`Server has been started`, { port: 3000 });
consoler.log(`Request completed:`, { reqId, url: '/' });
consoler.debug(`User`, { id: 1234, name: 'Max' });
consoler.warn(`MaxListenersExceededWarning: Possible EventEmitter memory leak
detected`);
consoler.error(`Failed to connect to database`, { port: 5432 });

console.log('\nConsoler2:');
consoler2.log({ reqId });
consoler2.debug({ reqId });
consoler2.info({ reqId });
consoler2.warn({ reqId });
consoler2.error({ reqId });
consoler2.fatal({ reqId });

console.log('\nConsoler3:');
consoler3.log({ reqId });
consoler3.debug({ reqId });
consoler3.info({ reqId });
consoler3.warn({ reqId });
consoler3.error({ reqId });
consoler3.fatal({ reqId });
