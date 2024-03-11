function isPalindrome(s: string): boolean {
    
    const input: string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let i = 0;
    let j = input.length - 1;
    
    while (i <= j) {

        if (input.charAt(i) !== input.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};