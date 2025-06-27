//Create a function checkAgeCategory(age = 18)

//🛠️ Setup Code
//console.log(checkAgeCategory());
//console.log(checkAgeCategory(12));
//console.log(checkAgeCategory(65));
//✅ Output
//👨 Adult
//🧒 Minor
//🧓 Senior

checkAgeCategory( age = 0)
{
    var ans ;
    if (age>=12)
     {
      ans= "Minor";  
     }
    else if (age >=65)
    {
        ans= "Senior";
    }
    else
    {
        ans="Adult"
    }
    return ans;
}
var result =checkAgeCategory(34);
console.log(result);
