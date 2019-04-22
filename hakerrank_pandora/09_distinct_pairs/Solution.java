// In this challenge, you will be given an array of integers and a target value. Determine the number of distinct pairs of elements in the array that sum up the target value. Two pairs (a,b) and (c,d) are considered to be distinct if and only if values in sorted order do not match, i.e. (1,9) and (9,1) are indistinct  but (1,9) and (9,2) are distinct.
// For example, given the array [1,2,3,6,7,8,9,1] and a target value of 10, the seven pairs (1,9), (2,8), (3,7), (8,2), (9,1), and (1,9) all sum to 10 and there are only three distinct pairs (1,9), (2,8), and (3,7).
// Function Description 
// Complete the function numberOfPairs in the editor below. The function must return an integer, the total number of distinct pairs of elements in the array that sum to the target value.
// numberOfPairs has the following parameter(s):
// 	a[a[0],...a[n-1]]: an array of integers to select pairs from.
// 	k: target integer value to sum to.
// Constraints
// 	1 <= n <= 5 * 105	
// 	0 <= a[i] <= 109
// 0 <= k <= 5 * 109

// numberOfPairs(List<integer> a, long k)




// import java.io*;

// class Result {
//     /*
//     * Complete the 'numberOfPairs' function below
//     * 
//     * The function is expected to return an INTEGER.
//     * The function accepts following parameters:
//     * 1. INTEGER_ARRAY a
//     * 2. LONG_INTEGER K
//     */

//     public static int numberOfPairs(List<Integer> a, long k){

//     }
// }

// public class Solution {}

public class Main {

   public static void main(String[] args) {
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(1, 2, 3, 6, 7, 8, 9, 1), 10));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(1, 2, 3, 6, 7, 8, 9, 1, 9, 1, 2, 8), 10));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(1, 1, 1, 1, 2, 3, 6, 7, 8, 9, 1, 9, 1, 2, 8), 10));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(1, 3, 46, 1, 3, 9), 47));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(1, 5, 3, 4, 2), 3));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(1), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0), 1));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0,0), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0,0,0), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0,0,0), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0,0,0,0), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0,0,0,0,0), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0,1,0,1), 1));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(0, 0, 0, 3, 2, 5, 4), 0));
       System.out.println("Count of pairs with given sum is "
               + numberOfPairs(Arrays.asList(7,6,12,3,9,3,5,1), 12));
   }

   public static int numberOfPairs(List<Integer> a, int k) {
       if (a == null || a.size() == 0 || k < 0)
           return 0;

       Map<Integer, Integer> map = new HashMap<>();
       int count = 0;
       for (int i : a) {
           map.put(i, map.getOrDefault(i, 0) + 1);
       }

       for (int i = 0; i < a.size(); i++) {
             int target = k - a.get(i);
             if (map.containsKey(target)) {
//                  System.out.println("target " + target);
                 count++;
                 if (target == a.get(i) && map.get(target) == 1) {
                     count--;
                 }
                 map.remove(target);
                 map.remove(a.get(i));
             }
       }

       return (int)Math.ceil((double) count);
   }
}