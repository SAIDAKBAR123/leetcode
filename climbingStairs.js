
function fib(n, dp)
 {
     if (n <= 1)
         return dp[n] = 1;
    
     if(dp[n] != -1 ){
         return dp[n] ;
     }
     dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
     return  dp[n] ;
 }
  
 function countWays(n)
 {
     let dp = new Array(n+1).fill(-1) ;
     fib(n, dp) ;
     return dp[n] ;
 }
 var climbStairs = function(n) {
     return countWays(n)
 };
 
  
 // Returns number of
 // ways to reach s'th stair