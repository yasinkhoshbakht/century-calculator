let userName = prompt("please inter your name!");
alert(`hello ${userName}`);
let question = confirm("do you want to add 2 years together?");
if (question) {
  let firstYear = Number(prompt("please inter your first year!"));
  let secondYear = Number(prompt("please inter your second year!"));
  function yearCalculate(num1, num2) {
    return num1 + num2;
  }
  alert(yearCalculate(firstYear, secondYear));
}
let year = Number(prompt("please enter a year (up to 50000)?!"));
switch (true) {
  case year > 1 && year <= 100:
    alert("century: 1");
    break;
  case year > 100 && year <= 200:
    alert("century: 2");
    break;
  case year > 200 && year <= 300:
    alert("century: 3");
    break;
  case year > 300 && year <= 400:
    alert("century: 4");
    break;
  case year > 400 && year <= 500:
    alert("century: 5");
    break;
  case year > 500 && year <= 600:
    alert("century: 6");
    break;
  case year > 600 && year <= 700:
    alert("century: 7");
    break;
  case year > 700 && year <= 800:
    alert("century: 8");
    break;
  case year > 800 && year <= 900:
    alert("century: 9");
    break;
  case year > 900 && year <= 1000:
    alert("century: 10");
    break;
  case year > 1000 && year <= 1100:
    alert("century: 11");
    break;
  case year > 1100 && year <= 1200:
    alert("century: 12");
    break;
  case year > 1200 && year <= 1300:
    alert("century: 13");
    break;
  case year > 1300 && year <= 1400:
    alert("century: 14");
    break;
  case year > 1400 && year <= 1500:
    alert("century: 15");
    break;
  case year > 1500 && year <= 1600:
    alert("century: 16");
    break;
  case year > 1600 && year <= 1700:
    alert("century: 17");
    break;
  case year > 1700 && year <= 1800:
    alert("century: 18");
    break;
  case year > 1800 && year <= 1900:
    alert("century: 19");
    break;
  case year > 1900 && year <= 2000:
    alert("century: 20");
    break;
  case year > 2000 && year <= 2100:
    alert("century: 21");
    break;
  case year > 2100 && year <= 2200:
    alert("century: 22");
    break;
  case year > 2200 && year <= 2300:
    alert("century: 23");
    break;
  case year > 2300 && year <= 2400:
    alert("century: 24");
    break;
  case year > 2400 && year <= 2500:
    alert("century: 25");
    break;
  case year > 2500 && year <= 2600:
    alert("century: 26");
    break;
  case year > 2600 && year <= 2700:
    alert("century: 27");
    break;
  case year > 2700 && year <= 2800:
    alert("century: 28");
    break;
  case year > 2800 && year <= 2900:
    alert("century: 29");
    break;
  case year > 2900 && year <= 3000:
    alert("century: 30");
    break;
  case year > 3000 && year <= 3100:
    alert("century: 31");
    break;
  case year > 3100 && year <= 3200:
    alert("century: 32");
    break;
  case year > 3200 && year <= 3300:
    alert("century: 33");
    break;
  case year > 3300 && year <= 3400:
    alert("century: 34");
    break;
  case year > 3400 && year <= 3500:
    alert("century: 35");
    break;
  case year > 3500 && year <= 3600:
    alert("century: 36");
    break;
  case year > 3600 && year <= 3700:
    alert("century: 37");
    break;
  case year > 3700 && year <= 3800:
    alert("century: 38");
    break;
  case year > 3800 && year <= 3900:
    alert("century: 39");
    break;
  case year > 3900 && year <= 4000:
    alert("century: 40");
    break;
  case year > 4000 && year <= 4100:
    alert("century: 41");
    break;
  case year > 4100 && year <= 4200:
    alert("century: 42");
    break;
  case year > 4200 && year <= 4300:
    alert("century: 43");
    break;
  case year > 4300 && year <= 4400:
    alert("century: 44");
    break;
  case year > 4400 && year <= 4500:
    alert("century: 45");
    break;
  case year > 4500 && year <= 4600:
    alert("century: 46");
    break;
  case year > 4600 && year <= 4700:
    alert("century: 47");
    break;
  case year > 4700 && year <= 4800:
    alert("century: 48");
    break;
  case year > 4800 && year <= 4900:
    alert("century: 49");
    break;
  case year > 4900 && year <= 5000:
    alert("century: 50");
    break;
  default:
    alert("your year is far from expected");
    break;
}
