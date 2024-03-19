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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    
    let result: ListNode = new ListNode(0,null);
    let head = result
    
    while(list1 != null && list2 != null){
        if(list1.val <= list2.val){
            // result.next = list1;
            result.next = new ListNode(list1.val);

            list1 = list1.next;    
        }
        else if(list2.val < list1.val){
            // result.next = list2;
            result.next = new ListNode(list2.val);
            list2 = list2.next;    
        }
        result = result.next;
    }
    if(list1 != null){
        result.next = list1
    }
    else{
        result.next = list2
    }
    return head.next
    
};