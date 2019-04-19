// Write a C program to input any two numbers from user and swap values of both numbers using bitwise operator.

// Example

// Input
// Input first number: 22
// Input second number: 65

// Output
// First number after swapping: 65
// Second number after swapping: 22

#include <stdio.h>

int main()
{
    int num1;
    int num2;
    printf("Enter a number 1: ");
    scanf("%d", &num1);
    printf("Enter a number 2: ");
    scanf("%d", &num2);

    num1 ^= num2;
    num2 ^= num1;
    num1 ^= num2;

    printf("%d\n", num1);
    printf("%d\n", num2);
    return 0;
}
