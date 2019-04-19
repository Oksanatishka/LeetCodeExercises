// Write a C program to input any number from user and clear the nth bit of the given number using bitwise operator.

// Explanation: https://codeforwin.org/2016/01/c-program-to-clear-nth-bit-of-number.html

#include <stdio.h>

int main()
{
    int num;
    int nth;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Enter nth (0-31): ");
    scanf("%d", &nth);

    int newNum = num & (~(1 << nth));

    printf("%d", newNum);

    return 0;
}