let points = 0;
let cursors = 0;
let upgradeOnePurchases = 0;
let testNum = 0;
let pointsPerClick = 1;
let prestigePoints = 0;

function pointClickCursor(number) {

    points = points + Math.floor(number * Math.pow(1 + prestigePoints, 2));
    document.getElementById("points").innerHTML = points; 

}

function pointClick(number) {

    points = points + Math.floor((number + upgradeOnePurchases) * Math.pow(1 + prestigePoints, 2));
    document.getElementById("points").innerHTML = points; 

}

function buyCursor() {

    let cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
    if(points>=cursorCost) {

        cursors++;
        points-= cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
        document.getElementById("points").innerHTML = points;

        }

    let cursorCostNext = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById('cursorCost').innerHTML = cursorCostNext;

}

function upgradePointsPerClick() {

    let upgradeOneCost = Math.floor(50 * Math.pow(1.25, upgradeOnePurchases));
    if(points>=upgradeOneCost) {

        upgradeOnePurchases++;
        points-= upgradeOneCost;
        document.getElementById("upgradeOnePurchases").innerHTML = upgradeOnePurchases;
        document.getElementById("points").innerHTML = points;

    }

    let upgradeOneCostNext = Math.floor(50 * Math.pow(1.25, upgradeOnePurchases));
    document.getElementById("upgradeOneCost").innerHTML = upgradeOneCostNext;
    
}

function prestigePointGain() {

    let prestigePointCost = 1000;
    if(points>=prestigePointCost) {

        prestigePoints++;
        points-= prestigePointCost;
        document.getElementById("points").innerHTML = points;
        document.getElementById("prestigePoints");

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

        pointClickCursor(cursors);
        document.getElementById("points").innerHTML = points; 
        document.getElementById("prestigePoints").innerHTML = prestigePoints; 

    }
    
}

Time.loop(1000);