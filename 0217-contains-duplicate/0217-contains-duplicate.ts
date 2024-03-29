function containsDuplicate(nums: number[]): boolean {
    const hash = new Map<number,number>();    
    for(let i=0;i<nums.length;i++){
        
        if(hash.has(nums[i])) return true;
        else hash.set(nums[i],i)
    }

    return false;
};