function scuberGreetingForFeet(feet){
  // Write your code here!
  let greeting;
  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'Nairobi' ? 'Welcome to 254.' : 'still outside.';
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Boring.';
    default:
      return 'Bye.';
  }

}