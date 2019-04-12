#include <stdio.h>
#include <stdbool.h>

bool isHappy(int n) {
    int sum =0;
    int rem = 0;
    while(sum !=1 && sum != 4){
        sum=0;
        while(n>0){
            rem = n % 10;
            n=n/10;
            sum += rem * rem;
        }
        n = sum;
    }

    if(sum == 1){
        return 1;
    } else {
        return 0;
    }
}

int main() {
    // int num = 19;
    printf("%d\n", isHappy(19));
    printf("%d\n", isHappy(18));
    return 0;
}