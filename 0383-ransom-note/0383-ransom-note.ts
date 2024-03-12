function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = new Map<string, number>();
    
    for(const character of ransomNote){
        if(magazine.indexOf(character) == -1){
            return false;            
        }
        magazine = magazine.replace(character,"")
    }
    return true;
    
};