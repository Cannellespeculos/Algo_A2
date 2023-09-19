import './style.css'


function positive(first, sec) {

  if ((first > 0 && sec > 0) || (first < 0 && sec < 0)) {
    console.log("positif")
  }else{
    console.log("negatif");
  }

}

positive(-12, 6)


function alphabet(firstname, secondname, thirdname) {
  if (firstname <= secondname || secondname <= thirdname) {
    return true
  }else {
    return false
  }

  
}

console.log(alphabet("amlia","amlia","aa"))


function age(a) {
  if (a === 6 || a === 7) {
    console.log("poussin")
  }else if (a === 8 || a === 9) {
    console.log("Pupille")
  }else if(a === 10 || a === 11) {
    console.log("Minime");
  }else if (a >= 12){
    console.log("Cadet")
  }
}

age(17)


function temps(heure,min,sec) {
  sec++;
  if (sec === 60) {
    min++
    sec = 0
    if (min === 60) {
      heure++;
      min = 0
     if (heure === 24) {
        heure = 0
      }
    }
  }

  console.log("Il est " + heure + "H " + min + "min et " + sec + " secondes")
}

temps(15,56,59)


function imprime(num) {
  let e;
  if (num <= 10) {
    e = num * 0.01
  }
  else if (num <= 30) {
    num -= 10
    e = 10 * 0.01 + num * (0.09 / 20)
  }else if (num > 30) {
    num -= 30
    e = 10 * 0.01 + 0.09 + num * (0.08 / num)
  }

  console.log(e)
}

imprime(69)


function election(first, sec, third, fourth) {
  if (first > 50) {
    console.log("Vous êtes élus")
  }else if (first < 12.5 || sec > 50 || third > 50 || fourth > 50) {
    console.log("Dommage")
  }else if (first > sec && first > third && first > fourth) {
    console.log("Favorable")
  }else {
    console.log("Défavorable")
  }

}

election(12.3,20,20,10)


function date(jour, mois, annee) {
  let valid = true;
 
  if (mois === 2) {
    if (annee%4 === 0 || annee%400 === 0) {
      if (jour > 29) {
        valid = false
      }
    }else if (jour > 28) {
      valid = false
    }
    
  }

  if (mois%2 === 0 && mois != 8) {
    if (jour > 30) {
      valid = false
    }
  }else if (mois%2 != 0){
    if (jour > 31) {
      valid = false
    }
  }


  console.log(valid)

  
}

date(31,8,2023)


// function demande() {
//   let bruh = prompt("Choisissez votre nombre.");
//   let random = Math.random() * (20 - 10) + 10
//   random = Math.floor(random)
//   let i = 0;

//  while (bruh != random) {
//   bruh = prompt("Choisissez votre nombre.");
//   if (bruh === random) {
//     alert("bravo")
//   }else if (bruh > 20) {
//     alert('Plus petit')
//   }else if (bruh < 10) {
//     alert('Plus grand')
//   }
//  }
//  i++;
// }

function table(num) {
  let i = 0;
  while (i <= 10) {
    console.log(num * i)
    i++;
  }
  
}

// table(9)

function factorielle(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i
 
  }
  console.log(result)
}

factorielle(3)