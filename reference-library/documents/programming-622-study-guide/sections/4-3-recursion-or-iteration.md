---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "264-280"
printed_pages: "264-280"
section: "Recursion or Iteration?"
chapter: "TOPIC 4: RECURSION"
keywords:
  - "recursive"
  - "iterative"
  - "memory"
  - "space"
  - "recursion"
  - "control"
  - "structure"
  - "set"
  - "statements"
  - "find"
  - "solution"
  - "its"
---

# Recursion or Iteration?

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 264-280 | printed pages 264-280

Related sections: [Problem Solving Using Recursion](4-2-problem-solving-using-recursion.md), [Healthcare (IoT in Healthcare or IoMT)](../../big-data-iot-600-study-guide/sections/2-6-2-healthcare-iot-in-healthcare-or-iomt.md), [Drawing a Structure Chart](../../information-systems-622-study-guide/sections/5-3-3-drawing-a-structure-chart.md), [SECURITY AND CONTROL ISSUES](../../information-systems-622-study-guide/sections/2-8-security-and-control-issues.md), [Recursive Definitions](4-1-recursive-definitions.md), [TOPIC 4: RECURSION](4-topic-4-recursion.md)

## Extracted Text

```text
[PDF page 264; printed page 264]
4.3 Recursion or Iteration?


 Often there are two ways to solve a particular problem—recursion or iteration. The programs in the
 previous chapters used a loop to repeat a set of statements to perform certain calculations. In other
 words, the programs in the previous chapters used an iterative control structure to repeat a set of
 statements. Formally, iterative control structures use a looping structure, such as while, for, or do... while,
 to repeat a set of statements.


 This chapter began by designing a recursive method to find the factorial of a nonnegative integer. Using
 an iterative control structure, we can easily write an algorithm to find the factorial of a nonnegative
                                                      264

[PDF page 265; printed page 265]
integer. Given our familiarity with iterative techniques, the iterative solution will seem simpler than the
recursive solution. The only reason we gave a recursive solution to the factorial problem was to illustrate
how recursion works using a simple example.


In this chapter, we also used recursion to determine the largest element in a list, determining a
Fibonacci number. Using an iterative control structure, we can also write an algorithm to find the largest
number in an array. Similarly, an algorithm that uses an iterative control structure can be designed to find
the Fibonacci number.
The obvious question becomes, which approach is better? There is no general answer, but there are some
guidelines. In addition to the nature of the solution, efficiency is the other key factor in determining the
better approach.


When a function is called, memory space is allocated for its formal parameters and local variables. When
the function terminates, that memory space is deallocated. In this chapter, while tracing the execution of
recursive methods, we saw that every recursive call had its own set of parameters and local variables.
That is, every recursive call required the system to allocate memory space for its formal parameters and
local variables, and then deallocate the memory space when the function exited. Even though we don’t
need to write program statements to allocate and deallocate memory, overhead is associated with
executing a recursive function, both in terms of memory space and execution time. Therefore, a recursive
function executes more slowly than its iterative counterpart. On slower computers, especially those with
limited memory space, the (relatively slow) execution of a recursive function is noticeable. Clearly, a
recursive function is less efficient than a corresponding iterative function in terms of execution time and
memory usage.


Efficiency is not determined solely by execution time and memory usage. Chances are that you have never
been concerned with either execution time or memory usage as you have been writing C++ programs.
Efficient use of a programmer’s time also is an important consideration. Chances are that you have
considered carefully what you can do to minimize the time required to produce C++ programs. Often this
is entirely appropriate. As a professional programmer, your time typically is far more expensive than the
cost of the computer you use to produce programs. Of course, if you are developing software that will be
used many times a day by large numbers of users, then execution time and memory usage become
important considerations.


Today’s computers are fast and have abundant memory. Therefore, the additional execution time and the
                                               265

[PDF page 266; printed page 266]
memory consumed by a recursive function might not be noticeable. Given the ever-increasing speed and
memory capacity of today’s computers, the choice between iteration and recursion depends more and
more on how the programmer envisions the solution to the problem, and less on execution time and
memory usage. In rare instances where execution time must be minimized or the demand for memory is
inordinately high, iteration might be better than recursion even when the recursive solution is more
obvious. Fortunately, any program that can be written recursively also can be written iteratively.


As a general rule, if you think an iterative solution is at least as obvious and easy to construct as a recursive
solution, choose the iterative solution. On the other hand, if the recursive solution is more obvious and
easier to construct, such as the solution to the Towers of Hanoi problem, choose the recursive solution.


If you question the existence of problems for which a recursive solution is more obvious and easier to
construct than an iterative solution, attempt to solve the Towers of Hanoi problem without using
recursion. You’ll quickly gain an increased appreciation for recursion. The ability to write recursive
solutions is an important programming skill.


4.3     Recursion and Backtracking: 8-Queens Puzzle


This section describes a problem-solving and algorithm design technique called backtracking. Let us
consider the following 8-queens puzzle: Place 8 queens on a chess-board (8 by 8 square board) so that no
two queens can attack each other. For any two queens to be nonattacking, they cannot be in the same
row, same column, or same diagonals. Figure 4-11 gives one possible solution to the 8-queens puzzle.




                                                      266

[PDF page 267; printed page 267]
                                   FIGURE 4-11 A solution to the 8-queens puzzle



In 1850, the 8-queens puzzle was considered by the great C. F. Gauss, who was unable to obtain a complete
solution. The term backtrack was first coined by D. H. Lehmer in 1950. In 1960, R. J. Walker gave an
algorithmic account of backtracking. A general description of backtracking with a variety of applications was
presented by S. Golomb and L. Baumert.


4.3.1 Backtracking


The backtracking algorithm attempts to find solutions to a problem by constructing partial solutions and
making sure that any partial solution does not violate the problem requirements. The algorithm tries to
extend a partial solution toward completion. However, if it is determined that the partial solution would
not lead to a solution, that is, the partial solution would end in a dead end, then the algorithm backs up
by removing the most recently added part and trying other possibilities.


4.3.2 n-Queens Puzzle


In backtracking, the solution of the n-queens puzzle, because each queen must be placed in a different
row, can be represented as an n-tuple (x1, x2, . . ., xn), where xi is an integer such that 1 ≤ xi ≤ n. In this
tuple, xi specifies the column number, where to place the ith queen in the ith row. Therefore, for the
8queens puzzle the solution is an 8-tuple (x1, x2, x3, x4, x5, x6, x7, x8), where xi is the column where to place
the ith queen in the ith row. For example, the solution in Figure 4-11 can be represented as the 8-tuple
(4,6,8,2,7,1,3,5). That is, the first queen is placed in the first row and fourth column, the second queen is
placed in the second row and sixth column, and so on. Clearly, each xi is an integer such that 1 ≤ xi ≤ 8.


Let us again consider the 8-tuple (x1, x2, x3, x4, x5, x6, x7, x8), where xi is an integer such that 1 ≤ xi ≤ 8.
Because each xi has 8 choices, there are 88 such tuples, and so possibly 88 solutions. However, because no
                                                       267

[PDF page 268; printed page 268]
two queens can be placed in the same row, no two elements of the 8-tuple (x1, x2, x3, x4, x5, x6, x7, x8) are
the same. From this, it follows that the number of 8-tuples possibly representing solutions are 8!.


The solution that we develop can, in fact, be applied to any number of queens. Therefore, to illustrate the
backtracking technique, we consider the 4-queens puzzle. That is, you are given a 4 by 4 square board
(see Figure 4-12) and you are to place 4 queens on the board so that no two queens attack each other.




                                FIGURE 4-12 Square board for the 4-queens puzzle



We start by placing the first queen in the first row and first column as shown in Figure 4-13(a). (A cross in
a box means no other queen can be placed in that box.)




                               FIGURE 4-13 Finding a solution to the 4-queens puzzle



After placing the first queen, we try to place the second queen in the second row. Clearly, the first square
in the second row where the second queen can be placed is the third column. So we place the second
queen in that column; see Figure 4-13(b).


Next, we try to place the third queen in the third row. We find that the third queen cannot be placed in
the third row and so we arrive at a dead end. At this point we backtrack to the previous board
configuration and place the second queen in the fourth column; see Figure 4-13(c). Next, we try to place
the third queen in the third row. This time, we successfully place the third queen in the second column of
the third row; see Figure 4-13(d). After placing the third queen in the third row, when we try to place the
fourth queen, we discover that the fourth queen cannot be placed in the fourth row.


We backtrack to the third row and try placing the queen in any other column. Because no other column is
available for queen three, we backtrack to row two and try placing the second queen in any other column,

                                                       268

[PDF page 269; printed page 269]
which cannot be done. We, therefore, backtrack to the first row and place the first queen in the next
column. After placing the first queen in the second column, we place the remaining queens in the
successive rows. This time we obtain the solution, as shown by Figure 4-14.




                                  FIGURE 4-14 A solution to the 4-queens puzzle



4.3.3 Backtracking and the 4-Queens Puzzle


Suppose that the rows of the square board of the 4-queens puzzle are numbered 0 through 3 and the
columns are numbered 0 through 3. (Recall that in C++, an array index starts at 0.)


For the 4-queens puzzle, we start by placing the first queen in the first row and first column, thus
generating the tuple (0). We then place the second queen in the third column of the second row and so
generate the tuple (0,2). When we try to place the third queen in the third row, we determined that the
third queen cannot be placed in the third row and so we back up to the partial solution (0,2), remove 2
from the tuple and then generate the tuple (0,3), that is, the third queen is placed in the fourth column of
the second row. With the partial solution (0,3), we then try to place the third queen in the third row and
generate the tuple (0,3,1). Next, with the partial solution (0,3,1), when we try to place the fourth queen
in the fourth row, it is determined that it cannot be done and so the partial solution (0,3,1) ends up in a
dead end.


From the partial solution (0,3,1), the backtracking algorithm, in fact, backs up to placing the first queen
and so removes all the elements of the tuple. The algorithm then places the first queen in the second
column of the first row and thus generates the partial solution (1). In this case, the sequence of partial
solution generated is, (1), (1,3), (1,3,0), and (1,3,0,2), which represents a solution to the 4-queens puzzle.
The solutions generated by the backtracking algorithm can be represented by a tree, as shown in Figure
4-15.




                                                      269

[PDF page 270; printed page 270]
                                          FIGURE 4-15 4-queens tree



4.3.4 8-Queens Puzzle


Let us now consider the 8-queens puzzle. Like the 4-queens puzzle, no two queens can be in the same
row, same columns, and same diagonals. Determining whether two queens are in the same row or column
is easy because we can check their row and column position. Let us describe how to determine whether
two queens are in the same diagonal or not.


Consider the 8 by 8 square board shown in Figure 4-16. The rows are numbered 0 through 7; the columns
are numbered 0 through 7. (Recall that, in C++, the array index starts at 0.)




                                        FIGURE 4-16 8 x 8 square board



Consider the diagonal from upper left to lower right, as indicated by the arrow. The positions of the
squares on this diagonal are (0,4), (1,5), (2,6), and (3,7). Notice that for these entries rowPosition –

                                                    270

[PDF page 271; printed page 271]
columnPosition is – 4. For example, 0 – 4 = 1 – 5 = 2 – 6 = 3 – 7 = – 4. It can be shown that for each square
on a diagonal from upper left to lower right, rowPosition – columnPosition is the same.


Now consider the diagonal from upper right to lower left as indicated by the arrow. The positions of the
squares on this diagonal are (0,6), (1,5), (2,4), (3,3), (4,2), (5,1), and (6,0). Here rowPosition +
columnPosition = 6. It can be shown that for each square on a diagonal from upper right to lower left,
rowPosition + columnPosition is the same.


We can use these results to determine whether two queens are on the same diagonal or not. Suppose a
queen is at position (i, j), (row i and column j), and another queen is at position (k, l) , (row k and column
l). These queens are on the same diagonal if either i + j = k + l or i - j = k – l. The first equation implies that
j – l = i – k and the second equation implies that j – l = k – i. From this it follows that the two queens are
on the same diagonal if |j – l| = |i – k|, where |j – l| is the absolute value of j – l and so on.


Because a solution to the 8-queens puzzle is represented as an 8-tuple, we use the array queensInRow of
size 8, where queensInRow[k] specifies the column position of the kth queen in row k. For example,
queensInRow[0] = 3 means the first queen is placed in column 3 (which is the fourth column) of row 0
(which is the first row).


Suppose that we place the first k-1 queens in the first k – 1 rows. Next we try to place the kth queen in a
column of the kth row.Wewrite the function canPlaceQueen(k,i),which returns true if the kth queen can
be placed in the ith column of row k; otherwise, it returns false.


The first k-1 queens are in the first k-1 rows and we are trying to place the kth queen in the kth row. The
kth row, therefore, must first be empty. It thus follows that the kth queen can be placed in column i of
row k, provided no other queen is in column i and no queens are on the diagonals on which square (k, i )
lies. The general algorithm for the function canPlaceQueen(k, i) is as follows:
for (int j = 0; j < k; j++)
                 if((queensInRow[j] == i)                                 //there is already a queen in column i

                              || (abs(queensInRow[j] - i) == abs(j-k)))   //there is already




                                                           271

[PDF page 272; printed page 272]
                                                                         //a queen in one of the diagonals
                                  //on which square (k,i) lies return false;
        return true;


The for loop checks whether there is already a queen either in column i or in one of the diagonals on which
square (k, i) lies. If it finds a queen at any of such positions, the for loop returns the value false. Otherwise,
the value true is returned.


The following class defines the n-queens puzzle as an ADT:
//***************************************************************
// This class specifies the functions to solve the n-queens puzzle.
//*************************************************************** class
nQueensPuzzle
{
        public:
                  nQueensPuzzle(int queens = 8);
                  //constructor
                  //Postcondition: noOfSolutions = 0; noOfQueens = queens;
                  // queensInRow is a pointer to the array to store the
                  // n-tuple


                  bool canPlaceQueen(int k, int i);
                  //Function to determine whether a queen can be placed //in
                  row k and column i.
                  //Postcondition: returns true if a queen can be placed in
                  // row k and column i; otherwise it returns false


                  void queensConfiguration(int k);
                  //Function to determine all solutions to the n-queens //puzzle
                  using backtracking.
                  //The function is called with the value 0.
                  //Postcondition: All n-tuples representing solutions of //
                  n-queens puzzle are generated and printed.
                                                        272

[PDF page 273; printed page 273]
               void printConfiguration();
               //Function to output an n-tuple containing a solution //to
               the n-queens puzzle.


               int solutionsCount();
               //Function to return the total number of solutions.
               //Postcondition: The value of noOfSolution is returned.


       private: int
               noOfSolutions;
               int noOfQueens;
               int *queensInRow;
};
The definitions of the member functions of the class nQueensPuzzle are given next:


nQueensPuzzle::nQueensPuzzle(int queens)
{
       noOfQueens = queens;
       queensInRow = new int[noOfQueens];
       noOfSolutions = 0;
}


bool nQueensPuzzle::canPlaceQueen(int k, int i)
{
       for (int j = 0; j < k; j++) if
               ((queensInRow[j] == i)
                      || (abs(queensInRow[j] - i) == abs(j-k))) return
                                false;
       return true;
}


Using recursion, the function queensConfiguration implements the backtracking technique to determine
                                                   273

[PDF page 274; printed page 274]
all solutions to the n-queens puzzle. The parameter k specifies the queen to be placed in the kth row. Its
definition is straightforward and is given next.


void nQueensPuzzle::queensConfiguration(int k)
{
       for (int i = 0; i < noOfQueens; i++)
       {
                 if (canPlaceQueen(k, i))
                 {

                        queensInRow[k] = i;                          //place the kth queen in column i
                        if (k == noOfQueens - 1)                     //all the queens are placed
                                printConfiguration();                //print the n-tuple
                        else queensConfiguration(k + 1);      //determine the place
                                                                     //for the (k+1)th queen
                 }
       }
}


void nQueensPuzzle::printConfiguration()
{
       noOfSolutions++; cout
       << "(";
       for (int i = 0; i < noOfQueens - 1; i++) cout
                 << queensInRow[i] << ", ";
       cout << queensInRow[noOfQueens - 1] << ")" << endl;
}


int nQueensPuzzle::solutionsCount()




                                                        274

[PDF page 275; printed page 275]
{
         return noOfSolutions;
}


We leave it as an exercise for you to write a program to test the n-queens puzzle class for various board
sizes.


4.4      Recursion, Backtracking, and Sudoku


In the previous section, we used recursion and backtracking to solve the 8-queens problem. In this section,
we introduce the well-known sudoku problem, which can be solved using recursion and backtracking. This
problem involves filling numbers 1 to 9 in a partially filled, 9 x 9 grid with constraints described in this
section. Figure 4-17(a) shows a partially filled grid.




                                   FIGURE 4-17 Sudoku problem and its solution



The sudoku grid is a 9 x 9 grid consisting of nine rows, nine columns, and nine 3 x 3 smaller grids. In Figure
4-17, the nine 3 x 3 smaller grids are separated by darker horizontal and vertical lines. The first 3 x 3
smaller grid is in rows 1 to 3 and columns 1 to 3, the second 3 x 3 smaller grid is in rows 1 to 3 and columns
4 to 6, and so on.


The objective is to fill the entire grid with numbers 1 to 9 such that each number appears exactly once in
each row, each column, and each 3 x 3 smaller grid. For example, the solution to the sudoku problem in
Figure 4-17(a) is shown in Figure 4-17(c).


Next, we describe, a simple recursive backtracking algorithm to find the solution to the sudoku problem
in Figure 4-17(a).



                                                         275

[PDF page 276; printed page 276]
Starting at the first row, we find the first empty grid slot. For example, in Figure 4-17(a), the first empty
grid slot is in the second row and second column. Next we find the first number, between 1 and 9, that
can be placed in this slot. (Note that before placing a number in an empty slot, we must check that the
number does not appear in the row, column, and the 3 x 3 grid containing the slot.) For example, in Figure
4-17(a), the first number that can be placed in the second row and second column is 5; see Figure 4-17(b).
After placing a number in the first empty slot, we find the next empty slot and try to place a number in
that slot. If a number cannot be placed in a slot, then we must backtrack to the previous slot, where the
number was placed, place a different number, and continue. If we arrive at a slot where no number can
be placed, then the sudoku problem has no solutions.


The following class implements the sudoku problem as an ADT:
//***************************************************************
// This class specifies the functions to solve a sudoku problem.
//***************************************************************
class sudoku
{
        public:
                  sudoku();
                  //default constructor
                  //Postcondition: grid is initialized to 0


                  sudoku(int g[][9]);
                  //constructor
                  //Postcondition: grid = g


                  void initializeSudokuGrid();
                  //Function to prompt the user to specify the numbers of the //partially
                  filled grid.
                  //Postcondition: grid is initialized to the numbers //
                  specified by the user.


                  void initializeSudokuGrid(int g[][9]);
          //Function to initialize grid to g

                                                           276

[PDF page 277; printed page 277]
//Postcondition: grid = g;


void printSudokuGrid();
//Function to print the sudoku grid.


bool solveSudoku();
//Funtion to solve the sudoku problem.
//Postcondition: If a solution exits, it returns true, // otherwise it returns false.


bool findEmptyGridSlot(int &row, int &col);
//Function to determine if the grid slot specified by
//row and col is empty.
//Postcondition: Returns true if grid[row][col] = 0;


bool canPlaceNum(int row, int col, int num); //Function to determine if num can be placed in
//grid[row][col]
//Postcondition: Returns true if num can be placed in // grid[row][col], otherwise it returns false.


bool numAlreadyInRow(int row, int num);
//Function to determine if num is in grid[row][] //Postcondition: Returns true if num is in grid[row][],
// otherwise it returns false.




                                            277

[PDF page 278; printed page 278]
               bool numAlreadyInCol(int col, int num); //Function
               to determine if num is in grid[row][] //Postcondition:
               Returns true if num is in grid[row][], // otherwise it
               returns false.


               bool numAlreadyInBox(int smallGridRow, int smallGridCol,int num);
               //Function to determine if num is in the small grid
               //Postcondition: Returns true if num is in small grid,
               // otherwise it returns false.


       private:
               int grid[9][9];
};


Note that we use the digit 0 to specify an empty grid. For example, the partially filled sudoku grid in Figure
4-17(a) is entered and stored as:


                       603020090
                       000050080
                       020407001
                       006014300
                       000080056
                       040603200
                       800200007
                       010075800
                       030006105


Next we write the definition of the function solveSudoku.


The function solveSudoku uses recursion and backtracking to find a solution, if one exists, of the partially
filled sudoku grid. The general algorithm is as follows:



                                                     278

[PDF page 279; printed page 279]
    1. Find the position of the first empty slot in the partially filled grid. If the grid has no empty slots,
        return true and print the solution.
    2. Suppose the variables row and col specify the position of the empty grid position.


for (int digit = 1; digit <= 9; digit++)
{
        if (grid[row][col] <> digit)
        { grid[row][col] = digit; recursively fill the updated grid; if the
                 grid is filled successfully, return true, otherwise remove
                 the assigned digit from grid[row][col] and try another
                 digit.
        }
If all the digits have been tried and nothing worked, return false.
The definition of the function is as follows:
bool sudoku::solveSudoku()
{
        int row, col;


        if (findEmptyGridSlot(row, col))
        {
                 for (int num = 1; num <= 9; num++)
                 {
                          if (canPlaceNum(row, col, num))
                          {
                                  grid[row][col] = num;
                                  if (solveSudoku())      return         //recursive call
                                           true;
                                  grid[row][col] = 0;
                          }
                 }
                 return false;                                           //backtrack
        }

                                                        279

[PDF page 280; printed page 280]
        else


                 return true;                                         //there are no empty slots
}


We leave it is as an exercise for you to write the definitions of the remaining functions of the class sudoku
and program that solves sudoku problems.


Key Terms


1. The process of solving a problem by reducing it to smaller versions of itself is called recursion.
2. A recursive definition defines a problem in terms of smaller versions of itself.
3. Every recursive definition has one or more base cases.
4. A recursive algorithm solves a problem by reducing it to smaller versions of itself.
5. Every recursive algorithm has one or more base cases.
6. The solution to the problem in a base case is obtained directly.
7. A function is called recursive if it calls itself.
8. Recursive algorithms are implemented using recursive functions.
9. Every recursive function must have one or more base cases.
10. The general solution breaks the problem into smaller versions of itself.
11. The general case must eventually be reduced to a base case.
         12.    The base case stops the recursion. 13. While tracing a recursive function:
         Logically, you can think of a recursive function as having an unlimited number of copies of itself.
        Every call to a recursive function—that is, every recursive call—has its own code and its own set
    of parameters and local variables.

       After completing a particular recursive call, control goes back to the calling environment, which is
        the previous call. The current (recursive) call must execute completely before control goes back to
        the previous call. The execution in the previous call begins from the point immediately following
        the recursive call.




                                                        280
```
