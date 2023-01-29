export function generateNumberforCompanyID() {
  let wantedNumber = []

  const someNumber = Math.floor(Math.random()*1000000)
  const wantedArr = Array(6).fill(0)
  const someArr = someNumber.toString().split('')
  someArr.forEach(i => wantedArr.push(+i))

  if ( wantedArr.length > 6 ) {
    const arrLength = wantedArr.length
    wantedArr.splice(0,arrLength - 6)
    wantedNumber = wantedArr.join('')
    
    console.log('someNumber:',someNumber, 'wantedNumber:',wantedNumber.toString());
  }
  
  return wantedNumber
}