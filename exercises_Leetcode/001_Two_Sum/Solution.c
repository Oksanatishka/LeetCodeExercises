#include <stdio.h>
#include <stdbool.h>
// #define MAX 100000 

int *twoSum(int nums[], int numsSize, int target) {
    // int i, temp; 
    // bool s[100000] = {0}; /*initialize hash set as 0*/
    // static int resArr[2];
  
    // for (i = 0; i < numsSize; i++) 
    // { 
    //     temp = target - nums[i]; 
    //     if (temp >= 0 && s[temp] == 1) {
    //         resArr[0] = nums[i];
    //         resArr[1] = temp;
    //         // printf("(%d, %d) \n",resArr[0], resArr[1]); 
    //         break;
    //     }
    //     s[nums[i]] = 1; 
    // } 
    // return  resArr;
}

int main()
{
	int A[] = {1, 4, 45, 6, 10, 8}; 
    int n = 16; 
    int arr_size = sizeof(A)/sizeof(A[0]); 
    twoSum(A, arr_size, n); 
    
    return 0;
}