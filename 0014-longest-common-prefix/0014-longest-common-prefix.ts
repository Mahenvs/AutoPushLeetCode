function longestCommonPrefix(strs: string[]): string {
    
   if (strs.length === 0) return ''; 

    strs.sort();
    let minLen =0;    
    let result = "";
    if(strs[0].length < strs[strs.length-1].length){
        minLen = strs[0].length;
    }
    else{
        minLen = strs[strs.length-1].length;
    }
    console.log(minLen)
    for(let i=0;i<minLen;i++)
    { 
       if(strs[0].charAt(i) == strs[strs.length-1].charAt(i)){
           result = result + strs[0].charAt(i);
       }
       else{
            return result;

       }
       console.log(result)
    }
    return result;
};