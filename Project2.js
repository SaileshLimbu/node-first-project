const nums = [1,9,8,7,10,11,11,13,7];
function checkRepetation(num){
    let timesRepeted = 0;
    for(i in nums){
        if(nums[i] == num){
            timesRepeted++;
        }
    }
    return (timesRepeted > 1) ? true : false;
}

function checkRepetationTimes(num){    
    let timesRepeted = 0;
    for(i in nums){
        if(nums[i] == num){
            timesRepeted++;
        }
    }
    return timesRepeted;
}

function findSmallAndLarge(){
    let smallest = nums[0];
    let largest = nums[0];
    for(i in nums){
        if(nums[i] < smallest){
            smallest = nums[i];
        }
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    console.log(smallest);
    console.log(largest);
}