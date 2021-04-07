const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ans = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  favFood: "",
  favSport: "",
  superpower: ""
};

rl.question(`What's your name? Nicknames are also acceptable :)`, (name) => {
  rl.question(`What's an activity you like doing?`, (activity) => {
    rl.question(`What do you listen to while doing that ?`, (music) => {
      rl.question(`Which meal is your favourite(eg: dinner, brunch, etc.)`, (meal) => {
        rl.question(`What's your favourite thing to eat for that meal?`, (favFood) => {
          rl.question(`Which sport is your absolute favourite ?`, (favSport) => {
            rl.question(`What is your superpower ? In a few words, tell us what you are amazing at!`, (superpower) => {
              process.stdout.write(
                `\n${name} loves listening to ${music} while ${activity}, devouring ${favFood} for ${meal},
                prefers ${favSport} over any other sport, and is amazing at ${superpower}.\n`
              );

              rl.close();
            });
          });
        });
      });
    });
  });
});
