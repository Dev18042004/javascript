const name="dev"
const repoCount=50
console.log(name+repoCount+"value");
console.log(`hello y name is ${name} and my repocount is ${repoCount}`);
const gameName=new String("dev-patel")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-6,4)
console.log(anotherString);
const newStringOne="   dev   "
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="http://dev.com/dev%20patel"
console.log(url.replace('%20','-'))
console.log(url.includes('dev'))
console.log(gameName.split('-'));