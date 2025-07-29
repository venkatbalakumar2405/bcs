# build on existing logic 
# new code implementations must be avoided maintaining code quality
- in case of next option pushing the  start function next to the next event handler function
- to repeat the  color index option ,the color will remain in teal only for eg
- basically initializing the color ++ so next time when updated it will  improve the color accordance to the time difference
-  when start function is called ,since analyzing the reuse functions and its 3 usecases as well
- Case 1: initial start
- case 2: run-reclicked start
- case 3: when next
- ensure all three cases will affect without the break of inbetween case
- get elements by class will be fetched only  by  getting the  elements starting from index zero value
-Implementation detail is the many  ways  of the execution
- code abstraction breaks the  complexity of the logic and functionality in terms of function with abstraction 
-  Single responsbility principle
- based on division of labour -single responsibilty principle evolved
- how to structure a code with function
- composing the codes-paletter of code tastes-coding with each function interrelatedly
- redbook design principles
- but it deals with time for callback function
- When function takes another function as argument ,then argument is called as call  back function ---definition of callback function.Allhigher order functions are callback function
- Assignment 
   function ownMap(fn,arr){
       //need to implement with own logic
   }
   ownMap((n)=>n=>n*2,[2,3,4]) //[4,6,8]
   - Eventloop function
   - each thread(cook or chef like),processing,task(step of a burger like),program,switch of tasks-queue,copying will happen but pause and will do the delete operation as in accordance to priority
   - so single thread means (only one person  working on a task)
   - deadlock  occurs when two thread accesssing same task
   - multi  threading means multi processing on tasks
   - single thread is line by line execution in javascript
   - so single thread is javascript
   - single thread and asynchronous
   - js is single thread and  concurrent asynchronous
   - parallel is called multiple threading- but not use parallel for js
   - when multiple tasks are executed concurrently  it is called asynchronous
   - stack -FILO or LIFO - just like washing plates
   - queue-FIFO /LILO - theatre
   - event loop-loupe
   - call stack is the part of js engine where js runs -it is also called as mainthread
   - web api-waits
   - settimeout is a part of browser  but it is part of web Api,Web Api waits  and passes to to callbackqueue
   - Eventloop checks once the call stack if free ornot 
    # General knowledge about laptop processor
   - 7 core - 5 core for high performance and 2 core for low performance generally i7 procesor in laptop
   # Notes continuation
   - for synchronization no  webapi will be there .only for asynchronization web api will be there to wait eg animation are similar to asynchronization ,keep the main thread free which is also referred to call stack
   - O(n)- time complexity ,n refers to the elements
   - Good quality code reduces the main thread free
   - stack overflow-geeky names similar to stacks overflowed 
   - depends on browser- maximum call stack size exceeded - as given by chrome
   - set time out ,setinterval -waiting -webapi are asynchronous functions
   # promise
   - three states :pending,fullfil and rejected
   - until it is called as resolved  it willbe in pending state
   - need to understand when it gets fullfilled it will get resolved
   - resolve -callback function
   - resolve when called then logic within promise is called and fulfil is executed
   - reject when called then logic within promise is called and reject is executed 
   - reject->reject+error but no error in fulfilled
   -  promise methods
   - 1. then 
   - 2. catch.
   - 3. finally.
   - only if fulfilled .then will be called and print the result
   - only promise methods will be called .then will be one of the methods of promise method
   - console.log of value will return  undefined
   - console.log will print 5 as console.log(y) will return undefined
   - undefined + amazing
   - .catch(err) use mainly to  try again logically  used to handle errors once skipped
   - .then(msg=> console.log(""), after .catch (err)-->the error skips
   - dot chaining along with  catch for code 
   - finally is executed  regardless of reject or resolved but error gets executed incase catch  is not used
   - .then only can be used with resolved of promise 
   # Assignment:-
   - boilstep -Promise -remove callbackhell
   - Independence day-Promise-remove callbackhell
   - -----------x-------
   - fetch function uses promise datatype
   - it can be used to console (data)- it returns array of objects 