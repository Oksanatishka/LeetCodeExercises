#include <stdio.h>

int singleNumber(int *nums, int numsSize)
{
    int number = nums[0];
    for (int i = 1; i < numsSize; i++)
    {
        number = number ^ nums[i];
    }
    return number;
}

int main()
{
    // int arr[] = {2, 2, 1};
    int arr[] = {4, 1, 2, 1, 2};
    int len = sizeof(arr) / sizeof(arr[0]);

    int result = singleNumber(arr, len);
    printf("%d", result);
    return 0;
}