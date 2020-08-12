// Write a C program to input any number from user and check whether the Least Significant Bit (LSB)
// of the given number is set (1) or not (0).

// Example
// Input number:    11
// Output:          Least Significant Bit of 11 is set (1).

// Explanation: https://codeforwin.org/2016/01/c-program-to-check-lsb-of-number.html
// For solution we need AND & operator

#include <stdio.h>

int main()
{
    // int num1 = 12; // 0
    // int num2 = 15; // 1
    int num;

    printf("Enter a number: ");
    scanf("%d", &num);

    // The bitwise AND operation number & 1 will evaluate to 1 if LSB of number is set i.e. 1 otherwise evaluates to 0.
    if (num & 1)
    {
        printf("%c\n", '1');
    }
    else
    {
        printf("%c\n", '0');
    }
    return 0;
}