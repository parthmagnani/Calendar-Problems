# Calendar-Problems
How to find years between 2014 to 2050, that on 1st January there will Sunday

To solve any kind of calendar problem we should know 1 Week has 7 days and 1 year has 52 weeks + 1 day(extra day). Also leap year has 52 weeks + 2 days(extra days)

Now let give numbers to our days
1. sunday - 0
2. monday - 1
3. tuesday - 2
4. wednesday - 3
5. thursday - 4
6. friday - 5
7. saturday - 6

Now let give numbers to months
1. January - 0,
2. February - 3
3. March - 3
4. April - 6
5. May - 1
6. June - 4
7. July - 6
8. August - 2
9. September - 5
10. October - 0
11. November - 3
12. December - 5

Now let give numbers to years
1. 1600 - 1699   -> 6
2. 1700 - 1799   -> 4
3. 1800 - 1899   -> 2
4. 1900 - 1999   -> 0
5. 2000 - 2099   -> 6

Procedure to solve calendar problem
1. take last two digit of year --> (store in variable lastDigit)
2. divide it by 4 --> (store in divideByFour)
3. take the date --> (1)
4. take the number of Month --> 0(January)
5. take the number of year --> 6 (all the years between 2014 - 2050 are in between 2000 - 2099)
6. now sum all the above steps and divide it by 7
   if remainder = 0 -> day is sunday
   if remainder = 1 -> day is monday
   if remainder = 2 -> day is tuesday and so on..


so In our problem we are using for loop from year 2014 to 2050 and following above procedure.
