function removeDuplicates(nums: number[]): number {
    
    
    
    let j = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i-1] != nums[i]){
            nums[j] = nums[i];
            j++;
        }
    }
            for(let i=0;i<nums.length;i++){
            console.log(nums[i])
        }

    return j;
}