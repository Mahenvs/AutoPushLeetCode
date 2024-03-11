function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const valueToFind = target - nums[i];
        if (map.has(valueToFind)) 
            return result = [map.get(valueToFind), i]
        else 
            map.set(nums[i], i)
        
    };    
};