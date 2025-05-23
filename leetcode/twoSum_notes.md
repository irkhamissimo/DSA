# Two Sum Problem: Hash Map Solutions

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

- Each input has exactly one solution.
- You may not use the same element twice.
- Return the answer in any order.

---

## One-Pass Hash Map Solution
```js
function twoSum(nums, target) {
    let numObj = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
    }
}
```
**How it works:**
- Iterate through the array.
- For each number, calculate its complement (`target - nums[i]`).
- If the complement exists in the hash map, return the indices.
- Otherwise, store the current number and its index in the hash map.
- **Time complexity:** O(n)

---

## Two-Pass Hash Map Solution
```js
function twoSum(nums, target) {
    let numObj = {};
    // First pass: build the map
    for (let i = 0; i < nums.length; i++) {
        numObj[nums[i]] = i;
    }
    // Second pass: check for complement
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined && numObj[complement] !== i) {
            return [i, numObj[complement]];
        }
    }
}
```
**How it works:**
- First loop: store each number and its index in a hash map.
- Second loop: for each number, check if its complement exists in the map and is not the same index.
- **Time complexity:** O(n)

---

## Variations
- Use a `Map` instead of a plain object for robustness.
- Return indices in different order (e.g., `[i, numObj[complement]]`).
- Collect all pairs if multiple answers are allowed.
- Use functional style (less common for early exit problems).

---

## Summary
Both solutions use a hash map to achieve O(n) time complexity. The one-pass version is slightly more efficient, while the two-pass version is sometimes easier to reason about. Both are standard, efficient approaches to the Two Sum problem. 