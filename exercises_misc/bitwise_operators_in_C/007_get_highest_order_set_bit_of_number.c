// Write a C program to input any number from user and find highest order set bit of given number using bitwise operator.

// Example
// Input any number: 22
// Output: Highest order set bit in 22 is 4.

#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    int bits = sizeof(int) * 8;
    // printf("bits is %d\n", bits);
    int order = -1;
    for (int i = 0; i < bits; i++)
    {
        if (num >> i & 1)
        {
            order = i;
            // printf("order is %d\n", order);
        }
    }
    if (order != -1)
        printf("Highest order set bit in %d is %d\n", num, order);
    else
        printf("0 has no set bits.");
    return 0;
}