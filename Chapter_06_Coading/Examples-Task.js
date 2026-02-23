//Task -1 :
function calculaterGrade (score) {
    if (score >=90 && score <= 100) {
        return 'A';
    } else if (score >=80 && score <=89) {
        return 'B';
    } else if (score <=70 && score <=79) {
        return 'C';
    } else if (score >=60 && score <=69) {
        return 'D';
    }else if (score <=50 && score >=0) {
        return 'F'; 
    } else {
        return 'Invalid score';
    }
}

let score = 95;
let grade = calculaterGrade(score);
console.log("Grade for a score of " + score + " is: " + grade);

//Task -2 :

for (let i=1; i<=100; i++){
    //let i = 30;
    if (i%3 === 0 && i%5 === 0)
    {
        console.log("FizzBuzz");
    }
    else if (i%3 === 0)
    {
        console.log("Fizz");
    }
    else if (i%5 === 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    
    }
}

