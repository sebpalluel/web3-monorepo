var http = require('http');

var request = http.request(process.argv.slice(2)[0], (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  if (res.statusCode == 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on('error', function (err) {
  console.log('ERROR');
  process.exit(1);
});

request.end();
