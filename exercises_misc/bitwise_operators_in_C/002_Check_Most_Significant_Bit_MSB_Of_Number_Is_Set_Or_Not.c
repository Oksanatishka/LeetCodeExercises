// Write a C program to input any number from user and check whether Most Significant Bit (MSB) of given number is set (1) or not (0).

// Explanation: https://codeforwin.org/2016/01/c-program-to-check-most-significant-bit-of-number-is-set-or-not.html
// Note: MSB of positive number is always 0 (in 2s complement) and negative number is 1.

#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    int bits = sizeof(int) * 8;
    int msb = 1 << (bits - 1);
    if (num & msb)
    {
        printf("%d\n", 1);
    }
    else
    {
        printf("%d\n", 0);
    }

    return 0;
}