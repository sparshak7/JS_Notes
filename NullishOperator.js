//Nullish Coalescing Operator (??) is used to efficiently handle a fallback value in the event of existence of a truly null value such as null or undefined

//Standard bitwise operators treat 0, false and "" as falsy values which may provide wrong result

const answer = "" || "true"
console.log(answer) //outputs true as "" is treated as falsy but what if we wanted empty string?

const answer2 = "" ?? "true"
console.log(answer2) // ""
const answer3 = null ?? "false"
const ans3 = undefined ?? "false"
console.log(answer3, ans3)

const answer4 = null ?? undefined //second gets priority when both appear
const answer5 = undefined ?? null
console.log(answer4, answer5)