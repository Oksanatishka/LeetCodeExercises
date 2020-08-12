// Write a C program to input any number from user and toggle or invert or flip nth bit of the given number using bitwise operator.

#include <stdio.h>

int main()
{
    int num;
    int nth;

    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Enter nth: ");
    scanf("%d", &nth);

    int newNum = num ^ (1 << nth);
    printf("%d", newNum);

    return 0;
}