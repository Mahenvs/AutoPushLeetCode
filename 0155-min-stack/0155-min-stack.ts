    class MinStack {

    items:number[]=[];
    minEle: number[] =[];
    constructor() {
        this.items = []
    }

    push(val: number): void {
        if(this.items.length == 0) {
            this.minEle.push(val)
        }
        this.items.push(val);
        
        if(this.items.length != 0 && val <= this.minEle[this.minEle.length-1] )  
           this.minEle.push(val)
    }

    pop(): void {
        let removedElement =this.items.pop()
        if (this.minEle[this.minEle.length - 1] === removedElement) {
            this.minEle.pop()
        }
    }

    top(): number {
        return this.items[this.items.length-1]
    }

    getMin(): number {
        return this.minEle[this.minEle.length-1]
    }
}

    /**
    * Your MinStack object will be instantiated and called as such:
    * var obj = new MinStack()
    * obj.push(val)
    * obj.pop()
    * var param_3 = obj.top()
    * var param_4 = obj.getMin()
    */