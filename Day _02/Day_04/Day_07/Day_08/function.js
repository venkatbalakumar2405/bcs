function getWinStat(team) {
  return team?.stats?.win ? team.stats.win : "Data not found";
}
const getWinStat = (team) =>
  team?.stats?.win ? team.stats.win : "Data not found";
//How to print Hello!
function sayHello()
{
    return function()
    {
        console.log("Hello!");
    }}
