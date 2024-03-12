function strStr(haystack: string, needle: string): number {
    
    if(haystack.includes(needle)){
        console.log(haystack.indexOf(needle))
        return haystack.indexOf(needle);
    }
    else
    return -1;
};