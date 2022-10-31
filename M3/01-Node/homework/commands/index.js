const fs = require('fs');
const { request } = require('http');

module.exports = {
  date: (arg, done) => done(Date()),
  pwd: (arg, done) => done(process.env.PWD),
  ls: (arg, done) => {
    fs.readdir('.', 'utf-8', function (err, files) {
      if (err) throw err;

      var lista = files.join(`\n`);
      done(lista);
    });
  },
  echo: (arg, done) => {
    done(arg.join(' '));
  },
  cat: (arg, done) => {
    fs.readFile(arg[0], 'utf-8', (err, data) => {
      if (err) throw err;
      done(data);
    });
  },
  head: (arg, done) => {
    fs.readFile(arg[0], 'utf-8', (err, data) => {
      if (err) throw err;

      const head = data.split('\n').slice(0, 5).join('\n');
      done(head);
    });
  },
  tail: (arg, done) => {
    fs.readFile(arg[0], 'utf-8', (err, data) => {
      if (err) throw err;

      const tail = data.split('\n').slice(-5).join('\n');

      done(tail);
    });
  },
  curl: (arg, done) => {
    request(arg[0], (err, response, body) => {
      if (err) throw err;

      // console.log(response);
      done(body);
    });
  },
};
