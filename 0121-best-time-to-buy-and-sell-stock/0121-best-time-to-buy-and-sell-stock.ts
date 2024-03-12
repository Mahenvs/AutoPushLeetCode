function maxProfit(prices: number[]): number {
    
    let buy = prices[0];
    let maxProfit = 0;
    let profit=0;
    if(prices.length <= 1) return 0;
    
    for(let i= 1;i<prices.length;i++){
        
        if(prices[i] < buy) {
            buy = prices[i]
        }
        else{
            profit = prices[i]-buy;
            maxProfit = Math.max(profit,maxProfit)
        }

    }
    return maxProfit;

};