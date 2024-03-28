/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode original = head;
        ListNode slow = head;
        ListNode fast = head;
        ListNode prev = null;

        while(fast !=null && fast.next !=null ){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode reverse = reverseList(slow);

        while(reverse != null){
            if(original.val != reverse.val){
                return false;
            }

            reverse = reverse.next;
            original = original.next;
        }

        return true;
    }

    private static ListNode reverseList(ListNode head){
        ListNode current = head;
        ListNode prev = null;

        while(current != null){
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

}