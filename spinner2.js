let time = 0;
do {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, time += 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, time += 200);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, time += 200);

  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, time += 200);

  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, time += 100);

} while (time <= 1600);

setTimeout(() => {
  console.log("")
}, time);