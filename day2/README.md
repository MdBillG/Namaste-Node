when ever we import another module in the main file of the app.js
like this
require('./path)
what it does is that it will wrap that in a function,
on single function, all the functions,variables etc
like this

(function(){
all code of the module runs here
})()

this function is called IIFE - Immediately invoked functoin expression

what IIFE do,
it will invoke immediately , invoke on the fly

5 steps mechanism of require
1.Resolving the module
-check wheather the module if js ,jon file

2 loading the module
3 wrap the IIFE
4 code evaluation
5 cachiing
