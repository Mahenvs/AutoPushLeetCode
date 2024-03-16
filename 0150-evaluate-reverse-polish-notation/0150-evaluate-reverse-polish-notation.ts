function evalRPN(tokens: string[]): number {
    
    let stack:number[] = [];
    
    let x :number;
    let y: number;
    let res:any
    for(let i=0;i<tokens.length;i++){
        res = tokens[i]
        if('+-*/'.includes(res) )
        {   
         x = stack.pop();
         y = stack.pop()
            switch(res){
                case '+':
                    stack.push(x+y)
                break;
                case '-':
                    stack.push(y-x)
                    break;
                case '*':
                    stack.push(x*y)
                break;
                case '/':
                    stack.push(Math.trunc(y/x))
                    break;
                
            }
        }
        else{
            stack.push(parseInt(res));
        }
    }
    return stack[0];
}