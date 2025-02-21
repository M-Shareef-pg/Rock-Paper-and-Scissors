const choices = document.querySelectorAll(".choice");

// user Choice function
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); // callback
  });
});

// compt Choice function
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

let userScore = 0;
let compScore = 0;
let tieScore = 0;

userNumb = document.querySelector("#user-score");
compNumb = document.querySelector("#comp-score");
tieNumb = document.querySelector("#tie-score");
const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");

// who's winner function
const playGame = (userChoice) => {
  // user choice
  console.log(`User select the ${userChoice}`);
  // compt choice
  const comptChoice = genCompChoice();
  console.log(`Computer select the ${comptChoice}`);

  if (userChoice === comptChoice) {
    tieScore++;
    tieNumb.innerText = tieScore;
    msg.innerText = "Its a tie 💀";
    msgContainer.style.backgroundColor = "#020100";
  } else if (
    (userChoice === "rock" && comptChoice === "scissors") ||
    (userChoice === "paper" && comptChoice === "rock") ||
    (userChoice === "scissors" && comptChoice === "paper")
  ) {
    userScore++;
    userNumb.innerText = userScore;
    msg.innerText = `You win 🥳, ${userChoice} beats ${comptChoice}`;
    msgContainer.style.backgroundColor = "#235789";
  } else {
    compScore++;
    compNumb.innerText = compScore;
    msg.innerText = `You loss 😔, ${comptChoice} beats ${userChoice}`;
    msgContainer.style.backgroundColor = "#DA4167";
  }
};

// summary sun le nallay (pehle ye bta itni der se q utha he aur hans q rha he)

// 1st me humne user ki choice bnai on click prin
// 2nd computer ki choice bnai jo khud b khud number genratr krega
// 3rd aaj humne kuch naya sikha like Math.floor jo decimal hta ta he aur Math.random jo random numbers genrate krta he
// 4th Math.random number randomly select krta he strings nhi aur agar string krni he to unke index ke base pr unhe use krna hoga
// 5th on click pr hum final result nikalenge (preshan horha he me bhi tha)
