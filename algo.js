// 238 Product of Array Except Self



// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.





/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let leftProducts = new Array(n).fill(1);
    let rightProducts = new Array(n).fill(1);
    let answer = new Array(n);

    // Fill leftProducts array
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    // Fill rightProducts array
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    // Fill answer array
    for (let i = 0; i < n; i++) {
        answer[i] = leftProducts[i] * rightProducts[i];
    }

    return answer;
};