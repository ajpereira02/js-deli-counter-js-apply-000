var katzDeliLine = []


function takeANumber(katzDeliLine){
     // function defined that accepts two parameters
    // used to push the elements to the end of the array
   //here we are welcoming the customers at the deli with their name
  //and informing them with the name and their number in the queue.
  
  katzDeliLine.push().length;
  return (`Welcome,You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
  
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`)
}
  //form a function that accepts current line of people
 // say that we were serving one person in the line
 // we can remove the first person destructively using .shift 
// If or else statement shows the whole line, where there is no one in the queue and then returns the else statement.

function currentLine(line) {
var theLine=[];
if(line>[]) {
  for(var i=0; i<line.length; i++) {
      theLine.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + theLine;
}
    else {
      return "The line is currently empty."
    }
}

// Open a function that accepts the current line of people
//then push everyone to the end of the line, which returns the required phrase
//using a if condition show that there are people in the queue (line) else print a statement "The line is currently empty"
//using a for loop interate i.