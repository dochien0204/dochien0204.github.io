function dem(nums) {
   nums.sort();
   count = 1;
   for(let i = 0; i < nums.length; i++)
   {
        if(nums[i+1] === nums[i]) count++;
        else {
            console.log('So ' + nums[i] +' xuat hien ' + count +' lan\n');
            count = 1;
        }
   }
}

//case 1
console.log("Case 1\n");
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
dem(nums);
console.log(nums);
console.log("Case 2\n");
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
dem(nums1);
console.log("Case 3\n");
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
dem(nums2);
