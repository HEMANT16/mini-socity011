const { spawn } = require('child_process');
console.log('Starting astro dev...');
const child = spawn('npx', ['astro', 'dev'], { stdio: 'inherit', shell: true });
console.log('Keeping shell alive so background daemon is not killed...');
setInterval(() => {}, 1000000); // keep event loop alive forever
