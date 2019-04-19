// Write a C program to input any number and check whether the given number is even or odd using bitwise operator.

// Example
// Input number: 12
// Output: 12 is even

#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    if (num & 1)
    {
        printf("%d is odd.", num);
    }
    else
    {
        printf("%d is even.", num);
    }

    return 0;
}
