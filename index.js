const generateRandomNumber = (n) => {
  return Math.floor(Math.random() * n) + 1;
};

const rollthedice = () => {
  let cpunum = generateRandomNumber(6);
  let playernum = generateRandomNumber(6);
  let cpuImage = "dice" + cpunum + ".png";
  let playerImage = "dice" + playernum + ".png";
  console.log(cpuImage);
  console.log(playerImage);
  document.getElementById("cpu_diceImage").src = cpuImage;
  document.getElementById("player_diceImage").src = playerImage;
  if (playernum > cpunum)
    document.getElementById("score__text").innerHTML = "You WIN😍";
  else if (cpunum > playernum)
    document.getElementById("score__text").innerHTML = "You LOSE😢";
  else document.getElementById("score__text").innerHTML = "DRAW👀";
};
