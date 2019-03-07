import java.util.Arrays;

public class Solution {

    public static void main(String[] args) {
        int[] myArr = {1,2,3};
        int[] res = twoSum(myArr,3);
        System.out.println(Arrays.toString(res));

        System.out.println("----------");
        int[] myArr1 = {1,2, 2, 3,4,5};
        int[] res1 = twoSum(myArr1,4);
        System.out.println(Arrays.toString(res1));

        System.out.println("----------");
        int[] myArr2 = {1,2,4,};
        int[] res2 = twoSum(myArr2,7);
        System.out.println(Arrays.toString(res2));

        System.out.println("----------");
        int[] myArr3 = {2,5,5,11};
        int[] res3 = twoSum(myArr3,10);
        System.out.println(Arrays.toString(res3));
    }

    private static int[] twoSum(int[] nums, int target) {
        int[] res = new int[2];
        for (int i=0; i<nums.length; i++){
            for (int j=i+1; j<nums.length; j++){
                if (nums[i]+nums[j] == target) {
                    res[0] = i;
                    res[1] = j;
                    return res;
                }
            }
        }
        return res;
    }
}