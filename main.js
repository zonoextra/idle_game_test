let essence = 0;
let essenceGainer = 0;
let upgradeOnePurchases = 0;
let testNum = 0;
let essencePerClick = 1;
let prestigeEssence = 0;
let gainers = 0;

function essenceClickCursor(number) {

    essence = essence + Math.floor(number * Math.pow(1 + prestigeEssence, 2));
    document.getElementById("essence").innerHTML = essence; 

}

function essenceClick(number) {

    essence = essence + Math.floor((number + upgradeOnePurchases) * Math.pow(1 + prestigeEssence, 2));
    document.getElementById("essence").innerHTML = essence; 

}

function buyGainer() {

    let gainerCost = Math.floor(10 * Math.pow(1.1, gainers));
    if(essence>=gainerCost) {

        gainers++;
        essence-= gainerCost;
        document.getElementById("gainers").innerHTML = gainers;
        document.getElementById("essence").innerHTML = essence;

        }

    let gainerCostNext = Math.floor(10 * Math.pow(1.1, gainers));
    document.getElementById('gainerCost').innerHTML = gainerCostNext;

}

function upgradePointsPerClick() {

    let upgradeOneCost = Math.floor(50 * Math.pow(1.25, upgradeOnePurchases));
    if(essence>=upgradeOneCost) {

        upgradeOnePurchases++;
        essence-= upgradeOneCost;
        document.getElementById("upgradeOnePurchases").innerHTML = upgradeOnePurchases;
        document.getElementById("essence").innerHTML = essence;

    }

    let upgradeOneCostNext = Math.floor(50 * Math.pow(1.25, upgradeOnePurchases));
    document.getElementById("upgradeOneCost").innerHTML = upgradeOneCostNext;
    
}

function prestigeEssenceGain() {

    let prestigePointCost = 1000;
    if(essence>=prestigeEssenceCost) {

        prestigePoints++;
        essence-= prestigeEssenceCost;
        document.getElementById("essence").innerHTML = essence;
        document.getElementById("prestigeEssence") = prestigeEssence;

    }
}

class Time {
    
    static loop(ms) {
        
        setTimeout(()=>{
            
            Time.doThing();
            this.loop(ms);
            
        }, ms)
        
    }
    
    static doThing() {

        essenceClickCursor(gainers);
        document.getElementById("essence").innerHTML = essence; 
        document.getElementById("prestigeEssence").innerHTML = prestigeEssence; 

    }
    
}

Time.loop(1000);