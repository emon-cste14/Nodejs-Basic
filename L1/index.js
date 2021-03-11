/* rules-1
let StudentDetails=require('./Student')
console.log(StudentDetails.StuName())
console.log(StudentDetails.StuAge())
console.log(StudentDetails.Cgpa)
*/

// rules-2
const {StuName,StuAge}=require('./Student')
console.log(StuName())
console.log(StuAge())
