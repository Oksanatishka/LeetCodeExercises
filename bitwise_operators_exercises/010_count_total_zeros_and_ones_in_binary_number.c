// Write a C program to input a number from user and count total number of ones (1s) and zeros (0s) in the given number using bitwise operator.

// Example
// Input any number: 22
// Output number of ones: 3
// Output number of zeros: 29

#include <stdio.h>

int main()
{
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    int bits = sizeof(int) * 8;
    int countOnes = 0;
    int countZeros = 0;

    for (int i = 0; i < bits; i++)
    {
        if (num & 1)
        {
            countOnes++;
        }
        else
        {
            countZeros++;
        }
        num >>= 1; // num = num >> 1;
    }
    printf("number of ones: %d\n", countOnes);
    printf("number of zeros: %d\n", countZeros);

    return 0;
}