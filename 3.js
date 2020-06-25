var rotate = (nums,k)=>{
    var ans = [];
    var i=-k;
    while(i<=k){
        i >= 0 ?   ans.push(nums[i]) : ans.push(nums[nums.length+i]);
        i++;
    }
    return ans;
}