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

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let leftList; 
    let temp = list1;
    let head = list1;
    let tail =list1;
    let cnt = 0;
    while(temp != null){
        if(cnt == b){
            leftList = temp.next
        }
        temp = temp.next;
        cnt++;
    }
    cnt = 0;

    while(tail!=null ){
        if(cnt == a-1){
            tail.next = list2
        }
        cnt++;
        tail = tail.next;        
    }

    let finalList = head;
    while(finalList != null){

        if(finalList.next != null && finalList.next.next == null){
            finalList.next.next = leftList
            break;
        }
        finalList = finalList.next;
    }

    return head;
};