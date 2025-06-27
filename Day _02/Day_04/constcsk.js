const x = 0;

if (x) {
  console.log("Awesome");
} else {
  console.log("Super");
}

const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
  },
};

console.log(csk2.stats.win);

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

const csk = null;

function getWinStat() {
  // code
}

console.log(getWinStat(csk1));
console.log(getWinStat(csk2));
console.log(getWinStat(csk3));
console.log(getWinStat(csk));

function getWinStat(team)
{
   if (team)
    if(team.stat){
        if(team.stat.win){
            return team.stat.win
        }

    }else
    return("Data not found" )
// returns  
   else (csk!=naN)
    console.log(csk.win)
  
}
if (!team){
    return "Data not found";

} if (!team.stats){
    return"Data not found";
}
if (!team.stats.win)
{
    return"Data not found";
}
 return team.stats.win;

function getWinStat(team){
{
    if((!team)||(!team.stats)||(!team.stats.win))
     return "Data not found";
}    return team.stats.win;
}
function  getWinStat (team){
     {
        if ((team )&&(team.stats)&&(team.stats.win))
            return  team.stats.win;

     } return "Data not found"
}
//optional chaining
 if (team&& (team?.stats)&& (team?.stats?.win))
    return team.stats.win;




console.log(getWinStat(csk1)); //5
console.log(getWinStat(csk2));//'Data not found'
console.log(getWinStat(csk3));//'Data not found'
console.log(getWinStat(csk));//'Data not found;