// Write a C program to input any number from user and check whether nth bit of the given number is set (1) or not (0).

#include <stdio.h>

int main()
{
    int num;
    int nth;

    printf("Enter a number: ");
    scanf("%d", &num);
    printf("Enter nth bit to check (0-31): ");
    scanf("%d", &nth);

    int bitStatus = (num >> nth) & 1;
    printf("%d\n", bitStatus);

    return 0;
}