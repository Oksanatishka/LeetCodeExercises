// Write a C program to input a number and rotate bits of number using bitwise shift operators.

// Example
// Input number = -15
// Number of rotations = 2
// Output:
// -15 left rotated 2 times = -57
// -15 right rotated 2 times = 2147483644

#include <stdio.h>
#define INT_SIZE sizeof(int)      // Size of int in bytes
#define INT_BITS INT_SIZE * 8 - 1 // Size of int in bits - 1
/* Function declarations */
int rotateLeft(int num, unsigned int rotation);
int rotateRight(int num, unsigned int rotation);

int main()
{
    int num;
    int rot;
    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Enter a number of rotations: ");
    scanf("%d", &rot);

    int leftrot = rotateLeft(num, rot);
    int rightrot = rotateRight(num, rot);

    printf("%d\n", leftrot);
    printf("%d\n", rightrot);
    return 0;
}
int rotateLeft(int num, unsigned int rotation)
{
    int bits = sizeof(int) * 8 - 1;

    // The effective rotation
    rotation %= bits;

    // Loop till rotation becomes 0
    while (rotation--)
    {
        num = (num << 1) | (1 & (num >> bits));
    }
    return num;
}

int rotateRight(int num, unsigned int rotation)
{
    int bits = sizeof(int) * 8 - 1;
    rotation %= bits;

    while (rotation--)
    {
        num = ((num >> 1) & (~(1 << bits)) | ((num & 1) << bits));
    }
    return num;
}