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

function hasCycle(head: ListNode | null): boolean {

  let i = head,j=head;

  while(j != null && j.next!=null){
    i = i.next;
    j = j.next.next;
    if(i == j){
        return true
    }
  }  

  return false;

};