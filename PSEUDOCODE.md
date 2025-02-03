# Concentration Game

### *Pseudocode* 
Updated: Feb. 03, 2025 

Instruction: (Ben) \
#### Focus on gameplay / winning and losing combinations
 
1. Define sequences in array.
2. Select sequence to use.
3. Flash sequence of 3 to player using FlexBox.
4. To quiz, player is shown 6 possibilities of items using Grid.
5. Player clicks on the ones they remember, in sequence they remember.
6. Players sequence is compared to sequecne used.
7. Player wins if 2 or 3 are correct, loses if not.

\
\
\
\
\
Means of accomplishing each item above:
# 
1. Defining array: 
- Source: lecture on array iterator method
 ```javascript 
    const cars = [
    {color:'red', make: 'BMW', year: '2022'},
    {color: 'white', make: 'toyota', year: '2025'}
    ]; 
```
- Altered for my application:
```javascript
    const pics = [
        {ID: 1, name: 'bird', link: 'http://www.imagehippo.picbird.com'},
        {ID: 2, name: 'cat', link: 'http://www.imagehippo.piccat.com'},
    ];
```
- there will be 12 of these options in my array. (not tested yet)

#
Then just need a randomizer to pull 3 items of the 12, assign to another const (seq)
present to player and compare randomizer seq const to player quiz answer const (player)