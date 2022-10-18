var isIsomorphic = function(s, t) {
    
    if (s.length !== t.length) return false;
    
    const left = s.split('')
    const right = t.split('')
    
    const leftMap = new Map() 
    const rightMap = new Map()
    
    for (let i = 0; i < left.length; i++) {
        
       const c1 = left[i]
       const c2 = right[i]
       
       if (!leftMap.get(c1) && !rightMap.get(c2)) {
           
           leftMap.set(c1, c2)
           rightMap.set(c2, c1)

           
       } 
        if (leftMap.get(c1) !== c2 && rightMap.get(c2) !== c1) {
         return false;
        }
    }
    return true
    
};