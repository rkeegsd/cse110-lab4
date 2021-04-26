## Part 1a
1. 20
2. 20
3. 20
4. 'result is undefined' is occurring because result is scoped to the if block because of the let declaration
5. 'Assignment to a constant variable' is occurring because result is a const and therefore cannot be changed after declaration
6. Would print 'result is undefined' as a const would be scoped like a let, therefore result would be scoped to the result block

## Part 1b
1. 3 because it is printing the iterator i in the for loop. As there are 3 items in the prices array, i will be 3
2. 150 because discountedPrice will contain the value of the last element in the array. As the element is 300, discountedPrice will contain 300*0.5=150
3. 150 because finalPrice will contain the last discountedPrice, 150, multiplied by 100 then divided by 100. As no rounding will occurr (due to 150 being a whole number), the result will be 150
4. [50, 100, 150] because discounted is storing the original price/2 then rounding. As no rounding occurs, the discounted array contains the original prices/2.
5. 'i is undefined' is occurring because i is scoped to the for block because of the let declaration
6. 'discountedPrice is undefined' is occuring because discountedPrice is scoped to the for block because of the let declaration
7. 150 because finalPrice is within scope and will contain the discounted price of the last element in the prices array, 300/2=150
8. [50, 100, 150] the same as in question 4, because the scoping that is occurring isn't causing any issues as nothing is being accessed outside of its scope.
9. 'i is undefined' is occurring because i is scoped to the for block because of the let declaration
10. 3 because it is printing the length of the prices array stored in the length const, which is 3
11. [50, 100, 150] the same as in question 4 and 8, because the scoping that is occurring isn't causing any issues as nothing is being accessed outside of its scope. Also no modifications are attempted to the consts after declaration.
12. a. student.name, b. student['Grad Year'], c. student.greeting(), d. student['Favorite Teacher'].name, e. student.courseLoad[0]
13. a. Concatenates '3' and 2 which yields '32', b. Subtracts '3' and 2 which yields the integer 1, c. Adds 3 to null (0) which yields 3, d. Concatenates '3' and null which yields '3null', e. Adds numerical true (1) to 3 which yields 4, f. Adds numerical false (0) to null (0) which yields 0, g. Concatenates '3' and undefined which yields '3undefined', h. Subtracts '3' and undefined which yields not a num (NaN)
14. a. Compares numerical representation of '2' and 1 which yields true, b. Compares lexicogrpahical ordering for '2' and '12' which yields false, c. Compares 2 to '2' which contain the same value and yields true (casting), d. Compares literal types of 2 and '2' which yields false (int != str even if same value), e. Compares numerical true (1) to 2 which yields false, f. Compares true bool to cast non-zero integer (true if != 0) which yields true
15. '==' allows for implicit casting when comparing values while '===' does not. '===' has the effect of ensuring type is accounted for when appropriate and can avoid unintentional casts in comparisons.
16. See part1b-question16.js
17. [2, 4, 6] will be the result because each element in the supplied array will be multiplied by 2. The array initially will contain callbacks but will eventually be populated with the result for each element. The callback function will multiply each value by 2 hence the resulting array will contain the initial values multiplied by 2.
18. See part1b-question18.js
19. '1
4
3
2' This is occurring because 1 and 4 are first on the stack, 3's callback has a timeout of 0 so it's next, then 2 is last with its 1000ms timeout.
