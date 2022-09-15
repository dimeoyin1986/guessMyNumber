// Capitalization of string
//1
let str = "isMAIL";
 const capitalFirst = (x) => {
   const turnToLowerCase = x.toLowerCase();
    const correctCapitalization = turnToLowerCase[0].toUpperCase() +  turnToLowerCase.slice(1);
     return correctCapitalization;
 }
 capitalFirst(str)

 //comparing email

 const realEmail = "dimeoyin1986@gmail";
 const comparingEmail = (supplyEmail)=> {
     const normalizedEmail = supplyEmail.toLowerCase().trim()
     const comparedEmail = realEmail === normalizedEmail;
     return comparedEmail;
 }

 comparingEmail("    DimeOyin1986@GMAIL") // TRUE
 // REPLACING

 const priceGEro = "288,97£"
 function changingToDollar(priceGEro){
    const priceGDollar = priceGEro.replace("£" , "$").replace("," , ".")
    return priceGDollar;
 }

 changingToDollar("288,97£")

 const sentence = "I Alhijrah board are wonderful board"
 const changedSentence =sentence.replace("board","Teachers")
 const changedSentence1 =sentence.replace(/board/g,"Teachers")

 const airlineQ = "AIRbus 320neo"
 console.log(airlineQ.includes("bus"))
 console.log(airlineQ.startsWith("bus"))
 console.log(airlineQ.startsWith("AIR"))
 console.log(airlineQ.endsWith("neo"))

 const checkIct2 = (item) => {
    const myBaggage = item.toLowerCase();
     myBaggage.includes("gun") || myBaggage.includes("water") ?console.log( "you are not allowed on the board"): console.log("you are welcome on board")
    }
    checkIct2("my bag only contain books and pens")
    checkIct2("i Have Water in my bag")
//    VM234:4 you are welcome on board
//    VM234:4 you are not allowed on the board



const magicFunct2 = (string) => {
    const newStringLowercase = string.toLowerCase();
     const [firstName,lastName]  = newStringLowercase.split(" ");
     const newName = ["Mr.", firstName[0].toUpperCase() + firstName.slice(1),lastName.toUpperCase()].join(" ")
     return newName;
}
magicFunct2("ismaiL olAdOKun")
//'Mr. Ismail OLADOKUN'
const newC = (name) =>{
    const capitaliseNames = [] 
  const toLowerCaseName =  name.toLowerCase();
  const splittedNames = toLowerCaseName.split(" ");
  console.log(splittedNames)
  for(const splittedName of splittedNames){
  capitaliseNames.push(splittedName[0].toUpperCase() + splittedName.slice(1))   
}
  return capitaliseNames.join(" ") 
}
newc("ismAIL OLadokun OlAdIMEJI")
// ['ismail', 'oladokun', 'oladimeji']
//'Ismail Oladokun Oladimeji'

const newR = (name) =>{
  const capitaliseNames = [] 
  const toLowerCaseName =  name.toLowerCase();
  const splittedNames = toLowerCaseName.split(" ");
  console.log(splittedNames)
  for(const splittedName of splittedNames){
  capitaliseNames.push(splittedName.replace(splittedName[0],splittedName[0].toUpperCase()))   
}
  return capitaliseNames.join(" ") 
}
newR("ismAIL OLadokun OlAdIMEJI")
//  ['ismail', 'oladokun', 'oladimeji']
// 'Ismail Oladokun Oladimeji'v
//padding of string
const maskCreditCard = (number) => {
    const formedStr = number + "";
    const lastFour = formedStr.slice(-4)
     return lastFour.padStart(formedStr.length, "*")
  }
  
  
  maskCreditCard(09033990183)
  //'******0183'
 