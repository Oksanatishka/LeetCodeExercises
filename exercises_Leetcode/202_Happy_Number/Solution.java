class Solution {
    public boolean isHappy(int n) {
        int sum=0;
        int rem = 0;
        while(sum!=1 && sum!=4){
            sum=0;
            while(n>0){
                rem = n%10;
                n=n/10;
                sum += rem*rem;
            }
            n = sum;
        }
        if(sum == 1){
            return true;
        } else {
            return false;
        }
    }
}