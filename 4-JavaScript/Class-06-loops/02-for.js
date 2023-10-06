let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}

for (let count = 0; count < 10; count++) {
  if (count > 2 && count < 8) {
    // continue;
    break;
  }
  console.log(count);
}
