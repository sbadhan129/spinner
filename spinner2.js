process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerAnime = ['|', '/', '-', '\\'];
let animeIndex = 0;

const animeSpins = () => {
process.stdout.write(`\r${spinnerAnime[animeIndex]}   `);
animeIndex=(animeIndex + 1) % spinnerAnime.length;
setTimeout(animeSpins, 200);
};

animeSpins();

setTimeout(() => {
  process.stdout.write('\n');
}, 2000);
