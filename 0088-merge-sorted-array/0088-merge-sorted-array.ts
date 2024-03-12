/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    
    let i=0,j=0,k=0;
    let temp:number[] = []

    while(i< m && j < n){
        if(nums1[i] < nums2[j]){
            temp[k]=nums1[i];
            i++;
        }
        else{
            temp[k]=nums2[j];
            j++;
        }
        k++;
    }

    while(i < m){
        temp[k]=nums1[i];
        i++;
        k++;
    }
    while(j < n){
        temp[k]=nums2[j];
        j++;
        k++;
    }

    for(let i=0;i<m+n;i++){
        console.log(temp[i])
        nums1[i] = temp[i]        
    }
    // return nums1;
};