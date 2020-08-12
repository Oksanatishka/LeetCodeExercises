// Write a C program to input any number from user and set nth bit of the given number as 1.

// Bitwise OR operator

#include <stdio.h>

int main()
{
    int num;
    int nth;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Enter nth bit (0-31): ");
    scanf("%d", &nth);

    int newNum = (1 << nth) | num;
    printf("%d", newNum);

    return 0;
}