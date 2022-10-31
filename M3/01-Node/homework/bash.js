const command = require('./commands');

// función para ejecutar tras resolver un comando
const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

/* // Output un prompt
process.stdout.write('prompt > ');
// El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remueve la nueva línea

  if (cmd.slice(0, 4) === 'echo') {
    const sub = cmd.slice(5, 100);
    process.stdout.write(sub);
  }

  switch (cmd) {
    case 'date':
      process.stdout.write(Date());
      break;
    case 'pwd':
      process.stdout.write(process.env.PWD);
      break;
    case 'ls':
      fs.readdir('.', function (err, files) {
        if (err) throw err;
        files.forEach(function (file) {
          process.stdout.write(file.toString() + '\n');
        });
        process.stdout.write('\nprompt > ');
      });

      break;
  }

  process.stdout.write('\nprompt > ');
}); */

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  var arg = data.toString().trim().split(' ');
  var cmd = arg.shift();

  // command es un objeto con funciones
  if (command[cmd]) {
    command[cmd](arg, done);
  } else {
    process.stdout.write(`${cmd} not found`);
    process.stdout.write('\nprompt > ');
  }
});
