
# 🛡️ Marvel-Themed JavaScript Assessment

---

## ⭐ Easy

<details>
<summary>1. Hero ID Formatter (⭐)</summary>

### Task

Prompt the user for a hero’s name. Convert it to lowercase and uppercase. Display both on separate lines.

#### Example 1

**Input**: `"BlackPanther"`
**Output**:

```
blackpanther  
BLACKPANTHER
```

### Answer js
  ```js
  
   var Name= window.prompt("Enter the hero name:Blackpanther");
 var Name1=Name.toLowerCase;
 var Name2=Name.toUpperCase;
 console.log(`$(Name1)`,$(Name2));

#### Example 2

**Input**: `"  ScarletWitch "`
**Output**:

```
scarletwitch  
SCARLETWITCH
```

### 
```js
Answer 2:
    var Name= window.prompt("Enter the name:" ScarletWitch");
 var Name1=Name.toLowerCase;
 var Name2=Name.toUpperCase;
 console.log(`$(Name1)`,$(Name2));

</details>

---

<details>
<summary>2. Suit Version Type Check (⭐)</summary>

### Task

Tony inputs the suit version as a string. Convert it to number and log the type before and after conversion.



#### Example 1

**Input**: `"85"`
**Output**:

```answer.js
  var 

```
string  
number
```
###
 var Name= window.prompt("Enter the number");
 var ans="85";
 var c= (`"85"+ $(ans))
 console.log(c)

#### Example 2

**Input**: `"007"`
**Output**:

```
string  
number
```
```####

 var Name= window.prompt("Enter the number");
 var ans="007";
 var c= (`"007"+` $(ans))
 console.log(c)

</details>

---

<details>
<summary>3. Hulk Smash Echo (⭐)</summary>

### Task

Ask the user for a sound effect (e.g., `"Smash!"`) and echo it 3 times in a single line.



var name=window.prompt("Enter your sound effect,smash");
var name= smash;
console.log(`"repeat.$("smash"(3))`);
#### Example 1

**Input**: `"Smash!"`
**Output**:

```
Smash!Smash!Smash!
```

#### Example 2

**Input**: `"Boom "`
**Output**:

##
var name=window.prompt("Enter your sound effect,Boom");
var name= smash;
console.log(`"repeat.$("Boom"(3))`);
#### Example 1

```
Boom Boom Boom 
```

</details>

---

## ⭐⭐⭐ Medium

<details>
<summary>4. Stark Credits Calculator (⭐⭐⭐)</summary>

### Task

Prompt for two separate Stark wallet balances (as strings). Convert both to numbers and display the total credits.

#### Example 1

**Input**: `"1000"`, `"5000"`
**Output**:

var credit=windows.prompt("Enter the wallet balances:");
 var credit ="1000"
 var credit2="1000"
 var  totalcredit="int.parse$(credit)&& int.parse $(credit2);
 console.log("totalcredit")
```
Your total balance is 6000 credits.
```

#### Example 2

**Input**: `"250"`, `"250"`
**Output**:

var credit=windows.prompt("Enter the wallet balances:");
 var credit ="250"
 var credit2="250"
 var  totalcredit="int.parse$(credit)&& int.parse $(credit2);
 console.log("totalcredit")
```
Your total balance is 500 credits.
```

</details>

---

<details>
<summary>5. Shield Temperature Scanner (⭐⭐⭐)</summary>

### Task

Prompt for the shield’s surface temperature in Celsius.

* > 120 → "🔥 Overheated!"
* < -10 → "❄️ Frozen!"
* Else → "🛡️ Stable."


var shieldTemperture=winow.prompt("Enter the shield's temperature in Celcius")
if( shieldTemperature >120)
console.log("overheated!);
else(sheiledTemperature<-10)
console.log("Frozen:)
elseif(console.log("Stable"));

#### Example 1

**Input**: `130`
**Output**:

```
🔥 Overheated!
```

#### Example 2

**Input**: `25`
**Output**:

```
🛡️ Stable.
```

</details>

---

<details>
<summary>6. Infinity Stone Energy Rank (⭐⭐⭐)</summary>

### Task

Prompt for the power level (0–100) of an infinity stone.
Rank:

* 90+ → "Legendary 💎"
* 60–89 → "Potent ⚡"
* <60 → "Weak 🪨"


var powerLevel= +window.prompt("Enter the power level);
if( powerlevel>90)
(console.log("powerlevel is legendary));
else((powerlevel>=60 && >90))
(console.log("powerlevel is potent"));
elseif(powerlevel<60>)
(console.log("power level is weak"));

#### Example 1

**Input**: `95`
**Output**:

```
Legendary 💎
```

#### Example 2

**Input**: `58`
**Output**:

```
Weak 🪨
```

</details>

---

<details>
<summary>7. Stark Email Generator (⭐⭐⭐)</summary>

### Task

Prompt for a name. Trim and convert it to lowercase. Output the Stark Industries email.

#### Example 1

**Input**: `" Peter "`
**Output**:

```
peter@starkindustries.com
```
var name=window.Prompt("Enter the name ");
var name1=name.ToLowerCase;
StarkEmail Address="name+".com"
console.log("`($("StarkEmail Address"));
#### Example 2

**Input**: `"WARMachine"`
**Output**:

```
warmachine@starkindustries.com
```

</details>

---

<details>
<summary>8. Jarvis Access Gate (⭐⭐⭐)</summary>

### Task

Prompt for an access code (number).

* 1000–1999 → “Access granted”
* Exactly 1700 → “⚠️ Override mode activated”
* Else → “Access denied”

var name=window.prompt("Enter the name for an access code")
if(number =1000 &&<1999>)
console.log("Access granted")
else( number==1700)
console.log(number)
elseif(
    console.logn("Access denied")
)
#### Example 1

**Input**: `1024`
**Output**:

```
Access granted
```

#### Example 2

**Input**: `1700`
**Output**:

```
⚠️ Override mode activated
```

</details>

---

## ⭐⭐⭐⭐ Hard

<details>
<summary>9. Speed Duel – Quicksilver vs Hawkeye (⭐⭐⭐⭐)</summary>

### Task

Prompt for their speeds. Log who is faster and by how much (in km/h).

#### Example 1

**Input**: `180`, `90`
**Output**:

```
Quicksilver is faster than Hawkeye by 90 km/h.
```

#### Example 2

**Input**: `150`, `160`
**Output**:

```
Hawkeye is faster than Quicksilver by 10 km/h.
```

</details>

---

<details>
<summary>10. S.H.I.E.L.D. Agent Validation (⭐⭐⭐⭐)</summary>

### Task

Prompt for a name. Normalize the input (trim + lowercase).
Validate against allowed agents: `"natasha"`, `"clint"`, `"nick"`.

* If match → "🛡️ Access granted"
* Else → "⛔ Unauthorized"

#### Example 1

**Input**: `"  NiCk "`
**Output**:

```
🛡️ Access granted
```

#### Example 2

**Input**: `"tony"`
**Output**:

```
⛔ Unauthorized
```

</details>

TASK 2:-

# 🛡️ Marvel-Themed JavaScript Assessment

---

## ⭐ Easy

<details>
<summary>1. Hero ID Formatter (⭐)</summary>

### Task

Prompt the user for a hero’s name. Convert it to lowercase and uppercase. Display both on separate lines.

#### Example 1

**Input**: `"BlackPanther"`
**Output**:

```
blackpanther  
BLACKPANTHER
```

#### Example 2

**Input**: `"  ScarletWitch "`
**Output**:

```
scarletwitch  
SCARLETWITCH
```

</details>

---

<details>
<summary>2. Suit Version Type Check (⭐)</summary>

### Task

Tony inputs the suit version as a string. Convert it to number and log the type before and after conversion.

#### Example 1

**Input**: `"85"`
**Output**:

```
string  
number
```

#### Example 2

**Input**: `"007"`
**Output**:

```
string  
number
```

</details>

---

<details>
<summary>3. Hulk Smash Echo (⭐)</summary>

### Task

Ask the user for a sound effect (e.g., `"Smash!"`) and echo it 3 times in a single line.

#### Example 1

**Input**: `"Smash!"`
**Output**:

```
Smash!Smash!Smash!
```

#### Example 2

**Input**: `"Boom "`
**Output**:

```
Boom Boom Boom 
```

</details>

---

## ⭐⭐⭐ Medium

<details>
<summary>4. Stark Credits Calculator (⭐⭐⭐)</summary>

### Task

Prompt for two separate Stark wallet balances (as strings). Convert both to numbers and display the total credits.

#### Example 1

**Input**: `"1000"`, `"5000"`
**Output**:

```
Your total balance is 6000 credits.
```

#### Example 2

**Input**: `"250"`, `"250"`
**Output**:

```
Your total balance is 500 credits.
```

</details>

---

<details>
<summary>5. Shield Temperature Scanner (⭐⭐⭐)</summary>

### Task

Prompt for the shield’s surface temperature in Celsius.

* > 120 → "🔥 Overheated!"
* < -10 → "❄️ Frozen!"
* Else → "🛡️ Stable."

#### Example 1

**Input**: `130`
**Output**:

```
🔥 Overheated!
```

#### Example 2

**Input**: `25`
**Output**:

```
🛡️ Stable.
```

</details>

---

<details>
<summary>6. Infinity Stone Energy Rank (⭐⭐⭐)</summary>

### Task

Prompt for the power level (0–100) of an infinity stone.
Rank:

* 90+ → "Legendary 💎"
* 60–89 → "Potent ⚡"
* <60 → "Weak 🪨"

#### Example 1

**Input**: `95`
**Output**:

```
Legendary 💎
```

#### Example 2

**Input**: `58`
**Output**:

```
Weak 🪨
```

</details>

---

<details>
<summary>7. Stark Email Generator (⭐⭐⭐)</summary>

### Task

Prompt for a name. Trim and convert it to lowercase. Output the Stark Industries email.

#### Example 1

**Input**: `" Peter "`
**Output**:

```
peter@starkindustries.com
```

#### Example 2

**Input**: `"WARMachine"`
**Output**:

```
warmachine@starkindustries.com
```

</details>

---

<details>
<summary>8. Jarvis Access Gate (⭐⭐⭐)</summary>

### Task

Prompt for an access code (number).

* 1000–1999 → “Access granted”
* Exactly 1700 → “⚠️ Override mode activated”
* Else → “Access denied”

#### Example 1

**Input**: `1024`
**Output**:

```
Access granted
```

#### Example 2

**Input**: `1700`
**Output**:

```
⚠️ Override mode activated
```

</details>

---

## ⭐⭐⭐⭐ Hard

<details>
<summary>9. Speed Duel – Quicksilver vs Hawkeye (⭐⭐⭐⭐)</summary>

### Task

Prompt for their speeds. Log who is faster and by how much (in km/h).

#### Example 1

**Input**: `180`, `90`
**Output**:

```
Quicksilver is faster than Hawkeye by 90 km/h.
```

#### Example 2

**Input**: `150`, `160`
**Output**:

```
Hawkeye is faster than Quicksilver by 10 km/h.
```

</details>

---

<details>
<summary>10. S.H.I.E.L.D. Agent Validation (⭐⭐⭐⭐)</summary>

### Task

Prompt for a name. Normalize the input (trim + lowercase).
Validate against allowed agents: `"natasha"`, `"clint"`, `"nick"`.

* If match → "🛡️ Access granted"
* Else → "⛔ Unauthorized"

#### Example 1

**Input**: `"  NiCk "`
**Output**:

```
🛡️ Access granted
```

#### Example 2

**Input**: `"tony"`
**Output**:

```
⛔ Unauthorized
```

</details>
 TASK -2:
 ### **Web Development Assessment – MCQs**

1. How did Internet Explorer win the first browser war?

   * A) Better performance
   * B) Free and pre-bundled with Windows
   * C) Open-source community
   * D) Strong privacy features
   ``
 1.B)Free and prebundled with windows


2. In a three-layer architecture, which part is responsible for handling logic and server-side processing?

   * A) Frontend
   * B) Backend
   * C) Database
   * D) Browser Engine
``
 2.B)Backend
3. How is the world physically connected to allow global internet access?

   * A) Satellite links
   * B) Optical wireless routers
   * C) Submarine OFC cables
   * D) Wi-Fi satellites
   ``
  3.c)submarine ofc cable

4. Which HTTP version runs on QUIC protocol for faster performance?

   * A) HTTP 1.1
   * B) HTTP 2.0
   * C) HTTP 3.0
   * D) HTTP 0.9
    ```
  4)c(HTTP 3.0)

5. Which category of HTTP status codes represents client errors?

   * A) 1xx
   * B) 2xx
   * C) 3xx
   * D) 4xx
    ``
  5)d)4xx

6. Which of the following best describes what happens when you type a URL in the browser and hit Enter?

   * A) It directly opens the saved page from the cache
   * B) The browser engine renders the page without contacting any server
   * C) DNS resolves the domain to an IP, TCP connects, then HTTP request is made
   * D) The rendering engine creates a pixel map first and then calls the server
    ``
  6) A)It directly opens the saved page from the cache
  ``

7. Which is NOT part of the browser's internal architecture?

   * A) UI Backend
   * B) Rendering Engine
   * C) CSS Engine
   * D) Networking

  7) A)UI back end


8. The JavaScript engine “V8” was developed by:

   * A) Mozilla
   * B) Apple
   * C) Microsoft
   * D) Google
     ```
  8) D)google.


9. In browser architecture, the **Rendering Engine** is responsible for:

   * A) Parsing JavaScript
   * B) Rendering CSS and HTML to pixels
   * C) Managing cookies
   * D) Handling DNS queries
    ```
  9) B) Rendering CSS and HTML into pixels 

10. In the CSS rule `p.error { color: red; }`, what is `p.error`?

    * A) Property
    * B) Value
    * C) Selector
    * D) Declaration
      ```
  10) C)SELECTOR

11. What role does DNS play in web browsing?

    * A) Encrypts HTTP traffic
    * B) Resolves IP to MAC address
    * C) Translates domain names to IP addresses
    * D) Stores user session cookies
    
  ```
  11) c) Translates domain address into ip address.

12. Which rendering engine powers Chromium-based browsers like Chrome and Brave?

    * A) Trident
    * B) Gecko
    * C) Blink
    * D) EdgeHTML

``
  12) c)Blink
13. Which statement about MAC addresses is **true**?

    * A) They change every time a device connects to a new network
    * B) They are assigned by ISPs
    * C) They are fixed at the hardware level
    * D) They are encrypted using HTTPS
    
```
  13) B) They are assigned by ISP


14. Why was the V8 engine a game-changer for JavaScript performance?

    * A) It was built in C#
    * B) It used JIT (Just-In-Time) compilation for speed
    * C) It replaced CSS rendering
    * D) It integrated SQL parsing
    ``
  14) B) It used JIT ( just in time) compilation for the speed

15. Which of the following is **NOT** a valid HTTP method?

    * A) GET
    * B) FETCH
    * C) POST
    * D) DELETE


  ``
  15) B) FETCH



  


  



  



 
