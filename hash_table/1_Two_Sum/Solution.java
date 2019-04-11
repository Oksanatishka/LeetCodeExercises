import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
class Solution {
    public static void main(String[] args) {
        int[] myArr = {1,2,3};
        int[] res = twoSum1(myArr,3);
        System.out.println(Arrays.toString(res));
    }

    // Solution Approach: Two-pass Hash Table
    // public static int[] twoSum(int[] nums, int target) {
    //     Map<Integer, Integer> map = new HashMap<>();
    //     for (int i=0; i< nums.length; i++){
    //         map.put(nums[i], i);
    //     }

    //     for(int i=0; i<nums.length; i++){
    //         int complement = target - nums[i];
    //         if(map.containsKey(complement) && map.get(complement) != i){
    //             return new int[] {i,map.get(complement)};
    //         }
    //     }
    //     throw new IllegalArgumentException("No two sum solution");
    // }

    // Solution Approach: One-pass Hash Table
    public static int[] twoSum1(int[] nums, int target){
        Map<Integer, Integer> map = new HashMap<>();
        for(int i=0; i< nums.length; i++){
            int dif = target - nums[i];
            if(map.containsKey(dif)){
                return new int[] {i, map.get(dif)};
            }
            map.put(nums[i],i);
        }
        throw new IllegalArgumentException("No two sum solution");

    }
}

// To compile:  javac Solution.java 
// To run:      java Solution 