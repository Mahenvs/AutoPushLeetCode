function isValid(s: string): boolean {
    const stack = new Stack<string>();
    
    for(let i=0;i<s.length;i++){
        
        switch(s.charAt(i)){
            case '(' : stack.push(s.charAt(i));
                       break;
            case '[' : stack.push(s.charAt(i));
                       break;
            case '{' : stack.push(s.charAt(i));
                       break;
            case ')' : 
                    if(stack.peek() != '(') return false;
                    else stack.pop(); break;
            case ']' : 
                    if(stack.peek() != "[") return false;
                    else stack.pop(); break;
            case '}' : 
                    if(stack.peek() != "{") return false;
                    else stack.pop(); break;
        }
    }
    if(stack.size() > 0) return false ;          

    return true;
};

class Stack<T>{
    private items: T[];

    constructor(){
        this.items = []
    }

    push(item: T):void{
        this.items.push(item)
    }

    pop(): T{
        return this.items.pop()
    }

    peek(): T{
        return this.items[this.items.length-1];
    }

    size(): number{
        return this.items.length
    }
}