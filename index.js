// code your solution here
function saturdayFun (activity = `roller-skate`){

    return `This Saturday, I want to ${activity}!`
}

function mondayWork (decision = `go to the office`){
    return `This Monday, I will ${decision}.`

}


function wrapAdjective (wrap = `*`){
    
    return function(adjective = `special`){
        return `You are ${wrap}${adjective}${wrap}!`
    }
       
} 
