import './style.css'


function positive(first, sec) {

  if ((first > 0 && sec > 0) || (first < 0 && sec < 0)) {
    console.log("positif")
  }else{
    console.log("negatif");
  }

}

// positive(-12, 6)


function alphabet(firstname, secondname, thirdname) {
  if (firstname <= secondname || secondname <= thirdname) {
    return true
  }else {
    return false
  }

  
}

// console.log(alphabet("amlia","amlia","aa"))


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

// age(17)


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

// temps(15,56,59)


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

// imprime(69)


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

// election(12.3,20,20,10)


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

// date(31,8,2023)


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

  return result
}

// factorielle(3)


function utitli() {
  let g;
  let i = 0
  let zero = 0
  let position = 0

  while (g != 0) {
    g = prompt("entrez un nombre")
    if (g > zero) {
      zero = g
      position = i
    }else {
      alert("MET UN NOMBRE POSITIF !!!!!")
    }
    i++
  }

  console.log("le plus grand nombre et sa position sont " + zero + ":" + position)
  
}

// utitli()

function remise() {
  let prom = prompt("votre article");
  let pa = 0;

 while (parseInt(prom) !== 0) {
  prom = prompt("le prix de l'article")
  pa += parseInt(prom)
 }

 const wantPay = parseInt(prompt("combien vous payée ?"))
 if (wantPay < pa) {
  console.log("Donne moi plus de moula")
 }
 else{
  pa = wantPay - pa
  while (pa != 0) {
    if (pa >= 10) {
      pa -= 10
      console.log("10 EUROS")
    }else if (pa >= 5){
      pa -= 5
      console.log("5 EUROS")
    }else {
      pa -= 1
      console.log("1 EUROS")
    }
  }
}

  

  
}

// remise()


function mise(n,p){
  const ordre = factorielle(n) / factorielle(n - p);
  const desordre = factorielle(n) / (factorielle(p) * factorielle(n - p))

  console.log(`Dans l'ordre : une chance sur ${ordre} de gagner`)
  console.log("Dans le desordre : une chance sur " + desordre + " de gagner")
}

mise(3,3)

// factorielle(8)

function fibonacci(ut) {
  let fibo = 1;
  let tmp = 0;
  for (let i = 0; i <= ut; i++) {
   if (fibo === 1) {
    console.log(i)
    console.log(fibo)
    
   }
  }

  console.log(result)
}

// fibonacci(3)


function tabl() {
  let first = [];
  let second = [];
  let nope = [];

  for (let i = 0; i <= 8; i++) {
    first[i] =  Math.floor(Math.random() * 100) 
    second[i] = Math.floor(Math.random() * 100) 
    
  }
  
  for (let i = 0; i < first.length; i++) {
    nope.push(first[i] + second[i])
    
  }

  console.log("tableau 1 : " + first)
  console.log("tableau 2 : " + second)
  console.log("nouveau tableau : " + nope)
}

// tabl()


function shtroumpf(first, second) {
  let result = 0;

  for (let i = 0; i < second.length; i++) {
    let b = second[i]
    for (let j = 0; j < first.length; j++) {
      result += b * first[j]
      
    }
    
  }

  console.log(result)
}

// shtroumpf([3,6], [4,8,7,12])


function moyenne() {
  let voidArray = [];
  let moyenne = 0;
  let highScore = []; 

  for (let i = 0; i < 30; i++) {
    voidArray.push(Math.floor(Math.random() * 20) )  
  }

  for (let i = 0; i < voidArray.length; i++) {
    moyenne += voidArray[i];
  }

  moyenne /= 30
  moyenne = moyenne * 100
  moyenne = Math.floor(moyenne)
  moyenne = moyenne / 100

  for (let i = 0; i < voidArray.length; i++) {
    if (voidArray[i] > moyenne) {
      highScore.push(voidArray[i])
    }
    
  }

  console.log("Les notes : " + voidArray)
  console.log("la moyenne : " + moyenne)
  console.log("Les meilleurs notes : " + highScore)


}

// moyenne()


function dice() {
  let tab = [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
  let all = []
  let result = 0
  console.log(tab)

  for (let i = 0; i < tab.length; i++) {
    if (tab[i] === 4 || tab[i] === 2  || tab[i] === 1) {
      result++;
      all.push(tab[i])
    }
    
  }

  if (result === 3 && all.includes(4) && all.includes(2) && all.includes(1)) {
    return true 
  }

  return false
}

// console.log(dice())


function diceV2(a,b,c) {
  let isTrue = a + b + c === 7
  if (a * b * c === 8 && isTrue) {
    console.log([a,b,c])
    return true
  }
  console.log([a,b,c])
  return false
}

// console.log(diceV2(Math.floor(Math.random() * 6),Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)))


function Chine(n) {
  let oki = n
  let ancientOki;
  let mmmm = 2
  let annee = 1
  let j = n

  while (j >= 48500000) {
    ancientOki = oki
    oki += n * (mmmm / 100)
    j = oki - ancientOki
    mmmm -= 0.1
    annee++
  }
      

  console.log(annee)
}

// Chine(14000000000)


// function lichotomy(nbr) {
//   let tabl = [1,5,8,11,16,23,30];
//   let a = tabl[0];
//   let b = tabl[tabl.length - 1];
//   let m = tabl[Math.floor(tabl.length / 2)];
//   let tmp;

//   while (a < b) {
//     if (nbr < m) {
//       tmp = m
//       b = tmp - 1;
      
//     }else if (nbr > m) {
//       tmp = m
//       a = tmp + 1;
      
//     }else if (nbr === m) {
//       a = m;
//       break
//     }
//     m = tabl[Math.floor(m / 2)];
//   }

//   return false

// }

function go() {

  let tab=[-8,4,6,7,9,12,22,33,44]
  let nb=-8;
  a = 0;
  b = tab.length-1;
  m = Math.ceil((a+b)/2);
  while (a < b) {
    if (tab[m] == nb){
      a = m;
      break;
    }	
    else if (tab[m] > nb){
      b = m-1;
    }	
    else {
      a = m+1;
      }	
    m = Math.ceil((a+b)/2);
  }	
  if (tab[a] == nb) {
    console.log("trouvé à la position:" + (a+1));
  }
  else {
    console.log("non trouvé");
  }
  
}

// console.log(go(8))



function fibo(min) {
  let newnum = 0;
  let old = 1;
  let tmp = 0
  let oldold = 0;
  let all = ""

  for (let i = 0; i < min; i++) {
    newnum = old + oldold 
    if (i === 0) {
      all += oldold + "-" + old + "-" + newnum; 
    }else {
      all += "-" + newnum
    }
    tmp = old;
    old = newnum;
    oldold = tmp


  }

  return newnum

}

console.log(fibo(6))

// fibo(2)

//vaisseau A part de la Terre en fibo(km)/min et un autre vaisseau B part de Mars en X1.6/min
//B part à 1.6 km/min.
//Au bout de combien de minutes se croisent-ils sachant qu'il y a 225 000 000 km entre Terre et Mars ?


function vaisseau(distance) {
  let isFalse = false;
  let i = 1;
  let Akm = 0;
  let Bkm = 0;

  while (isFalse != true) {
    Akm = fibo(i);
    Bkm = i * 1.6;
    let tmp = Math.round(Bkm + Akm)

    if (tmp >= distance) {
      isFalse = true
    }else {
      i++
    }
   
  }

  console.log(Bkm);
  console.log(Akm)

  return i
}

console.log(vaisseau(225000000))


function gaz() {
  let gf = 760
  let co2 = 28880
  let n2o = 3040
  let found = false
  let years = 0

  while (found != true) {
    gf = gf * (1 + (1/100))
    co2 = co2 * (1 - (1/100))
    n2o = n2o * (1 + (0.3/100)) 

    if (gf > co2) {
      found = true
      return "le gaz fluores est plus polluant en" + years + "ans et fait" + gf + "Mt"
    }else if (n2o > co2) {
      found = true
      return "le protoxyde d'azote est plus polluant en " + years + " ans et fait " + n2o + " Mt"
    }else {
      years++
    }
  }
}



// console.log(gaz())

function notTwo(tabl) {

  let newArray = [];
  let already = false;

  for (let i = 0; i < tabl.length; i++) {
    const element = tabl[i];

    for (let j = 0; j < newArray.length; j++) {
      const el = newArray[j];

      if (el === element) {
        already = true
        break;
      }
      
    }

    if (already != true) {
      newArray.push(element)
    }else {
      already = false
    }
    
  }

  return newArray
}

console.log(notTwo(["foobar", "test", "john", "doe", "jiji", "jiji"]))