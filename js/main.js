//  Pseudo Code and Wireframes: Build a simple slot machine
//  with minimum 5 items per reel and 3 reels - user should
//  be able to bet min or max and have their total update
//  aka how much money they have won or lost. Min bet does
//  $5 and Max bet does $50. They should start with $1000.
//  Matches of the three wheels = a win just like a normal
//  slot machine and they win 10x their bet (edited)

const pot = 1000; ///what each user starts with
let balance= pot;
const minBet = 5;
const maxBet = 50;
let currentBet=5; //starts at the minimum;

const minButton=document.querySelector('#minBetButton');
const maxButton=document.querySelector('#maxBetButton');
const decFiveButton=document.querySelector('#decrementFiveButton');
const incFiveButton=document.querySelector('#incrementFiveButton');
const checkStatus=document.querySelector('#statusButton');
const spinButt=document.querySelector('#spinButton');
const minusFiveButt=document.querySelector('#decrementFiveButton');
const plusFiveButt=document.querySelector('#incrementFiveButton');
const resetButt=document.querySelector('#resetButton');

const first= document.querySelector('#reel1');
const second= document.querySelector('#reel2');
const third= document.querySelector('#reel3');
const wagerText= document.querySelector('#wagerText');
const balanceText= document.querySelector('#balanceText');


resetButt.addEventListener('click', function(){
  currentBet=5;
  balance=pot;
});

// checkStatus.addEventListener('click', function(){
//   console.log(balance);
//   console.log(currentBet);
// });

spinButton.addEventListener('click',function(){
  let reel1=randomValue();
  let reel2=randomValue();
  let reel3=randomValue();

  first.textContent=reel1;
  second.textContent=reel2;
  third.textContent=reel3;

  (reel1===reel2 && reel1===reel3) ? balance+=(currentBet*10)
  :balance-=currentBet;

  if (reel1===reel2 && reel1===reel3) {console.log(reel1);}
  updateBalance();
});

minButton.addEventListener('click',function(){
  currentBet=minBet;
  updateWager();
});

maxButton.addEventListener('click', function(){
  currentBet=maxBet;
  updateWager();
});

minusFiveButt.addEventListener('click',function(){
  if (currentBet> 5){currentBet-=5 }
  updateWager();
});

plusFiveButt.addEventListener('click', function(){
  if (currentBet<50) {currentBet+=5}
  updateWager();
});

function updateBalance(){
  balanceText.textContent=(`Balance: ${balance}`)
  console.log('yer');
};

function updateWager(){
  wagerText.textContent=(`Current Bet: ${currentBet}`)
  console.log('yer');
};

function randomValue(){
  let randomValue=Math.floor(Math.random()*5); // assigns a random number between 0-99
  let answer;
  console.log(`random value is ${randomValue}`);
  return randomValue == 0 ? 'luffy'
    : randomValue == 1 ? 'bigMomma'
    : randomValue == 2 ? 'kaido'
    :randomValue == 3 ? 'doflamingo'
    : 'blackBeard';  //
  // if (rV<20){
  //   return ''
  // }
  // else if (rV<40) {
  //   return '';
  // }
}
