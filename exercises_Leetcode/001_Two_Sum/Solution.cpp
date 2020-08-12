#include <map>

using namespace std;

// не скомпилируется потому - там нужен отдельно main

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int len = nums.size();
        map<int, int> r;
        vector rr;
        for (int i = 0; i < len; i++)
        {
            if (r.find(nums[i]) == r.end())
            {                   // if not exist
                r[nums[i]] = i; // add it to the map
            }
            int j, num = target - nums[i];
            if ((r.find(num) != r.end()) && ((j = r[num]) < i))
            {
                rr.push_back(j + 1);
                rr.push_back(i + 1);
                return rr;
            }
        }
        return rr;
    }
};

//--------------------------------------------------------------------
#include <map>

using namespace std;

// не скомпилируется потому - там нужен отдельно main

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int len = nums.size();
        map<int, int> r;
        vector rr;
        for (int i = 0; i < len; i++)
        {
            if (r.find(nums[i]) == r.end())
            {                   // if not exist
                r[nums[i]] = i; // add it to the map
            }
            int j, num = target - nums[i];
            if ((r.find(num) != r.end()) && ((j = r[num]) < i))
            {
                rr.push_back(j + 1);
                rr.push_back(i + 1);
                return rr;
            }
        }
        return rr;
    }
};