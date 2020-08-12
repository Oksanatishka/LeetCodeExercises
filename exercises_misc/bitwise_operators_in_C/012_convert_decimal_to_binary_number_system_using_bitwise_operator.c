// Write a C program to input any decimal number from user and convert it to binary number system using bitwise operator.

// Example
// Input any number: 22
// Output: Binary number: 00000000000000000000000000010110

#include <stdio.h>

int main()
{
    int num, index, i;
    int bin[sizeof(int) * 8];
    printf("Enter a number: ");
    scanf("%d", &num);

    index = sizeof(int) * 8 - 1;

    while (index >= 0)
    {
        /* Store LSB of num to bin */
        bin[index] = num & 1;

        /* Decrement index */
        index--;

        /* Right Shift num by 1 */
        num >>= 1;
    }

    /* Print converted binary */
    printf("Converted binary: ");
    for (i = 0; i < sizeof(int) * 8; i++)
    {
        printf("%d", bin[i]);
    }
    printf("\n");

    return 0;
}
