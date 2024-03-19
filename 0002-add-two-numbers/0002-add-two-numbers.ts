/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
        let li = new ListNode(0);
		let result = li;
		let carry=0;
        
        while(l1!=null || l2!=null) {
			let sum= 0+carry;
			
			if(l1!=null) {
				sum+=l1.val;
				l1 = l1.next;
			}
			
			if(l2!=null) {
				sum+=l2.val;
				l2 = l2.next;
			}
			

			carry = Math.floor(sum/10);
			sum = sum%10;
			
			result.next = new ListNode(sum);
			result = result.next; 
		}
		if(carry ==1)
			result.next = new ListNode(carry);
		return li.next;
}
    