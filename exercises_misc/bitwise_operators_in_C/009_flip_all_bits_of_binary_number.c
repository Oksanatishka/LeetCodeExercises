// Write a C program to input a number from user and flip all bits of the given number (in binary representation) using bitwise operator.

// Example
// Input any number: 22
// Output: Number after bits are flipped: -23 (in decimal)

#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    int newNum = ~num;

    printf("%d\n", newNum);

    return 0;
}