// ==========================================================
// FINAL DSA Course Data File
// ==========================================================

// ----------------------------------------------------------
// 1. Interfaces
// ----------------------------------------------------------

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'not-started' | 'completed' | 'in-progress';
  description?: string;
  examples?: string[];
  constraints?: string[];
  articleLink?: string;
  practiceLink?: string;
  videoLink?: string;
  isFreeProblem?: boolean;
}

export interface Lecture {
  id: string;
  title: string;
  problems: Problem[];
  totalProblems: number;
  completedProblems: number;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  lectures: Lecture[];
  totalProblems: number;
  completedProblems: number;
}

// ----------------------------------------------------------
// 2. The Main Data Array
// ----------------------------------------------------------

export const dsaCourse: Step[] = [
  // ▼▼▼ STEP 1 DATA ADDED ▼▼▼
  {
    id: "step-1",
    title: "Learn the basics",
    description: "Start your DSA journey with basic programming concepts",
    totalProblems: 31,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-1-1",
        title: "Things to Know in C++/Java/Python or any language",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          {
            id: "user-input-output",
            title: "User Input / Output",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# User Input and Output\n\nIn this problem, you will learn how to handle user input and output in your chosen programming language.\n\nYour task is to create a program that reads two integers from the user, adds them together, and outputs the result.\n\nThis is a fundamental skill that you'll use in almost every program you write.",
            examples: [
              "Input: 5 7\nOutput: 12\nExplanation: 5 + 7 = 12",
              "Input: -3 8\nOutput: 5\nExplanation: -3 + 8 = 5"
            ],
            constraints: [
              "The input will consist of two integers separated by a space.",
              "The integers will be in the range [-1000, 1000].",
              "The output should be a single integer."
            ]
          },
          {
            id: "data-types",
            title: "Data Types",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Data Types\n\nUnderstanding different data types is crucial for programming. In this problem, you'll work with various data types.\n\n## Task\n\nCreate a program that demonstrates the use of the following data types:\n\n1. **Integers** - Whole numbers without decimal points\n2. **Floating-point** - Numbers with decimal points\n3. **Strings** - Text data\n4. **Booleans** - True/False values\n\nYour program should:\n\n1. Declare variables of each type\n2. Perform appropriate operations on them\n3. Display the results.",
            examples: [
              "Example Output:\n\nInteger: 42\nFloat: 3.14159\nString: 'Hello, World!'\nBoolean: true\n\nInteger + 10 = 52\nFloat * 2 = 6.28318\nString concatenated: 'Hello, World! Welcome to programming.'\nBoolean negated: false"
            ],
            constraints: [
              "Use appropriate variable naming conventions for your language.",
              "Demonstrate at least one operation for each data type.",
              "Include appropriate type conversions if necessary."
            ]
          },
          {
            id: "if-else-statements",
            title: "If Else statements",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "In this challenge, we test your knowledge of using if-else conditional statements to automate decision-making processes. Given an integer, n, perform the following conditional actions:\n\n- If n is odd, print `Weird`\n- If n is even and in the inclusive range of 2 to 5, print `Not Weird`\n- If n is even and in the inclusive range of 6 to 20, print `Weird`\n- If n is even and greater than 20, print `Not Weird`\n\nComplete the stub code provided in your editor to print whether or not n is weird.",
            examples: [
              "Input: 3\nOutput: Weird\nExplanation: n is odd and odd numbers are weird, so we print Weird.",
              "Input: 24\nOutput: Not Weird\nExplanation: n > 20 and n is even, so it isn't weird. Thus, we print Not Weird."
            ],
            constraints: [
              "1 <= n <= 100"
            ]
          },
          {
            id: "switch-statement",
            title: "Switch Statement",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a number 'n' from 1 to 7, return the corresponding day of the week. 1 is Sunday, 2 is Monday, and so on. If the number is not in the range, return 'Invalid input'. Use a switch statement for this task.",
            examples: [
              "Input: 1\nOutput: Sunday",
              "Input: 5\nOutput: Thursday",
              "Input: 8\nOutput: Invalid input"
            ],
            constraints: [
              "The input 'n' will be an integer."
            ]
          },
          {
            id: "arrays-strings",
            title: "What are arrays, strings?",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Arrays and Strings\n\nArrays are fundamental data structures that store a collection of elements of the same type in contiguous memory locations. Strings are essentially arrays of characters.\n\n## Task\n\nYour task is to write a program that:\n1. Creates an integer array of size 5 and initializes it with the numbers 10, 20, 30, 40, 50.\n2. Prints the element at the 3rd position (index 2).\n3. Creates a string variable and initializes it with the value \"Hello World\".\n4. Prints the length of the string.",
            examples: [
              "Expected Output:\n\nElement at index 2: 30\nLength of the string: 11"
            ],
            constraints: [
              "Use the standard methods for array and string creation in your language.",
              "Array indices are 0-based."
            ]
          },
          {
            id: "for-loops",
            title: "For loops",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# For Loops\n\nFor loops are used to execute a block of code a specific number of times. They are perfect for iterating over a sequence, such as an array or a range of numbers.\n\n## Task\n\nGiven an integer `N`, write a program that prints the multiplication table for `N` from 1 to 10. Each line should be in the format `N x i = result`.",
            examples: [
              "Input: 5\nOutput:\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50"
            ],
            constraints: [
              "1 <= N <= 1000"
            ]
          },
          {
            id: "while-loops",
            title: "While loops",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# While Loops\n\nWhile loops repeatedly execute a target statement as long as a given condition is true. They are useful when the number of iterations is not known beforehand.\n\n## Task\n\nGiven a positive integer `N`, calculate the sum of its digits. You should use a while loop to repeatedly extract the last digit of the number and add it to a sum, then remove the last digit from the number, until the number becomes 0.",
            examples: [
              "Input: 123\nOutput: 6\nExplanation: 1 + 2 + 3 = 6",
              "Input: 4589\nOutput: 26\nExplanation: 4 + 5 + 8 + 9 = 26"
            ],
            constraints: [
              "1 <= N <= 10^9"
            ]
          },
          {
            id: "functions",
            title: "Functions (Pass by Reference and Value)",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Functions\n\nFunctions help break our program into smaller, modular chunks. Understanding how data is passed to functions is crucial.\n\n- **Pass by Value**: A copy of the argument is passed to the function. Changes inside the function do not affect the original variable.\n- **Pass by Reference**: A reference (or memory address) of the argument is passed. Changes inside the function will affect the original variable.\n\n## Task\n\nWrite a function that takes two integer variables and swaps their values. The swap must be visible in the calling function. This requires using pass-by-reference (using `&` in C++) or pointers (using `*` in C/C++).",
            examples: [
              "Input:\na = 5\nb = 10\n\nAfter calling swap(a, b):\n\nOutput:\na = 10\nb = 5"
            ],
            constraints: [
              "The input numbers will be within the standard integer range."
            ]
          },
          {
            id: "time-complexity",
            title: "Time Complexity",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Time Complexity Analysis\n\nTime complexity is a measure of how the runtime of an algorithm grows with the size of the input (`N`). It's commonly expressed using Big O notation.\n\n## Task\n\nFor each of the code snippets below, determine the time complexity in Big O notation and provide a one-line justification.\n\n**Snippet 1:**\n```cpp\nfor (int i = 0; i < N; i++) {\n  cout << i;\n}\n```\n\n**Snippet 2:**\n```cpp\nfor (int i = 0; i < N; i++) {\n  for (int j = 0; j < N; j++) {\n    cout << i << j;\n  }\n}\n```\n\n**Snippet 3:**\n```cpp\nfor (int i = 1; i < N; i = i * 2) {\n  cout << i;\n}\n```",
            examples: [
              "Snippet 1 Answer:\nTime Complexity: O(N)\nJustification: The loop runs N times.",
              "Snippet 2 Answer:\nTime Complexity: O(N^2)\nJustification: The outer loop runs N times, and for each iteration, the inner loop runs N times.",
              "Snippet 3 Answer:\nTime Complexity: O(log N)\nJustification: The loop variable doubles in each iteration, so it reaches N in logarithmic time."
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-1-2",
        title: "Build-up Logical Thinking",
        totalProblems: 1,
        completedProblems: 0,
        problems: [
          {
            id: "patterns",
            title: "Patterns",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Printing Patterns\n\nPrinting patterns is a great way to practice loops and build logical thinking. The key is to figure out the logic for each row and column.\n\n## Task\n\nGiven an integer `N`, write a program to print a right-angled triangle made of stars (`*`) with height and base equal to `N`.",
            examples: [
              "Input: 5\n\nOutput:\n*\n**\n***\n****\n*****"
            ],
            constraints: [
              "1 <= N <= 100"
            ]
          }
        ]
      },
      {
        id: "lec-1-3",
        title: "Learn STL/Java-Collections",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          {
            id: "cpp-stl",
            title: "C++ STL",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "# C++ Standard Template Library (STL)\n\nThe STL provides powerful, ready-to-use containers, algorithms, and iterators. Mastering it is essential for C++ competitive programming.\n\n## Task\n\nWrite a program that demonstrates the use of the following C++ STL components:\n1. **`std::vector`**: Create a vector, add 5 integers to it, and iterate through it to print its elements.\n2. **`std::map`**: Create a map to store the frequency of characters in the string \"hello world\". Print the frequency of each character.\n3. **`std::sort`**: Use the `std::sort` algorithm to sort the vector you created in ascending order and print the sorted vector.",
            examples: [
              "Expected Output:\n\nVector elements: [initial elements]\nCharacter frequencies: [map content]\nSorted vector: [sorted elements]"
            ],
            constraints: []
          },
          {
            id: "java-collections",
            title: "Java Collections",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "# Java Collections Framework\n\nThe Java Collections Framework provides an architecture to store and manipulate groups of objects. Mastering it is key for Java development.\n\n## Task\n\nWrite a program that demonstrates the use of the following Java Collections components:\n1. **`ArrayList`**: Create an ArrayList, add 5 integers to it, and iterate through it to print its elements.\n2. **`HashMap`**: Create a HashMap to store the frequency of characters in the string \"hello world\". Print the frequency of each character.\n3. **`Collections.sort`**: Use the `Collections.sort` method to sort the ArrayList you created and print the sorted list.",
            examples: [
              "Expected Output:\n\nArrayList elements: [initial elements]\nCharacter frequencies: [map content]\nSorted ArrayList: [sorted elements]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-1-4",
        title: "Know Basic Maths",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "count-digits",
            title: "Count Digits",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer `N`, your task is to count the number of digits in `N`.",
            examples: [
              "Input: N = 12345\nOutput: 5\nExplanation: The number 12345 has 5 digits.",
              "Input: N = 8394\nOutput: 4\nExplanation: The number 8394 has 4 digits."
            ],
            constraints: [
              "0 <= N <= 10^9"
            ]
          },
          {
            id: "reverse-number",
            title: "Reverse a Number",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a 32-bit signed integer, reverse digits of an integer. Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.",
            examples: [
              "Input: N = 123\nOutput: 321",
              "Input: N = -123\nOutput: -321",
              "Input: N = 120\nOutput: 21"
            ],
            constraints: [
              "-2^31 <= N <= 2^31 - 1"
            ]
          },
          {
            id: "check-palindrome",
            title: "Check Palindrome",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer `N`, determine whether it is a palindrome. An integer is a palindrome when it reads the same backward as forward. Negative numbers are not considered palindromes.",
            examples: [
              "Input: N = 121\nOutput: true",
              "Input: N = -121\nOutput: false",
              "Input: N = 10\nOutput: false\nExplanation: Reads 01 from right to left."
            ],
            constraints: [
              "Integer.MIN_VALUE <= N <= Integer.MAX_VALUE"
            ]
          },
          {
            id: "gcd-hcf",
            title: "GCD Or HCF",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "The Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of two numbers is the largest positive integer that divides both numbers without leaving a remainder. Your task is to find the GCD of two given integers, `A` and `B`, using the Euclidean algorithm.",
            examples: [
              "Input: A = 60, B = 48\nOutput: 12",
              "Input: A = 15, B = 20\nOutput: 5"
            ],
            constraints: [
              "1 <= A, B <= 10^9"
            ]
          },
          {
            id: "armstrong-numbers",
            title: "Armstrong Numbers",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153. Given an integer `N`, check if it is an Armstrong number.",
            examples: [
              "Input: N = 153\nOutput: true",
              "Input: N = 1634\nOutput: true",
              "Input: N = 123\nOutput: false"
            ],
            constraints: [
              "1 <= N <= 10^9"
            ]
          },
          {
            id: "print-divisors",
            title: "Print all Divisors",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a positive integer `N`, find and print all its divisors in ascending order. A divisor of `N` is an integer that divides `N` without leaving a remainder. A simple approach is to iterate from 1 to N, but can you do better? Try to find a solution with a time complexity of O(sqrt(N)).",
            examples: [
              "Input: N = 36\nOutput: 1 2 3 4 6 9 12 18 36",
              "Input: N = 12\nOutput: 1 2 3 4 6 12"
            ],
            constraints: [
              "1 <= N <= 10^7"
            ]
          },
          {
            id: "check-prime",
            title: "Check for Prime",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given an integer `N`, determine if it is a prime number. For an efficient solution, you only need to check for divisors up to the square root of N.",
            examples: [
              "Input: N = 11\nOutput: true",
              "Input: N = 1\nOutput: false",
              "Input: N = 10\nOutput: false"
            ],
            constraints: [
              "1 <= N <= 10^9"
            ]
          }
        ]
      },
      {
        id: "lec-1-5",
        title: "Learn Basic Recursion",
        totalProblems: 10,
        completedProblems: 0,
        problems: [
          {
            id: "understand-recursion",
            title: "Understand recursion by print something N times",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Recursion is a process where a function calls itself. To understand it, let's start with a simple task. Write a recursive function that prints a given string `S` exactly `N` times.",
            examples: [
              "Input: S = \"Hello\", N = 3\nOutput:\nHello\nHello\nHello"
            ],
            constraints: [
              "1 <= N <= 1000"
            ]
          },
          {
            id: "print-linearly",
            title: "Print name N times using recursion",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a recursive function that takes your name as a string and an integer `N` and prints your name `N` times.",
            examples: [
              "Input: name = \"John\", N = 5\nOutput:\nJohn\nJohn\nJohn\nJohn\nJohn"
            ],
            constraints: [
              "1 <= N <= 1000"
            ]
          },
          {
            id: "print-1-to-n",
            title: "Print 1 To N Without Loop",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a recursive function that prints all numbers from 1 to `N` without using any loops.",
            examples: [
              "Input: N = 5\nOutput: 1 2 3 4 5"
            ],
            constraints: [
              "1 <= N <= 1000"
            ]
          },
          {
            id: "print-n-to-1",
            title: "Print N to 1 without loop",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a recursive function that prints all numbers from `N` to 1 without using any loops.",
            examples: [
              "Input: N = 5\nOutput: 5 4 3 2 1"
            ],
            constraints: [
              "1 <= N <= 1000"
            ]
          },
          {
            id: "sum-first-n",
            title: "Sum of first N numbers",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a recursive function to calculate the sum of the first `N` natural numbers.",
            examples: [
              "Input: N = 5\nOutput: 15\nExplanation: 1 + 2 + 3 + 4 + 5 = 15",
              "Input: N = 3\nOutput: 6\nExplanation: 1 + 2 + 3 = 6"
            ],
            constraints: [
              "1 <= N <= 1000"
            ]
          },
          {
            id: "factorial-n",
            title: "Factorial of N numbers",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "The factorial of a non-negative integer `N`, denoted by `N!`, is the product of all positive integers less than or equal to `N`. Write a recursive function to find the factorial of `N`.",
            examples: [
              "Input: N = 5\nOutput: 120\nExplanation: 5 * 4 * 3 * 2 * 1 = 120",
              "Input: N = 0\nOutput: 1"
            ],
            constraints: [
              "0 <= N <= 12"
            ]
          },
          {
            id: "reverse-array",
            title: "Reverse an array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a recursive function to reverse a given array. You can use a helper function with two pointers, one at the start and one at the end, and swap elements recursively.",
            examples: [
              "Input: [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]"
            ],
            constraints: [
              "The array contains between 1 and 1000 elements."
            ]
          },
          {
            id: "string-palindrome",
            title: "Check if a string is Palindrome or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a recursive function that checks if a given string is a palindrome. A string is a palindrome if it reads the same forwards and backward.",
            examples: [
              "Input: \"racecar\"\nOutput: true",
              "Input: \"hello\"\nOutput: false"
            ],
            constraints: [
              "The string consists of lowercase English letters."
            ]
          },
          {
            id: "fibonacci",
            title: "Fibonacci Number",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. (F(0) = 0, F(1) = 1). Write a recursive function to find the N-th Fibonacci number. Note: A simple recursive solution has exponential time complexity. Can you think of how to optimize it using memoization (which is a step towards dynamic programming)?",
            examples: [
              "Input: N = 2\nOutput: 1\nExplanation: F(2) = F(1) + F(0) = 1 + 0 = 1.",
              "Input: N = 4\nOutput: 3\nExplanation: F(4) = F(3) + F(2) = 2 + 1 = 3."
            ],
            constraints: [
              "0 <= N <= 30"
            ]
          },
          {
            id: "valid-palindrome",
            title: "Valid Palindrome",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. An empty string is a valid palindrome.",
            examples: [
              "Input: s = \"A man, a plan, a canal: Panama\"\nOutput: true\nExplanation: \"amanaplanacanalpanama\" is a palindrome.",
              "Input: s = \"race a car\"\nOutput: false\nExplanation: \"raceacar\" is not a palindrome."
            ],
            constraints: [
              "1 <= s.length <= 2 * 10^5",
              "s consists only of printable ASCII characters."
            ]
          }
        ]
      },
      {
        id: "lec-1-6",
        title: "Learn Basic Hashing",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          {
            id: "hashing-theory",
            title: "Hashing Theory",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Hashing Introduction\n\nHashing is a technique used to map keys of any arbitrary size to a fixed-size table, called a hash table. A hash function is used to compute an index where an element is to be stored or retrieved. This allows for constant time O(1) average case for insertion, deletion, and search.\n\n## Task\n\nExplain the concept of a hash collision and describe two common methods for resolving collisions (e.g., Chaining and Open Addressing).",
            examples: [],
            constraints: []
          },
          {
            id: "counting-frequencies",
            title: "Counting frequencies of array elements",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers, your task is to count the frequency of each element in the array. Use a hash map (or dictionary in Python) to store the elements as keys and their frequencies as values.",
            examples: [
              "Input: [1, 2, 2, 3, 1, 4, 2]\nOutput:\n1 -> 2\n2 -> 3\n3 -> 1\n4 -> 1"
            ],
            constraints: [
              "The array can contain positive and negative integers."
            ]
          }
        ]
      }
    ]
  },

  // ▼▼▼ STEP 2 DATA ADDED ▼▼▼
  {
    id: "step-2",
    title: "Learn Important Sorting Techniques",
    description: "Master the fundamental sorting algorithms",
    totalProblems: 7,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-2-1",
        title: "Sorting-I",
        totalProblems: 3,
        completedProblems: 0,
        problems: [
          {
            id: "selection-sort",
            title: "Selection Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Selection Sort algorithm. In each iteration, find the minimum element from the unsorted part of the array and swap it with the element at the beginning of the unsorted part.",
            examples: [
              "Input: [64, 25, 12, 22, 11]\nOutput: [11, 12, 22, 25, 64]"
            ],
            constraints: [
              "Time Complexity: O(N^2)"
            ]
          },
          {
            id: "bubble-sort",
            title: "Bubble Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Bubble Sort algorithm. Repeatedly step through the list, compare adjacent elements, and swap them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
            examples: [
              "Input: [5, 1, 4, 2, 8]\nOutput: [1, 2, 4, 5, 8]"
            ],
            constraints: [
              "Time Complexity: O(N^2)"
            ]
          },
          {
            id: "insertion-sort",
            title: "Insertion Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Insertion Sort algorithm. Build the final sorted array one item at a time. It iterates through the input elements and inserts each element into its correct position in the sorted part of the array.",
            examples: [
              "Input: [12, 11, 13, 5, 6]\nOutput: [5, 6, 11, 12, 13]"
            ],
            constraints: [
              "Time Complexity: O(N^2)"
            ]
          }
        ]
      },
      {
        id: "lec-2-2",
        title: "Sorting-II",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          {
            id: "merge-sort",
            title: "Merge Sort",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Merge Sort algorithm. It's a divide-and-conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
            examples: [
              "Input: [38, 27, 43, 3, 9, 82, 10]\nOutput: [3, 9, 10, 27, 38, 43, 82]"
            ],
            constraints: [
              "Time Complexity: O(N log N)"
            ]
          },
          {
            id: "recursive-bubble-sort",
            title: "Recursive Bubble Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Bubble Sort algorithm using recursion. The base case is when the array size is 1. For other cases, perform one pass of bubble sort to place the largest element at the end, then recur for the remaining n-1 elements.",
            examples: [
              "Input: [5, 1, 4, 2, 8]\nOutput: [1, 2, 4, 5, 8]"
            ],
            constraints: [
              "Time Complexity: O(N^2)"
            ]
          },
          {
            id: "recursive-insertion-sort",
            title: "Recursive Insertion Sort",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Insertion Sort algorithm using recursion. The base case is when the array size is 1 or less. For other cases, recursively sort the first n-1 elements, and then insert the last element into its correct position in the sorted array.",
            examples: [
              "Input: [12, 11, 13, 5, 6]\nOutput: [5, 6, 11, 12, 13]"
            ],
            constraints: [
              "Time Complexity: O(N^2)"
            ]
          },
          {
            id: "quick-sort",
            title: "Quick Sort",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Quick Sort algorithm. It's a divide-and-conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot.",
            examples: [
              "Input: [10, 7, 8, 9, 1, 5]\nOutput: [1, 5, 7, 8, 9, 10]"
            ],
            constraints: [
              "Time Complexity: O(N log N) on average, O(N^2) in the worst case."
            ]
          }
        ]
      }
    ]
  },

  // ▼▼▼ STEP 3 DATA ADDED ▼▼▼
  {
    id: "step-3",
    title: "Solve Problems on Arrays [Easy → Medium → Hard]",
    description: "Master array manipulation and problem-solving techniques",
    totalProblems: 40,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-3-1",
        title: "Easy",
        totalProblems: 16,
        completedProblems: 0,
        problems: [
          {
            id: "largest-element",
            title: "Largest Element in Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers, find the largest element.",
            examples: [
              "Input: [3, 2, 1, 5, 2]\nOutput: 5"
            ],
            constraints: [
              "Array length is at least 1."
            ]
          },
          {
            id: "second-largest",
            title: "Second Largest Element in Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers, find the second largest distinct element. If it does not exist, return -1.",
            examples: [
              "Input: [12, 35, 1, 10, 34, 1]\nOutput: 34",
              "Input: [10, 10, 10]\nOutput: -1"
            ],
            constraints: [
              "Array length is at least 1."
            ]
          },
          {
            id: "check-sorted",
            title: "Check if array is sorted",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers, determine if it is sorted in non-decreasing order.",
            examples: [
              "Input: [1, 2, 2, 3, 4]\nOutput: true",
              "Input: [1, 3, 2]\nOutput: false"
            ],
            constraints: [
              "Array contains at least one element."
            ]
          },
          {
            id: "remove-duplicates",
            title: "Remove duplicates from Sorted array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array `nums`, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the number of unique elements `k`.",
            examples: [
              "Input: nums = [1,1,2]\nOutput: 2, nums = [1,2,_]",
              "Input: nums = [0,0,1,1,1,2,2,3,3,4]\nOutput: 5, nums = [0,1,2,3,4,_,_,_,_,_]"
            ],
            constraints: [
              "Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory."
            ]
          },
          {
            id: "left-rotate-one",
            title: "Left Rotate an array by one place",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `N` integers, left-rotate the array by one position. This means the first element moves to the last position and all other elements shift one position to the left.",
            examples: [
              "Input: [1, 2, 3, 4, 5]\nOutput: [2, 3, 4, 5, 1]"
            ],
            constraints: [
              "1 <= N <= 10^5"
            ]
          },
          {
            id: "left-rotate-d",
            title: "Left rotate an array by D places",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `N` integers, left-rotate the array by `D` places. Can you solve it without using extra space?",
            examples: [
              "Input: arr = [1, 2, 3, 4, 5, 6, 7], d = 2\nOutput: [3, 4, 5, 6, 7, 1, 2]"
            ],
            constraints: [
              "1 <= D <= N <= 10^5"
            ]
          },
          {
            id: "move-zeros",
            title: "Move Zeros to end",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
            examples: [
              "Input: nums = [0,1,0,3,12]\nOutput: [1,3,12,0,0]"
            ],
            constraints: [
              "You must do this in-place without making a copy of the array."
            ]
          },
          {
            id: "linear-search",
            title: "Linear Search",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `n` elements and a target element `t`, find the index of `t` in the array. Return -1 if the target element is not present.",
            examples: [
              "Input: arr = [2, 4, 0, 1, 9], t = 1\nOutput: 3",
              "Input: arr = [2, 4, 0, 1, 9], t = 5\nOutput: -1"
            ],
            constraints: [
              "1 <= n <= 10^5"
            ]
          },
          {
            id: "union-arrays",
            title: "Union of Two Sorted Arrays",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two sorted arrays, `arr1` and `arr2` of size `n` and `m` respectively, find their union. The union of two arrays should return a list of all the distinct elements from both arrays, sorted in ascending order.",
            examples: [
              "Input: arr1 = [1, 2, 3, 4, 5], arr2 = [1, 2, 3, 6, 7]\nOutput: [1, 2, 3, 4, 5, 6, 7]"
            ],
            constraints: [
              "An efficient solution should have a time complexity of O(n+m)."
            ]
          },
          {
            id: "missing-number",
            title: "Find the missing number in an array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.",
            examples: [
              "Input: nums = [3,0,1]\nOutput: 2",
              "Input: nums = [9,6,4,2,3,5,7,0,1]\nOutput: 8"
            ],
            constraints: [
              "n == nums.length",
              "Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?"
            ]
          },
          {
            id: "max-consecutive-ones",
            title: "Max Consecutive Ones",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary array `nums`, return the maximum number of consecutive 1s in the array.",
            examples: [
              "Input: nums = [1,1,0,1,1,1]\nOutput: 3",
              "Input: nums = [1,0,1,1,0,1]\nOutput: 2"
            ],
            constraints: [
              "The input array will only contain 0 and 1."
            ]
          },
          {
            id: "single-number",
            title: "Find the number that appears once",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. Hint: Think about bitwise operators.",
            examples: [
              "Input: nums = [4,1,2,1,2]\nOutput: 4"
            ],
            constraints: [
              "You must implement a solution with a linear runtime complexity and use only constant extra space."
            ]
          },
          {
            id: "longest-subarray-sum-k-positives",
            title: "Longest subarray with given sum K (Positives)",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of positive integers `nums` and an integer `k`, find the length of the longest subarray that sums to `k`.",
            examples: [
              "Input: nums = [10, 5, 2, 7, 1, 9], k = 15\nOutput: 4\nExplanation: The subarray [5, 2, 7, 1] sums to 15.",
              "Input: nums = [1, 2, 3, 1, 1, 1, 1], k = 3\nOutput: 3"
            ],
            constraints: [
              "All elements of the array are positive."
            ]
          },
          {
            id: "longest-subarray-sum-k-negatives",
            title: "Longest subarray with sum K (Positives + Negatives)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `nums` (it can contain positive, negative, and zero values) and an integer `k`, find the length of the longest subarray that sums to `k`. If there is no such subarray, return 0.",
            examples: [
              "Input: nums = [1, -1, 5, -2, 3], k = 3\nOutput: 4\nExplanation: The subarray [1, -1, 5, -2] sums to 3.",
              "Input: nums = [ -1, 1, 1 ], k = 1\nOutput: 2"
            ],
            constraints: [
              "The two-pointer/sliding window approach will not work here. A solution using a hash map to store prefix sums is recommended."
            ]
          },
          {
            id: "two-sum",
            title: "Two Sum",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
            examples: [
              "Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]",
              "Input: nums = [3,2,4], target = 6\nOutput: [1,2]"
            ],
            constraints: [
              "A solution with O(N) time complexity is expected."
            ]
          },
          {
            id: "sort-array-012",
            title: "Sort an array of 0's 1's and 2's",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. This is also known as the Dutch National Flag problem.",
            examples: [
              "Input: nums = [2,0,2,1,1,0]\nOutput: [0,0,1,1,2,2]"
            ],
            constraints: [
              "You are not supposed to use the library's sort function for this problem.",
              "A single-pass algorithm using only constant space is expected."
            ]
          }
        ]
      },
      {
        id: "lec-3-2",
        title: "Medium",
        totalProblems: 15,
        completedProblems: 0,
        problems: [
          {
            id: "majority-element",
            title: "Majority Element",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `nums` of size `n`, return the majority element. The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.",
            examples: [
              "Input: nums = [3,2,3]\nOutput: 3",
              "Input: nums = [2,2,1,1,1,2,2]\nOutput: 2"
            ],
            constraints: [
              "Try to solve this in linear time and O(1) space using Moore's Voting Algorithm."
            ]
          },
          {
            id: "kadane-algorithm",
            title: "Kadane's Algorithm",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
            examples: [
              "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: 6\nExplanation: [4,-1,2,1] has the largest sum = 6."
            ],
            constraints: [
              "This can be solved in O(N) time."
            ]
          },
          {
            id: "print-subarray-max-sum",
            title: "Print subarray with maximum sum",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, find the contiguous subarray with the largest sum and return the subarray itself. If there are multiple subarrays with the same maximum sum, return any of them.",
            examples: [
              "Input: nums = [-2,1,-3,4,-1,2,1,-5,4]\nOutput: [4,-1,2,1]"
            ],
            constraints: [
              "Extend Kadane's algorithm to keep track of the start and end indices of the max sum subarray."
            ]
          },
          {
            id: "stock-buy-sell",
            title: "Stock Buy Sell",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i-th` day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
            examples: [
              "Input: prices = [7,1,5,3,6,4]\nOutput: 5\nExplanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
              "Input: prices = [7,6,4,3,1]\nOutput: 0"
            ],
            constraints: []
          },
          {
            id: "rearrange-array-sign",
            title: "Rearrange Array Elements by Sign",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a 0-indexed integer array `nums` of even length consisting of an equal number of positive and negative integers. You should rearrange the elements of `nums` such that the modified array follows the given conditions: 1. Every consecutive pair of integers have opposite signs. 2. For all integers with the same sign, the relative order is preserved. 3. The rearranged array begins with a positive integer.",
            examples: [
              "Input: nums = [3,1,-2,-5,2,-4]\nOutput: [3,-2,1,-5,2,-4]"
            ],
            constraints: []
          },
          {
            id: "next-permutation",
            title: "Next Permutation",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement `next permutation`, which rearranges numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order). The replacement must be in-place and use only constant extra memory.",
            examples: [
              "Input: nums = [1,2,3]\nOutput: [1,3,2]",
              "Input: nums = [3,2,1]\nOutput: [1,2,3]"
            ],
            constraints: []
          },
          {
            id: "leaders-array",
            title: "Leaders in an Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `A` of size `n`, find all the leaders in the array. An element is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.",
            examples: [
              "Input: A = [16,17,4,3,5,2]\nOutput: [17, 5, 2]"
            ],
            constraints: [
              "An efficient solution can be achieved by traversing the array from right to left."
            ]
          },
          {
            id: "longest-consecutive",
            title: "Longest Consecutive Sequence",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
            examples: [
              "Input: nums = [100,4,200,1,3,2]\nOutput: 4\nExplanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4."
            ],
            constraints: []
          },
          {
            id: "set-matrix-zeros",
            title: "Set Matrix Zeroes",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an `m x n` integer matrix, if an element is 0, set its entire row and column to 0's. You must do it in-place.",
            examples: [
              "Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]\nOutput: [[1,0,1],[0,0,0],[1,0,1]]"
            ],
            constraints: [
              "A straightforward solution using O(mn) space is probably easy. A simple improvement uses O(m + n) space. Could you devise a constant space solution?"
            ]
          },
          {
            id: "rotate-matrix",
            title: "Rotate Matrix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an `n x n` 2D matrix representing an image. Rotate the image by 90 degrees (clockwise). You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.",
            examples: [
              "Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [[7,4,1],[8,5,2],[9,6,3]]"
            ],
            constraints: []
          },
          {
            id: "spiral-matrix",
            title: "Spiral Traversal of Matrix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an `m x n` matrix, return all elements of the matrix in spiral order.",
            examples: [
              "Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]\nOutput: [1,2,3,6,9,8,7,4,5]"
            ],
            constraints: []
          },
          {
            id: "count-subarrays-xor-k",
            title: "Count Subarrays with given XOR",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `A` and an integer `B`, find the total number of subarrays having bitwise XOR of all elements equal to `B`.",
            examples: [
              "Input: A = [4, 2, 2, 6, 4], B = 6\nOutput: 4\nExplanation: The subarrays are [4, 2], [4, 2, 2, 6, 4], [2, 2, 6], [6]"
            ],
            constraints: [
              "A solution using prefix XOR and a hash map is efficient."
            ]
          },
          {
            id: "merge-overlapping-intervals",
            title: "Merge Overlapping Sub-intervals",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
            examples: [
              "Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]"
            ],
            constraints: [
              "Start by sorting the intervals based on their start times."
            ]
          },
          {
            id: "merge-sorted-arrays",
            title: "Merge two Sorted Arrays without extra space",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively. Merge `nums1` and `nums2` into a single array sorted in non-decreasing order. The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`.",
            examples: [
              "Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3\nOutput: [1,2,2,3,5,6]"
            ],
            constraints: [
              "The number of elements initialized in nums1 is m and in nums2 is n.",
              "nums1 has a length of m + n."
            ]
          },
          {
            id: "find-missing-repeating",
            title: "Find the repeating and missing numbers",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a read-only array of `n` integers from 1 to `n`. Each integer appears exactly once except `A` which appears twice and `B` which is missing. Return `A` and `B`.",
            examples: [
              "Input: [3, 1, 2, 5, 3]\nOutput: [3, 4]\nExplanation: 3 is repeating, 4 is missing."
            ],
            constraints: [
              "Implement a solution with linear runtime complexity and without using extra memory."
            ]
          }
        ]
      },
      {
        id: "lec-3-3",
        title: "Hard",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          {
            id: "pascal-triangle",
            title: "Pascal's Triangle",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer `numRows`, generate the first `numRows` of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.",
            examples: [
              "Input: numRows = 5\nOutput: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"
            ],
            constraints: []
          },
          {
            id: "majority-element-n3",
            title: "Majority Elements(>N/3 times)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array of size `n`, find all elements that appear more than `⌊ n/3 ⌋` times.",
            examples: [
              "Input: nums = [3,2,3]\nOutput: [3]",
              "Input: nums = [1,1,1,3,3,2,2,2]\nOutput: [1,2]"
            ],
            constraints: [
              "The algorithm should run in linear time and in O(1) space. Hint: Use an extension of Moore's Voting Algorithm."
            ]
          },
          {
            id: "three-sum",
            title: "3 Sum",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. Notice that the solution set must not contain duplicate triplets.",
            examples: [
              "Input: nums = [-1,0,1,2,-1,-4]\nOutput: [[-1,-1,2],[-1,0,1]]"
            ],
            constraints: []
          },
          {
            id: "four-sum",
            title: "4 Sum",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that `a, b, c, d` are distinct indices and `nums[a] + nums[b] + nums[c] + nums[d] == target`.",
            examples: [
              "Input: nums = [1,0,-1,0,-2,2], target = 0\nOutput: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
            ],
            constraints: []
          },
          {
            id: "largest-subarray-zero-sum",
            title: "Largest Subarray with 0 Sum",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers, find the length of the longest sub-array with a sum of 0.",
            examples: [
              "Input: [15,-2,2,-8,1,7,10,23]\nOutput: 5\nExplanation: The longest subarray with sum 0 is [-2, 2, -8, 1, 7]."
            ],
            constraints: [
              "This can be solved efficiently using a hash map to store prefix sums."
            ]
          },
          {
            id: "count-inversions",
            title: "Count inversions",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "An inversion of an array is a pair of indices `(i, j)` such that `i < j` and `A[i] > A[j]`. Given an array `A`, count the total number of inversions.",
            examples: [
              "Input: [8, 4, 2, 1]\nOutput: 6\nExplanation: The inversions are (8,4), (8,2), (8,1), (4,2), (4,1), (2,1)."
            ],
            constraints: [
              "This problem can be solved efficiently by modifying the Merge Sort algorithm."
            ]
          },
          {
            id: "count-reverse-pairs",
            title: "Count Reverse Pairs",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, return the number of reverse pairs in the array. A reverse pair is a pair `(i, j)` where `0 <= i < j < nums.length` and `nums[i] > 2 * nums[j]`.",
            examples: [
              "Input: nums = [1,3,2,3,1]\nOutput: 2",
              "Input: nums = [2,4,3,5,1]\nOutput: 3"
            ],
            constraints: [
              "This can be solved efficiently by modifying the Merge Sort algorithm."
            ]
          },
          {
            id: "maximum-product-subarray",
            title: "Maximum Product Subarray",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
            examples: [
              "Input: nums = [2,3,-2,4]\nOutput: 6\nExplanation: [2,3] has the largest product 6.",
              "Input: nums = [-2,0,-1]\nOutput: 0"
            ],
            constraints: [
              "The answer is guaranteed to fit in a 32-bit integer."
            ]
          },
          {
            id: "missing-repeating-optimal",
            title: "Missing And Repeating Numbers",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a read-only array of n integers from 1 to n. Each integer appears exactly once except A which appears twice and B which is missing. Return A and B. Your solution should have a linear runtime complexity and use constant extra space.",
            examples: [
              "Input: [4, 3, 6, 2, 1, 1]\nOutput: [1, 5]\nExplanation: 1 is repeating, 5 is missing."
            ],
            constraints: [
              "Solutions involving mathematical equations (sum and sum of squares) or bit manipulation (XOR) can achieve the desired complexity."
            ]
          }
        ]
      }
    ]
  },

  // ▼▼▼ STEP 4 DATA ADDED ▼▼▼
  {
    id: "step-4",
    title: "Binary Search [1D, 2D Arrays, Search Space]",
    description: "Master binary search techniques and applications",
    totalProblems: 32,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-4-1",
        title: "Learning Binary Search on 1D Arrays",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          {
            id: "binary-search-intro",
            title: "Binary Search to find X in sorted array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array of `n` elements and a target value `x`, find the index of `x` in the array. If `x` is not present, return -1. Binary search is an efficient algorithm that works on sorted arrays with a time complexity of O(log n).",
            examples: [
              "Input: nums = [-1,0,3,5,9,12], target = 9\nOutput: 4",
              "Input: nums = [-1,0,3,5,9,12], target = 2\nOutput: -1"
            ],
            constraints: [
              "All elements in nums are unique."
            ]
          },
          {
            id: "implement-lower-bound",
            title: "Implement Lower Bound",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array `arr` of `n` integers and an integer `x`, find the lower bound of `x`. The lower bound is the index of the first element in the array that is greater than or equal to `x`. If all elements are smaller than `x`, the lower bound is `n`.",
            examples: [
              "Input: arr = [1,2,2,3], x = 2\nOutput: 1",
              "Input: arr = [3,5,8,15,19], x = 9\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "implement-upper-bound",
            title: "Implement Upper Bound",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array `arr` of `n` integers and an integer `x`, find the upper bound of `x`. The upper bound is the index of the first element in the array that is strictly greater than `x`. If no such element is found, the upper bound is `n`.",
            examples: [
              "Input: arr = [1,2,2,3], x = 2\nOutput: 3",
              "Input: arr = [3,5,8,15,19], x = 9\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "search-insert-position",
            title: "Search Insert Position",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. This is equivalent to finding the lower bound of the target.",
            examples: [
              "Input: nums = [1,3,5,6], target = 5\nOutput: 2",
              "Input: nums = [1,3,5,6], target = 2\nOutput: 1"
            ],
            constraints: [
              "You must write an algorithm with O(log n) runtime complexity."
            ]
          },
          {
            id: "floor-ceil-sorted-array",
            title: "Floor and Ceil in Sorted Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array `arr` and a value `x`, find the floor and ceiling of `x` in the array. The floor of `x` is the largest element in the array which is smaller than or equal to `x`. The ceiling of `x` is the smallest element in the array which is greater than or equal to `x`.",
            examples: [
              "Input: arr = [1, 2, 8, 10, 10, 12, 19], x = 5\nOutput: Floor = 2, Ceil = 8"
            ],
            constraints: [
              "If floor or ceil doesn't exist, return -1."
            ]
          },
          {
            id: "first-last-occurrence",
            title: "Find First and Last Position of Element in Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value. If `target` is not found in the array, return `[-1, -1]`. You must write an algorithm with O(log n) runtime complexity.",
            examples: [
              "Input: nums = [5,7,7,8,8,10], target = 8\nOutput: [3,4]",
              "Input: nums = [5,7,7,8,8,10], target = 6\nOutput: [-1,-1]"
            ],
            constraints: []
          },
          {
            id: "count-occurrences",
            title: "Count Occurrences in Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a sorted array `arr` and a number `x`, write a function that counts the occurrences of `x` in `arr`. The solution should have a time complexity of O(Log n).",
            examples: [
              "Input: arr = [1, 1, 2, 2, 2, 2, 3], x = 2\nOutput: 4"
            ],
            constraints: [
              "Hint: Use binary search to find the first and last occurrence, then calculate the count."
            ]
          },
          {
            id: "search-rotated-array",
            title: "Search in Rotated Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There is an integer array `nums` sorted in ascending order (with distinct values), which is possibly rotated at an unknown pivot. For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given the array `nums` after the rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not. You must write an algorithm with O(log n) runtime complexity.",
            examples: [
              "Input: nums = [4,5,6,7,0,1,2], target = 0\nOutput: 4",
              "Input: nums = [4,5,6,7,0,1,2], target = 3\nOutput: -1"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-4-2",
        title: "Binary Search on Answers",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          {
            id: "find-sqrt",
            title: "Finding Sqrt of a number using Binary Search",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a non-negative integer `x`, compute and return the square root of `x`. Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned. You are not allowed to use any built-in exponent function or operator.",
            examples: [
              "Input: x = 4\nOutput: 2",
              "Input: x = 8\nOutput: 2\nExplanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned."
            ],
            constraints: []
          },
          {
            id: "find-nth-root",
            title: "Find the Nth root of a number using binary search",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given two positive integers `n` and `m`. You have to find the `n-th` root of `m`. The `n-th` root of `m` is a number `x` such that `x^n = m`. If the `n-th` root is not an integer, return -1.",
            examples: [
              "Input: n = 3, m = 27\nOutput: 3",
              "Input: n = 4, m = 69\nOutput: -1"
            ],
            constraints: []
          },
          {
            id: "koko-eating-bananas",
            title: "Koko Eating Bananas",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Koko loves to eat bananas. There are `n` piles of bananas, the `i-th` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours. Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still wants to finish all the bananas before the guards return. Return the minimum integer `k` such that she can eat all the bananas within `h` hours.",
            examples: [
              "Input: piles = [3,6,7,11], h = 8\nOutput: 4"
            ],
            constraints: []
          },
          {
            id: "minimum-days-bouquets",
            title: "Minimum days to make M bouquets",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an integer array `bloomDay`, an integer `m` and an integer `k`. You want to make `m` bouquets. To make a bouquet, you need to use `k` adjacent flowers from the garden. The garden consists of `n` flowers, the `i-th` flower will bloom in the `bloomDay[i]` and then can be used in a bouquet. Return the minimum number of days you need to wait to be able to make `m` bouquets from the garden. If it is impossible to make `m` bouquets, return -1.",
            examples: [
              "Input: bloomDay = [1,10,3,10,2], m = 3, k = 1\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "smallest-divisor",
            title: "Find the Smallest Divisor",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `nums` and an integer `threshold`, we will choose a positive integer `divisor`, divide all the array elements by it and sum the division results. Find the smallest `divisor` such that the result mentioned above is less than or equal to `threshold`. Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: `ceil(7/3) = 3`).",
            examples: [
              "Input: nums = [1,2,5,9], threshold = 6\nOutput: 5"
            ],
            constraints: []
          },
          {
            id: "capacity-ship-packages",
            title: "Capacity to Ship Packages within D Days",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "A conveyor belt has packages that must be shipped from one port to another within `D` days. The `i-th` package has a weight of `weights[i]`. Each day, we load the ship with packages on the conveyor belt (in the order given by `weights`). We may not load more weight than the maximum weight capacity of the ship. Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within `D` days.",
            examples: [
              "Input: weights = [1,2,3,4,5,6,7,8,9,10], D = 5\nOutput: 15"
            ],
            constraints: []
          },
          {
            id: "kth-missing-positive",
            title: "K-th missing positive number",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `arr` of positive integers sorted in a strictly increasing order, and an integer `k`. Find the `k-th` positive integer that is missing from this array.",
            examples: [
              "Input: arr = [2,3,4,7,11], k = 5\nOutput: 9\nExplanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9."
            ],
            constraints: []
          },
          {
            id: "aggressive-cows",
            title: "Aggressive Cows",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array `stalls` of length `n` which represents the locations of stalls, and an integer `k` which is the number of cows. You have to assign `k` cows to `n` stalls such that the minimum distance between any two of them is the maximum possible. Return this largest minimum distance.",
            examples: [
              "Input: stalls = [1, 2, 8, 4, 9], k = 3\nOutput: 3\nExplanation: Place cows at 1, 4, and 8 (or 9). Minimum distance is 3."
            ],
            constraints: []
          },
          {
            id: "book-allocation",
            title: "Book Allocation Problem",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `pages` of `n` integers where `pages[i]` is the number of pages in the `i-th` book. There are `m` students, and the task is to allocate all the books to their students. Allocate books in such a way that: 1. Each student gets at least one book. 2. Each book should be allocated to a student. 3. Book allocation should be in a contiguous manner. You have to allocate the books to `m` students such that the maximum number of pages assigned to a student is minimum.",
            examples: [
              "Input: pages = [12, 34, 67, 90], m = 2\nOutput: 113"
            ],
            constraints: []
          },
          {
            id: "painters-partition",
            title: "Painter's partition",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given `k` painters to paint `n` boards of varying lengths. The lengths of `n` boards are given in an array. All painters begin painting at the same time, each painter can paint only contiguous sections of boards. Calculate the minimum time to complete the job, if the time taken to paint 1 unit of board is 1 unit of time.",
            examples: [
              "Input: boards = [10, 20, 30, 40], k = 2\nOutput: 60"
            ],
            constraints: [
              "This is a similar problem to Book Allocation."
            ]
          },
          {
            id: "minimize-max-distance",
            title: "Minimize Max Distance to Gas Station",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a sorted array `stations` that represents the positions of gas stations on a number line. You are given an integer `k`. You should add `k` new gas stations. You can add the gas stations anywhere on the number line, even at the same position as existing gas stations. Your task is to minimize the maximum distance between adjacent gas stations after adding `k` new stations. Return the minimized maximum distance.",
            examples: [
              "Input: stations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 9\nOutput: 0.50000"
            ],
            constraints: []
          },
          {
            id: "median-two-sorted-arrays",
            title: "Median of 2 sorted arrays",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
            examples: [
              "Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000",
              "Input: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-4-3",
        title: "Binary Search on 2D Arrays",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          {
            id: "find-peak-element",
            title: "Find a Peak Element",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array `nums`, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.",
            examples: [
              "Input: nums = [1,2,3,1]\nOutput: 2",
              "Input: nums = [1,2,1,3,5,6,4]\nOutput: 5"
            ],
            constraints: [
              "You must write an algorithm that runs in O(log n) time."
            ]
          },
          {
            id: "search-2d-matrix",
            title: "Search in a 2D Matrix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.",
            examples: [
              "Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "search-2d-matrix-ii",
            title: "Search in a row and column wise sorted matrix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Write an efficient algorithm that searches for a value `target` in an `m x n` integer matrix. This matrix has the following properties: Integers in each row are sorted in ascending from left to right. Integers in each column are sorted in ascending from top to bottom.",
            examples: [
              "Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "find-peak-element-2d",
            title: "Find a Peak Element II",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors (left, right, top, and bottom). Given a 0-indexed `m x n` matrix `mat`, find a peak element and return its coordinates as a 2-element array `[row, col]`.",
            examples: [
              "Input: mat = [[10,20,15],[21,30,14],[7,16,32]]\nOutput: [1,1] or [2,2]"
            ],
            constraints: [
              "You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time."
            ]
          },
          {
            id: "matrix-median",
            title: "Matrix Median",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a row-wise sorted matrix `A` of size `N*M`, find the median of the matrix. The overall number of elements `N*M` is odd.",
            examples: [
              "Input: A = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]\nOutput: 5\nExplanation: A = [1, 2, 3, 3, 5, 6, 6, 9, 9]. Median is 5."
            ],
            constraints: [
              "No extra memory is allowed."
            ]
          },
          {
            id: "row-max-ones",
            title: "Row with max 1s",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a boolean 2D array of `n` x `m` dimensions where each row is sorted. Find the 0-based index of the first row that has the maximum number of 1s.",
            examples: [
              "Input: [[0, 1, 1, 1], [0, 0, 1, 1], [1, 1, 1, 1], [0, 0, 0, 0]]\nOutput: 2"
            ],
            constraints: []
          },
          {
            id: "search-rotated-array-ii",
            title: "Search in Rotated Sorted Array II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There is an integer array `nums` sorted in non-decreasing order (not necessarily with distinct values). This array is rotated at an unknown pivot. Given the array `nums` after the rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` otherwise.",
            examples: [
              "Input: nums = [2,5,6,0,0,1,2], target = 0\nOutput: true",
              "Input: nums = [2,5,6,0,0,1,2], target = 3\nOutput: false"
            ],
            constraints: []
          },
          {
            id: "find-minimum-rotated",
            title: "Find Minimum in Rotated Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times. Given the sorted rotated array `nums` of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
            examples: [
              "Input: nums = [3,4,5,1,2]\nOutput: 1",
              "Input: nums = [4,5,6,7,0,1,2]\nOutput: 0"
            ],
            constraints: []
          },
          {
            id: "single-element-sorted",
            title: "Single Element in a Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Return the single element that appears only once. Your solution must run in O(log n) time and O(1) space.",
            examples: [
              "Input: nums = [1,1,2,3,3,4,4,8,8]\nOutput: 2"
            ],
            constraints: []
          },
          {
            id: "split-array-largest-sum",
            title: "Split Array Largest Sum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `nums` which consists of non-negative integers and an integer `m`, you can split the array into `m` non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these `m` subarrays.",
            examples: [
              "Input: nums = [7,2,5,10,8], m = 2\nOutput: 18"
            ],
            constraints: []
          },
          {
            id: "kth-element-two-arrays",
            title: "K-th element of two sorted arrays",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two sorted arrays `arr1` and `arr2` of size `m` and `n` respectively and an integer `k`. Find the k-th element of the final sorted array that would be formed by merging `arr1` and `arr2`.",
            examples: [
              "Input: arr1 = [2, 3, 6, 7, 9], arr2 = [1, 4, 8, 10], k = 5\nOutput: 6"
            ],
            constraints: []
          },
          {
            id: "median-two-sorted-arrays-bisect",
            title: "Median of Two Sorted Arrays",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
            examples: [
              "Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000",
              "Input: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000"
            ],
            constraints: []
          }
        ]
      }
    ]
  },

  // ▼▼▼ STEP 5 DATA ADDED ▼▼▼
  {
    id: "step-5",
    title: "Strings [Basic and Medium]",
    description: "Master string manipulation and pattern matching",
    totalProblems: 15,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-5-1",
        title: "Basic and Easy String Problems",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          {
            id: "remove-outermost-parentheses",
            title: "Remove outermost Parentheses",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A valid parentheses string is either empty `\"\"`, `\"(\" + A + \")\"`, or `A + B`, where `A` and `B` are valid parentheses strings. A primitive valid parentheses string is a nonempty valid parentheses string that cannot be split into `A + B`. Given a valid parentheses string `s`, consider its primitive decomposition. Remove the outermost parentheses of every primitive string in the decomposition of `s`.",
            examples: [
              "Input: s = \"(()())(())\"\nOutput: \"()()()\"",
              "Input: s = \"()()\"\nOutput: \"\""
            ],
            constraints: []
          },
          {
            id: "reverse-words",
            title: "Reverse words in a string",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an input string `s`, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space. Note that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.",
            examples: [
              "Input: s = \"the sky is blue\"\nOutput: \"blue is sky the\"",
              "Input: s = \"  hello world  \"\nOutput: \"world hello\""
            ],
            constraints: []
          },
          {
            id: "largest-odd-number",
            title: "Largest odd number in a string",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a string `num`, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of `num`, or an empty string `\"\"` if no odd integer exists.",
            examples: [
              "Input: num = \"52\"\nOutput: \"5\"",
              "Input: num = \"4206\"\nOutput: \"\"",
              "Input: num = \"35427\"\nOutput: \"35427\""
            ],
            constraints: []
          },
          {
            id: "longest-common-prefix",
            title: "Longest Common Prefix",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `\"\"`.",
            examples: [
              "Input: strs = [\"flower\",\"flow\",\"flight\"]\nOutput: \"fl\"",
              "Input: strs = [\"dog\",\"racecar\",\"car\"]\nOutput: \"\""
            ],
            constraints: []
          },
          {
            id: "isomorphic-strings",
            title: "Isomorphic Strings",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two strings `s` and `t`, determine if they are isomorphic. Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`. All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.",
            examples: [
              "Input: s = \"egg\", t = \"add\"\nOutput: true",
              "Input: s = \"foo\", t = \"bar\"\nOutput: false"
            ],
            constraints: []
          },
          {
            id: "check-anagram",
            title: "Check whether one string is a rotation of another",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two strings, `s1` and `s2`, write a function to check if `s2` is a rotation of `s1`. For example, `\"waterbottle\"` is a rotation of `\"erbottlewat\"`.",
            examples: [
              "Input: s1 = \"abcde\", s2 = \"cdeab\"\nOutput: true",
              "Input: s1 = \"abcde\", s2 = \"abced\"\nOutput: false"
            ],
            constraints: [
              "Hint: Check if `s2` is a substring of `s1 + s1`."
            ]
          },
          {
            id: "valid-anagram",
            title: "Valid Anagram",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
            examples: [
              "Input: s = \"anagram\", t = \"nagaram\"\nOutput: true",
              "Input: s = \"rat\", t = \"car\"\nOutput: false"
            ],
            constraints: []
          },
          {
            id: "sort-characters-frequency",
            title: "Sort Characters by Frequency",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s`, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string. Return the sorted string. If there are multiple answers, return any of them.",
            examples: [
              "Input: s = \"tree\"\nOutput: \"eert\" or \"eetr\"",
              "Input: s = \"Aabb\"\nOutput: \"bbAa\" or \"bbaA\""
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-5-2",
        title: "Medium String Problems",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "maximum-nesting-depth",
            title: "Maximum Nesting Depth of Parentheses",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A string is a valid parentheses string (VPS) if it meets one of the following conditions... Given a VPS `s`, return the nesting depth of `s`. The nesting depth is the maximum number of nested parentheses.",
            examples: [
              "Input: s = \"(1+(2*3)+((8)/4))+1\"\nOutput: 3",
              "Input: s = \"(1)+((2))+(((3)))\"\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "roman-to-integer",
            title: "Roman to Integer",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
            examples: [
              "Input: s = \"III\"\nOutput: 3",
              "Input: s = \"LVIII\"\nOutput: 58",
              "Input: s = \"MCMXCIV\"\nOutput: 1994"
            ],
            constraints: []
          },
          {
            id: "implement-atoi",
            title: "String to Integer (atoi)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++'s `atoi` function). The algorithm is as follows: 1. Read in and ignore any leading whitespace. 2. Check if the next character is '-' or '+'. 3. Read in next the characters until the next non-digit character or the end of the input is reached. 4. Convert these digits into an integer. If no digits were read, then the integer is 0. 5. If the integer is out of the 32-bit signed integer range, then clamp the integer so that it remains in the range.",
            examples: [
              "Input: s = \"42\"\nOutput: 42",
              "Input: s = \"  -42\"\nOutput: -42",
              "Input: s = \"4193 with words\"\nOutput: 4193"
            ],
            constraints: []
          },
          {
            id: "count-number-substrings",
            title: "Number of Substrings With Only 1s",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary string `s`, return the number of substrings with all characters 1's. Since the answer may be too large, return it modulo 10^9 + 7.",
            examples: [
              "Input: s = \"0110111\"\nOutput: 9\nExplanation: There are 9 substrings in total with only 1's characters. \"1\" -> 5 times. \"11\" -> 3 times. \"111\" -> 1 time."
            ],
            constraints: []
          },
          {
            id: "longest-palindromic-substring",
            title: "Longest Palindromic Substring",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s`, return the longest palindromic substring in `s`.",
            examples: [
              "Input: s = \"babad\"\nOutput: \"bab\" (or \"aba\")",
              "Input: s = \"cbbd\"\nOutput: \"bb\""
            ],
            constraints: []
          },
          {
            id: "sum-beauty-substrings",
            title: "Sum of Beauty of All Substrings",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "The beauty of a string is the difference in frequencies between the most frequent and least frequent characters. For example, the beauty of `\"abaac\"` is `3 - 1 = 2`. Given a string `s`, return the sum of beauty of all of its substrings.",
            examples: [
              "Input: s = \"aabcb\"\nOutput: 5"
            ],
            constraints: []
          },
          {
            id: "reverse-every-word",
            title: "Reverse every word in a string",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s`, reverse each word in the string. The order of the words should be preserved, as well as the spaces.",
            examples: [
              "Input: s = \"Let's take LeetCode contest\"\nOutput: \"s'teL ekat edoCteeL tsetnoc\""
            ],
            constraints: []
          }
        ]
      }
    ]
  },

  // ▼▼▼ STEP 6 DATA ADDED ▼▼▼
  {
    id: "step-6",
    title: "Learn LinkedList [Single/Double LL, Medium, Hard Problems]",
    description: "Master linked list operations and advanced techniques",
    totalProblems: 31,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-6-1",
        title: "Learn 1D LinkedList",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          {
            id: "introduction-linkedlist",
            title: "Introduction to LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a pointer to the next node in the sequence. Your task is to implement a basic `Node` class/struct for a singly linked list.",
            examples: [
              "A `Node` should have two properties: `data` (integer) and `next` (a pointer/reference to the next Node)."
            ],
            constraints: []
          },
          {
            id: "implement-linkedlist",
            title: "Implementing LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Create a `LinkedList` class that has a `head` property. Implement a constructor to initialize an empty list (head = null). Also, implement a method to print all the elements of the list.",
            examples: [],
            constraints: []
          },
          {
            id: "insert-node-linkedlist",
            title: "Inserting a node in LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement functions to insert a new node with given data in a singly linked list at the beginning, at the end, and at a specific position.",
            examples: [
              "List: 1->2->4. Insert 3 at position 2. Result: 1->2->3->4"
            ],
            constraints: []
          },
          {
            id: "delete-node-linkedlist",
            title: "Deleting a node in LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement functions to delete a node from a singly linked list from the beginning, from the end, and at a specific position.",
            examples: [
              "List: 1->2->3->4. Delete node at position 2. Result: 1->2->4"
            ],
            constraints: []
          },
          {
            id: "find-length-linkedlist",
            title: "Find the length of the linkedlist",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a function that takes the head of a singly linked list and returns the number of nodes in it. Solve it both iteratively and recursively.",
            examples: [
              "List: 1->2->3->4->5. Output: 5"
            ],
            constraints: []
          },
          {
            id: "search-element-linkedlist",
            title: "Search an element in the LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a function that searches for a given key in a singly linked list. If the key is present, return true; otherwise, return false.",
            examples: [
              "List: 1->2->3->4, Key: 3. Output: true",
              "List: 1->2->3->4, Key: 5. Output: false"
            ],
            constraints: []
          },
          {
            id: "introduction-doubly-linkedlist",
            title: "Introduction to Doubly LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A doubly linked list is a linked list where each node has a data part and two pointers: one to the previous node and one to the next node. Implement a `Node` class/struct for a doubly linked list.",
            examples: [
              "A `Node` should have: `data` (integer), `next` (pointer to next Node), `prev` (pointer to previous Node)."
            ],
            constraints: []
          },
          {
            id: "insert-doubly-linkedlist",
            title: "Insert a node in Doubly LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement functions to insert a new node in a doubly linked list at the beginning, at the end, and before a given node.",
            examples: [
              "List: 1<->2<->4. Insert 3 before node 4. Result: 1<->2<->3<->4"
            ],
            constraints: []
          },
          {
            id: "delete-doubly-linkedlist",
            title: "Delete a node in Doubly LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement functions to delete a node from a doubly linked list from the beginning, from the end, and a node at a specific position.",
            examples: [
              "List: 1<->2<->3<->4. Delete node at position 3. Result: 1<->2<->4"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-6-2",
        title: "Learn Doubly LinkedList",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          {
            id: "reverse-doubly-linkedlist",
            title: "Reverse a Doubly LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a doubly linked list, reverse it in-place and return the new head. This can be done by swapping the `next` and `prev` pointers for all nodes and changing the head of the list.",
            examples: [
              "Input: 1<->2<->3<->4\nOutput: 4<->3<->2<->1"
            ],
            constraints: []
          },
          {
            id: "add-two-numbers",
            title: "Add two numbers represented as LinkedLists",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
            examples: [
              "Input: l1 = [2,4,3], l2 = [5,6,4]\nOutput: [7,0,8]\nExplanation: 342 + 465 = 807."
            ],
            constraints: []
          },
          {
            id: "odd-even-linkedlist",
            title: "Odd Even LinkedList",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list. The first node is considered odd, the second node even, and so on. Note that the relative order inside both the even and odd groups should remain as it was in the input.",
            examples: [
              "Input: head = [1,2,3,4,5]\nOutput: [1,3,5,2,4]"
            ],
            constraints: [
              "You must solve the problem in O(1) extra space complexity and O(n) time complexity."
            ]
          },
          {
            id: "sort-linkedlist",
            title: "Sort LinkedList of 0s, 1s and 2s",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a linked list of `N` nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all 0s are together, then all 1s and then all 2s.",
            examples: [
              "Input: 1 -> 2 -> 2 -> 1 -> 2 -> 0 -> 2 -> 2\nOutput: 0 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 2"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-6-3",
        title: "Medium Problems of LL",
        totalProblems: 10,
        completedProblems: 0,
        problems: [
          {
            id: "middle-linkedlist",
            title: "Find middle element in a LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node. This can be solved efficiently using the 'slow and fast pointer' (or tortoise and hare) technique.",
            examples: [
              "Input: head = [1,2,3,4,5]\nOutput: Node with value 3",
              "Input: head = [1,2,3,4,5,6]\nOutput: Node with value 4"
            ],
            constraints: []
          },
          {
            id: "reverse-linkedlist",
            title: "Reverse a LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a singly linked list, reverse the list, and return the new head. This can be solved iteratively or recursively.",
            examples: [
              "Input: head = [1,2,3,4,5]\nOutput: [5,4,3,2,1]"
            ],
            constraints: []
          },
          {
            id: "detect-loop-linkedlist",
            title: "Detect a loop in LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given `head`, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. This is famously solved using Floyd's Cycle-Finding Algorithm (slow and fast pointers).",
            examples: [
              "Input: head = [3,2,0,-4], pos = 1 (tail connects to index 1)\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "find-starting-loop",
            title: "Find the starting point of the Loop in LinkedList",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a linked list with a cycle, return the node where the cycle begins. If there is no cycle, return `null`. This is a follow-up to detecting a cycle.",
            examples: [
              "Input: head = [3,2,0,-4], pos = 1\nOutput: Node with value 2"
            ],
            constraints: [
              "Do not modify the linked list."
            ]
          },
          {
            id: "length-of-loop",
            title: "Find length of Loop",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a linked list that contains a cycle, find the length of the cycle. The length of the cycle is the number of nodes in the cycle.",
            examples: [
              "Input: head = [3,2,0,-4], pos = 1\nOutput: 3\nExplanation: The cycle is 2 -> 0 -> -4 -> 2"
            ],
            constraints: []
          },
          {
            id: "check-palindrome-linkedlist",
            title: "Check if LinkedList is Palindrome",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a singly linked list, return `true` if it is a palindrome. An efficient approach involves finding the middle, reversing the second half, and then comparing the two halves.",
            examples: [
              "Input: head = [1,2,2,1]\nOutput: true",
              "Input: head = [1,2]\nOutput: false"
            ],
            constraints: []
          },
          {
            id: "segregate-odd-even",
            title: "Segregate odd and even nodes in LinkedList",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a singly linked list, segregate the nodes with odd values from the nodes with even values, and arrange them such that all even valued nodes come after all odd valued nodes. The relative order of odd and even nodes should be maintained.",
            examples: [
              "Input: 17 -> 15 -> 8 -> 12 -> 10 -> 5 -> 4\nOutput: 17 -> 15 -> 5 -> 8 -> 12 -> 10 -> 4"
            ],
            constraints: []
          },
          {
            id: "remove-nth-node",
            title: "Remove N-th node from the end of a LinkedList",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a linked list, remove the `n-th` node from the end of the list and return its head. A one-pass solution can be achieved using two pointers.",
            examples: [
              "Input: head = [1,2,3,4,5], n = 2\nOutput: [1,2,3,5]"
            ],
            constraints: []
          },
          {
            id: "delete-middle-node",
            title: "Delete the middle node of the LinkedList",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the `head` of a linked list. Delete the middle node, and return the `head` of the modified linked list. The middle node is the `⌊n / 2⌋-th` node (0-indexed).",
            examples: [
              "Input: head = [1,3,4,7,1,2,6]\nOutput: [1,3,4,1,2,6]",
              "Input: head = [1,2,3,4]\nOutput: [1,2,4]"
            ],
            constraints: []
          },
          {
            id: "sort-list",
            title: "Sort a LinkedList",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a linked list, return the list after sorting it in ascending order. The most efficient approach is to use Merge Sort, which has a time complexity of O(n log n) and constant space complexity (in terms of list node storage).",
            examples: [
              "Input: head = [4,2,1,3]\nOutput: [1,2,3,4]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-6-4",
        title: "Hard Problems of LL",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          {
            id: "reverse-nodes-k-group",
            title: "Reverse LinkedList in groups of Size K",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return the modified list. `k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.",
            examples: [
              "Input: head = [1,2,3,4,5], k = 2\nOutput: [2,1,4,3,5]"
            ],
            constraints: [
              "You may not alter the values in the list's nodes, only nodes themselves may be changed."
            ]
          },
          {
            id: "rotate-linkedlist",
            title: "Rotate a LinkedList",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `head` of a linked list, rotate the list to the right by `k` places. `k` is non-negative.",
            examples: [
              "Input: head = [1,2,3,4,5], k = 2\nOutput: [4,5,1,2,3]"
            ],
            constraints: []
          },
          {
            id: "flattening-linkedlist",
            title: "Flattening a LinkedList",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a linked list where every node represents a linked list and contains two pointers of its type: `next` pointing to the next node on the main list and `bottom` pointing to a list where this node is the head. Each of these sub-lists is sorted in ascending order. Flatten the link list into a single list in sorted order.",
            examples: [
              "Input:\n5 -> 10 -> 19 -> 28\n|   |    |    |\n7   20   22   35\n|        |    |\n8        50   40\n|             |\n30            45\nOutput: 5->7->8->10->19->20->22->28->30->35->40->45->50"
            ],
            constraints: []
          },
          {
            id: "clone-linkedlist",
            title: "Clone LinkedList with Random and Next Pointer",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "A linked list of length `n` is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`. Construct a deep copy of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its value set to the value of its corresponding original node.",
            examples: [],
            constraints: []
          },
          {
            id: "merge-k-sorted-lists",
            title: "Merge K sorted LinkedLists",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
            examples: [
              "Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]"
            ],
            constraints: []
          },
          {
            id: "multiply-two-linkedlists",
            title: "Multiply 2 numbers represented as LinkedLists",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two numbers represented by two linked lists, write a function that returns the multiplication of these two numbers represented by a new linked list. The numbers are represented in reverse order.",
            examples: [
              "Input: l1 = [3,2,1], l2 = [1,2]\nOutput: [3,6,4,2]\nExplanation: 123 * 21 = 2583"
            ],
            constraints: []
          },
          {
            id: "intersection-two-linkedlists",
            title: "Find intersection of Two LinkedLists",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.",
            examples: [],
            constraints: [
              "The solution should have O(N+M) time complexity and O(1) space complexity."
            ]
          },
          {
            id: "design-browser-history",
            title: "Design Browser History",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You have a browser of one tab where you start on the `homepage`. You can `visit` a `url`, move `back` in history `steps` times, and move `forward` in history `steps` times. Implement the `BrowserHistory` class. A doubly linked list is a suitable data structure for this problem.",
            examples: [
              "BrowserHistory browserHistory = new BrowserHistory(\"leetcode.com\");\nbrowserHistory.visit(\"google.com\");\nbrowserHistory.visit(\"facebook.com\");\nbrowserHistory.back(1); // Returns \"google.com\"\nbrowserHistory.forward(1); // Returns \"facebook.com\""
            ],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 7 DATA ADDED ▼▼▼
  {
    id: "step-7",
    title: "Recursion [PatternWise]",
    description: "Master recursion with systematic pattern-based approach",
    totalProblems: 25,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-7-1",
        title: "Get a Strong Hold",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "recursion-introduction",
            title: "Introduction to Recursion",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "# Recursion Fundamentals\n\nA recursive function must have two parts: a **base case**, which is a condition under which the function stops calling itself, and a **recursive step**, where the function calls itself with modified arguments, moving closer to the base case. Your task is to explain these two concepts with a simple factorial example.",
            examples: [],
            constraints: []
          },
          {
            id: "implement-power-function",
            title: "Pow(x, n)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., x^n). An optimal solution can be achieved using recursion with a time complexity of O(log n) by leveraging the property that x^n = (x^(n/2))^2 for even n and x^n = x * (x^((n-1)/2))^2 for odd n.",
            examples: [
              "Input: x = 2.00000, n = 10\nOutput: 1024.00000",
              "Input: x = 2.00000, n = -2\nOutput: 0.25000"
            ],
            constraints: []
          },
          {
            id: "count-good-numbers",
            title: "Count Good numbers",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "A digit string is called good if the digits at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7). Given an integer `n`, return the total number of good digit strings of length `n`. Since the answer may be large, return it modulo 10^9 + 7. This can be solved by observing the pattern and using a fast power function (like the one from the previous problem).",
            examples: [
              "Input: n = 1\nOutput: 5 (0,2,4,6,8)",
              "Input: n = 4\nOutput: 400"
            ],
            constraints: []
          },
          {
            id: "sort-stack-recursion",
            title: "Sort a stack using recursion",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a stack, sort it using recursion. You are not allowed to use any loop constructs like `for` or `while`. The only functions you can use are the standard stack operations: `push`, `pop`, `peek`, `isEmpty`.",
            examples: [
              "Input: [34, 3, 31, 98, 92, 23]\nOutput: [3, 23, 31, 34, 92, 98]"
            ],
            constraints: []
          },
          {
            id: "reverse-stack-recursion",
            title: "Reverse a stack using recursion",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a program to reverse a stack using recursion. You are not allowed to use any extra space other than the internal stack space used by recursion.",
            examples: [
              "Input: [1, 2, 3, 4, 5]\nOutput: [5, 4, 3, 2, 1]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-7-2",
        title: "Subsequences Pattern",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          {
            id: "generate-all-subsequences",
            title: "Generate all subsequences",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements. Given an array or string, generate all possible subsequences. This is a classic 'pick / not-pick' recursion problem.",
            examples: [
              "Input: [1, 2, 3]\nOutput: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]"
            ],
            constraints: []
          },
          {
            id: "generate-parentheses",
            title: "Generate Parentheses",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
            examples: [
              "Input: n = 3\nOutput: [\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
            ],
            constraints: []
          },
          {
            id: "subset-sum-equal-k",
            title: "Subset Sum I",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `N` integers, find the sum of all the subsets in it. Output is the list of sums in ascending order.",
            examples: [
              "Input: [2, 3]\nOutput: [0, 2, 3, 5]"
            ],
            constraints: []
          },
          {
            id: "count-subsequences-sum-k",
            title: "Count all subsequences with sum K",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers, find the number of subsequences with a sum equal to a given value `k`.",
            examples: [
              "Input: arr = [1, 2, 1], k = 2\nOutput: 2\nExplanation: Subsequences are [1, 1] and [2]."
            ],
            constraints: []
          },
          {
            id: "check-subsequence-sum-k",
            title: "Check if there exists a subsequence with sum K",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of non-negative integers `arr` and an integer `k`, your task is to determine if there exists a subsequence of `arr` with a sum equal to `k`. Return `true` if it exists, otherwise `false`.",
            examples: [
              "Input: arr = [2, 3, 1, 4], k = 4\nOutput: true\nExplanation: [1, 3] or [4] work."
            ],
            constraints: []
          },
          {
            id: "combination-sum",
            title: "Combination Sum",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. You may return the combinations in any order. The same number may be chosen from `candidates` an unlimited number of times.",
            examples: [
              "Input: candidates = [2,3,6,7], target = 7\nOutput: [[2,2,3],[7]]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-7-3",
        title: "Trying out all Combos [Hard]",
        totalProblems: 14,
        completedProblems: 0,
        problems: [
          {
            id: "combination-sum-ii",
            title: "Combination Sum II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a collection of candidate numbers (`candidates`) and a target number (`target`), find all unique combinations in `candidates` where the candidate numbers sum to `target`. Each number in `candidates` may only be used once in the combination. The solution set must not contain duplicate combinations.",
            examples: [
              "Input: candidates = [10,1,2,7,6,1,5], target = 8\nOutput: [[1,1,6], [1,2,5], [1,7], [2,6]]"
            ],
            constraints: []
          },
          {
            id: "subset-sum-ii",
            title: "Subsets II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
            examples: [
              "Input: nums = [1,2,2]\nOutput: [[],[1],[1,2],[1,2,2],[2],[2,2]]"
            ],
            constraints: []
          },
          {
            id: "combination-sum-iii",
            title: "Combination Sum III",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Find all valid combinations of `k` numbers that sum up to `n` such that the following conditions are true: Only numbers 1 through 9 are used. Each number is used at most once. Return a list of all possible valid combinations.",
            examples: [
              "Input: k = 3, n = 7\nOutput: [[1,2,4]]"
            ],
            constraints: []
          },
          {
            id: "letter-combinations",
            title: "Letter Combinations of a Phone Number",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. A mapping of digits to letters (just like on the telephone buttons) is given.",
            examples: [
              "Input: digits = \"23\"\nOutput: [\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
            ],
            constraints: []
          },
          {
            id: "palindrome-partitioning",
            title: "Palindrome Partitioning",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`.",
            examples: [
              "Input: s = \"aab\"\nOutput: [[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
            ],
            constraints: []
          },
          {
            id: "word-search",
            title: "Word Search",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
            examples: [
              "Input: board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "n-queens",
            title: "N-Queens",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement.",
            examples: [
              "Input: n = 4\nOutput: [[ \".Q..\", \"...Q\", \"Q...\", \"..Q.\"], [\"..Q.\", \"Q...\", \"...Q\", \".Q..\"]]"
            ],
            constraints: []
          },
          {
            id: "sudoku-solver",
            title: "Sudoku Solver",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all of the following rules: 1. Each of the digits 1-9 must occur exactly once in each row. 2. Each of the digits 1-9 must occur exactly once in each column. 3. Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.",
            examples: [],
            constraints: []
          },
          {
            id: "m-coloring",
            title: "M-Coloring Problem",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an undirected graph and a number of colors `m`, determine if the graph can be colored with at most `m` colors such that no two adjacent vertices of the graph are colored with the same color.",
            examples: [
              "Input: graph = [[1,2,3],[0,2],[0,1],[0]], m = 3\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "rat-in-maze",
            title: "Rat in a Maze",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Consider a rat placed at (0, 0) in a square matrix `m` of order `n * n`. It has to reach the destination at (n-1, n-1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U' (up), 'D' (down), 'L' (left), 'R' (right). A value of 1 in a cell means the block is not blocked, whereas 0 means the block is blocked.",
            examples: [
              "Input: n = 4, m = [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]\nOutput: [\"DDRDRR\", \"DRDDRR\"]"
            ],
            constraints: []
          },
          {
            id: "word-break-ii",
            title: "Word Break II",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in any order.",
            examples: [
              "Input: s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]\nOutput: [\"cats and dog\", \"cat sand dog\"]"
            ],
            constraints: []
          },
          {
            id: "permutations",
            title: "Permutations",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
            examples: [
              "Input: nums = [1,2,3]\nOutput: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
            ],
            constraints: []
          },
          {
            id: "permutations-ii",
            title: "Permutations II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a collection of numbers, `nums`, that might contain duplicates, return all possible unique permutations in any order.",
            examples: [
              "Input: nums = [1,1,2]\nOutput: [[1,1,2], [1,2,1], [2,1,1]]"
            ],
            constraints: []
          },
          {
            id: "kth-permutation",
            title: "K-th Permutation Sequence",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "The set `[1, 2, 3, ..., n]` contains a total of `n!` unique permutations. By listing and labeling all of the permutations in order, we get a sequence. Given `n` and `k`, return the `k-th` permutation sequence.",
            examples: [
              "Input: n = 3, k = 3\nOutput: \"213\""
            ],
            constraints: [
              "A backtracking solution will be too slow. A mathematical approach is required."
            ]
          }
        ]
      }
    ]
  },
  // TODO: Add data for Step 1 through Step 7 here.

  // ▼▼▼ STEP 8 DATA ▼▼▼
  {
    id: "step-8",
    title: "Bit Manipulation [Concepts & Problems]",
    description: "Master bitwise operations and bit manipulation techniques",
    totalProblems: 23,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-8-1",
        title: "Learn Bit Manipulation",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          {
            id: "bit-manipulation-intro",
            title: "Introduction to Bit Manipulation",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Bit manipulation is the act of algorithmically manipulating bits. This problem is conceptual. Your task is to explain the function of the following bitwise operators in your chosen language: AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), and Right Shift (>>). Provide a simple example for each.",
            examples: [
              "Example for AND: 5 & 3 (0101 & 0011) = 1 (0001)"
            ],
            constraints: []
          },
          {
            id: "check-ith-bit",
            title: "Check if the i-th bit is set or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a number `n` and an integer `i`, write a function to check if the `i-th` bit of `n` is set (1) or not (0). The `i-th` bit is counted from the right, starting at 0.",
            examples: [
              "Input: n = 10 (1010), i = 1\nOutput: true",
              "Input: n = 10 (1010), i = 2\nOutput: false"
            ],
            constraints: [
              "Hint: Use the expression `(n & (1 << i)) != 0`."
            ]
          },
          {
            id: "check-odd-even",
            title: "Check if a number is odd or even",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer, determine if it is odd or even using bitwise operators. You are not allowed to use the modulo (%) operator.",
            examples: [
              "Input: 10\nOutput: Even",
              "Input: 7\nOutput: Odd"
            ],
            constraints: [
              "Hint: Check the least significant bit (LSB)."
            ]
          },
          {
            id: "check-power-of-two",
            title: "Check if a number is power of 2 or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`. An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.",
            examples: [
              "Input: n = 16\nOutput: true",
              "Input: n = 3\nOutput: false"
            ],
            constraints: [
              "Hint: A power of two in binary has only one set bit."
            ]
          },
          {
            id: "count-set-bits",
            title: "Count the number of set bits",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a non-negative integer `n`, write a function to count the number of set bits (1s) in its binary representation. This is also known as the Hamming weight.",
            examples: [
              "Input: 11 (1011)\nOutput: 3"
            ],
            constraints: [
              "An efficient method is Brian Kernighan's algorithm, which uses the expression `n = n & (n-1)`."
            ]
          },
          {
            id: "set-unset-bits",
            title: "Set/Unset/Toggle bits",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a number `n` and a position `i`, write functions to: 1. Set the `i-th` bit of `n`. 2. Unset (clear) the `i-th` bit of `n`. 3. Toggle the `i-th` bit of `n`.",
            examples: [
              "Input: n = 10 (1010), i = 2\nSet bit: 14 (1110)\nUnset bit: 10 (1010)\nToggle bit: 14 (1110)"
            ],
            constraints: []
          },
          {
            id: "swap-two-numbers",
            title: "Swap two numbers without a temporary variable",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two integers, `a` and `b`, swap their values without using a third temporary variable. This can be achieved using the XOR operator.",
            examples: [
              "Input: a = 5, b = 10\nOutput: a = 10, b = 5"
            ],
            constraints: []
          },
          {
            id: "divide-two-integers",
            title: "Divide two integers without using multiplication, division and mod operator",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two integers `dividend` and `divisor`, divide the two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero. Handle overflow cases.",
            examples: [
              "Input: dividend = 10, divisor = 3\nOutput: 3",
              "Input: dividend = 7, divisor = -3\nOutput: -2"
            ],
            constraints: [
              "Hint: Use bit shifting to perform division by repeated subtraction."
            ]
          }
        ]
      },
      {
        id: "lec-8-2",
        title: "Interview Problems",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          {
            id: "count-total-set-bits",
            title: "Count total set bits from 1 to N",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a number `N`. Find the total number of set bits in the binary representation of all numbers from 1 to `N`.",
            examples: [
              "Input: N = 3\nOutput: 4\nExplanation: 1(01), 2(10), 3(11). Total set bits = 1+1+2=4."
            ],
            constraints: []
          },
          {
            id: "single-number-ii",
            title: "Single Number II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it. You must implement a solution with a linear runtime complexity and use only constant extra space.",
            examples: [
              "Input: nums = [2,2,3,2]\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "single-number-iii",
            title: "Single Number III",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order. You must implement a solution with a linear runtime complexity and use only constant extra space.",
            examples: [
              "Input: nums = [1,2,1,3,2,5]\nOutput: [3,5]"
            ],
            constraints: []
          },
          {
            id: "xor-queries-subarray",
            title: "XOR Queries of a Subarray",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array `arr` of positive integers. You are also given an array `queries` where `queries[i] = [Li, Ri]`. For each query `i`, you have to compute the XOR of the elements of `arr` from index `Li` to `Ri` (inclusive). Return an array containing the result for each query. An efficient solution uses a prefix XOR array.",
            examples: [
              "Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]\nOutput: [2,7,14,8]"
            ],
            constraints: []
          },
          {
            id: "find-xor-beauty",
            title: "Find XOR Sum of All Pairs Bitwise AND",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "The XOR sum of a list is the bitwise XOR of all its elements. If the list only contains one element, then its XOR sum is that element. You are given two 0-indexed arrays `arr1` and `arr2` that consist only of non-negative integers. Consider a list containing the result of `arr1[i] AND arr2[j]` (bitwise AND) for every `(i, j)` pair. Return the XOR sum of this list.",
            examples: [
              "Input: arr1 = [1,2,3], arr2 = [6,5]\nOutput: 0",
              "Input: arr1 = [12], arr2 = [4]\nOutput: 4"
            ],
            constraints: [
              "Hint: (a&b)^(a&c) = a&(b^c)"
            ]
          },
          {
            id: "two-numbers-odd-times",
            title: "Find two numbers appearing odd number of times",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums`, in which exactly two elements appear an odd number of times and all the other elements appear an even number of times. Find the two elements that appear an odd number of times.",
            examples: [
              "Input: nums = [1,2,1,3,2,5]\nOutput: [3,5]"
            ],
            constraints: [
              "This is the same as the 'Single Number III' problem."
            ]
          },
          {
            id: "bit-difference",
            title: "Bit Difference",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given two numbers `A` and `B`. The task is to count the number of bits needed to be flipped to convert `A` to `B`.",
            examples: [
              "Input: A = 10 (1010), B = 20 (10100)\nOutput: 4"
            ],
            constraints: [
              "Hint: This is the number of set bits in A XOR B."
            ]
          },
          {
            id: "power-set",
            title: "Power Set",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. This can be solved with recursion (backtracking) or with bit manipulation by iterating from 0 to 2^n - 1.",
            examples: [
              "Input: nums = [1,2,3]\nOutput: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-8-3",
        title: "Advanced Maths",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "prime-factorization",
            title: "Prime Factorization",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a positive integer `n`, print its prime factorization.",
            examples: [
              "Input: n = 12\nOutput: 2 2 3"
            ],
            constraints: [
              "An efficient solution for multiple queries would involve pre-computing primes using a sieve."
            ]
          },
          {
            id: "all-divisors",
            title: "All divisors of a number",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a positive integer `N`, find and print all its divisors in ascending order. The optimal approach runs in O(sqrt(N)) time.",
            examples: [
              "Input: N = 36\nOutput: 1 2 3 4 6 9 12 18 36"
            ],
            constraints: []
          },
          {
            id: "sieve-eratosthenes",
            title: "Sieve of Eratosthenes",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer `n`, return a list of all prime numbers that are strictly less than `n`. Implement the Sieve of Eratosthenes algorithm.",
            examples: [
              "Input: n = 10\nOutput: [2,3,5,7]"
            ],
            constraints: []
          },
          {
            id: "power-exponentiation",
            title: "Power(x, n)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement `pow(x, n)`, which calculates `x` raised to the power `n`. The optimal solution uses binary exponentiation and has a time complexity of O(log n).",
            examples: [
              "Input: x = 2.00000, n = 10\nOutput: 1024.00000"
            ],
            constraints: []
          },
          {
            id: "count-primes",
            title: "Count Primes",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer `n`, return the number of prime numbers that are strictly less than `n`. Use the Sieve of Eratosthenes for an efficient solution.",
            examples: [
              "Input: n = 10\nOutput: 4"
            ],
            constraints: []
          },
          {
            id: "modular-exponentiation",
            title: "Modular Exponentiation",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given three numbers `x`, `n`, and `m`, compute `(x^n) % m`. This is a fundamental operation in number theory and cryptography, and can be solved efficiently using the principle of binary exponentiation.",
            examples: [
              "Input: x = 3, n = 2, m = 4\nOutput: 1\nExplanation: (3^2) % 4 = 9 % 4 = 1."
            ],
            constraints: []
          },
          {
            id: "print-prime-factors",
            title: "Print Prime Factors of a number",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a positive integer `n`, print all its prime factors.",
            examples: [
              "Input: 315\nOutput: 3 3 5 7"
            ],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 9 DATA ▼▼▼
  {
    id: "step-9",
    title: "Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]",
    description: "Master stack and queue data structures with advanced applications",
    totalProblems: 30,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-9-1",
        title: "Learning",
        totalProblems: 8,
        completedProblems: 0,
        problems: [
          {
            id: "implement-stack-arrays",
            title: "Implement Stack using Arrays",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement a Stack class using an array. It should support the following operations: `push`, `pop`, `peek` (or `top`), and `isEmpty`.",
            examples: [],
            constraints: []
          },
          {
            id: "implement-queue-arrays",
            title: "Implement Queue using Arrays",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement a Queue class using an array. It should support `enqueue` (add to back), `dequeue` (remove from front), `front`, and `isEmpty`. For an efficient implementation, consider using a circular array.",
            examples: [],
            constraints: []
          },
          {
            id: "implement-stack-queue",
            title: "Implement Stack using Queue",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement a LIFO (Last-In-First-Out) stack using only two queues. The implemented stack should support all the functions of a normal stack (`push`, `pop`, `peek`, `isEmpty`).",
            examples: [],
            constraints: []
          },
          {
            id: "implement-queue-stack",
            title: "Implement Queue using Stack",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement a FIFO (First-In-First-Out) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`enqueue`, `dequeue`, `front`, `isEmpty`). The `dequeue` operation should have amortized O(1) time complexity.",
            examples: [],
            constraints: []
          },
          {
            id: "valid-parentheses",
            title: "Valid Parentheses",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
            examples: [
              "Input: s = \"()[]{}\"\nOutput: true",
              "Input: s = \"(]\"\nOutput: false"
            ],
            constraints: []
          },
          {
            id: "min-stack",
            title: "Min Stack",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Design a stack that supports `push`, `pop`, `top`, and retrieving the minimum element in constant time. Implement the `MinStack` class.",
            examples: [],
            constraints: [
              "All operations `push`, `pop`, `top`, and `getMin` should operate in O(1) time."
            ]
          },
          {
            id: "infix-postfix",
            title: "Infix to Postfix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an infix expression, convert it to a postfix expression. The conversion can be done using a stack and is based on the Shunting-yard algorithm.",
            examples: [
              "Input: \"a+b*(c^d-e)^(f+g*h)-i\"\nOutput: \"abcd^e-fgh*+^*+i-\""
            ],
            constraints: []
          },
          {
            id: "prefix-infix-postfix",
            title: "Infix, Prefix and Postfix Expressions",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "This is a conceptual problem. Explain the definitions of Infix, Prefix (Polish Notation), and Postfix (Reverse Polish Notation) expressions. Describe the advantages of Prefix and Postfix notations over Infix for computer evaluation (no need for parenthesis or operator precedence rules).",
            examples: [
              "Infix: (a+b)*c\nPrefix: *+abc\nPostfix: ab+c*"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-9-2",
        title: "Prefix, Infix, PostFix Conversion Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "postfix-infix",
            title: "Postfix to Infix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a postfix expression, convert it to an infix expression. Use a stack to hold operands. When an operator is encountered, pop two operands, form a string by enclosing them in parentheses with the operator in between, and push the result back onto the stack.",
            examples: [
              "Input: \"ab+c*\"\nOutput: \"((a+b)*c)\""
            ],
            constraints: []
          },
          {
            id: "prefix-postfix",
            title: "Prefix to Postfix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a prefix expression, convert it to a postfix expression. Read the prefix expression from right to left. If the symbol is an operand, push it onto the stack. If the symbol is an operator, pop two operands from the stack, create a string by concatenating them and the operator, and push the result back.",
            examples: [
              "Input: \"*+AB-CD\"\nOutput: \"AB+CD-*\""
            ],
            constraints: []
          },
          {
            id: "postfix-prefix",
            title: "Postfix to Prefix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a postfix expression, convert it to a prefix expression. Read the postfix expression from left to right. If the symbol is an operand, push it onto the stack. If the symbol is an operator, pop two operands from the stack, create a string by concatenating the operator and the two operands, and push the result back.",
            examples: [
              "Input: \"ABC/-AK/L-*\"\nOutput: \"*-A/BC-/AKL\""
            ],
            constraints: []
          },
          {
            id: "infix-prefix",
            title: "Infix to Prefix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an infix expression, convert it to a prefix expression. A common method is to first reverse the infix string (swapping '(' and ')'), then find the postfix of the reversed string, and finally reverse the resulting postfix string.",
            examples: [
              "Input: \"(a-b/c)*(a/k-l)\"\nOutput: \"*-a/bc-/akl\""
            ],
            constraints: []
          },
          {
            id: "prefix-infix",
            title: "Prefix to Infix",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a prefix expression, convert it to an infix expression. Read the prefix expression from right to left. If the symbol is an operand, push it onto the stack. If it is an operator, pop two operands, form a string by enclosing them in parentheses with the operator in between, and push the result back.",
            examples: [
              "Input: \"*-A/BC-/AKL\"\nOutput: \"((A-(B/C))*((A/K)-L))\""
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-9-3",
        title: "Monotonic Stack/Queue Problems [VVV. Imp]",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          {
            id: "next-greater-element",
            title: "Next Greater Element I",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "The next greater element of some element `x` in an array is the first greater element that is to the right of `x` in the same array. You are given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`. For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the next greater element of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is -1.",
            examples: [
              "Input: nums1 = [4,1,2], nums2 = [1,3,4,2]\nOutput: [-1,3,-1]"
            ],
            constraints: []
          },
          {
            id: "next-greater-element-ii",
            title: "Next Greater Element II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a circular integer array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater number for every element in `nums`.",
            examples: [
              "Input: nums = [1,2,1]\nOutput: [2,-1,2]"
            ],
            constraints: []
          },
          {
            id: "next-smaller-element",
            title: "Next Smaller Element",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array, find the next smaller element for each element of the array. The next smaller element for an element `x` is the first smaller element on the right side of `x` in the array. If no such element exists, consider it -1.",
            examples: [
              "Input: [4, 8, 5, 2, 25]\nOutput: [2, 5, 2, -1, -1]"
            ],
            constraints: []
          },
          {
            id: "number-nges-right",
            title: "Number of NGEs to the right",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array and a series of queries, for each query `i`, find the number of elements to the right of index `i` that are greater than `arr[i]`. This problem is more complex and might require data structures like a Fenwick tree or segment tree for efficient query handling, but can be approached with stack-based logic as a variation.",
            examples: [],
            constraints: []
          },
          {
            id: "trapping-rainwater",
            title: "Trapping Rain Water",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
            examples: [
              "Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]\nOutput: 6"
            ],
            constraints: []
          },
          {
            id: "sum-subarray-minimums",
            title: "Sum of Subarray Minimums",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `arr`, find the sum of `min(b)` for every (contiguous) subarray `b` of `arr`. Since the answer may be large, return the answer modulo 10^9 + 7.",
            examples: [
              "Input: arr = [3,1,2,4]\nOutput: 17"
            ],
            constraints: [
              "Hint: For each element, find the number of subarrays for which it is the minimum. This can be found using monotonic stacks to find the previous and next smaller elements."
            ]
          },
          {
            id: "asteroid-collision",
            title: "Asteroid Collision",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "We are given an array `asteroids` of integers representing asteroids in a row. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Find out the state of the asteroids after all collisions.",
            examples: [
              "Input: asteroids = [5,10,-5]\nOutput: [5,10]"
            ],
            constraints: []
          },
          {
            id: "sum-subarray-ranges",
            title: "Sum of Subarray Ranges",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an integer array `nums`. The range of a subarray is the difference between the largest and smallest element in the subarray. Return the sum of all subarray ranges of `nums`.",
            examples: [
              "Input: nums = [1,2,3]\nOutput: 4"
            ],
            constraints: []
          },
          {
            id: "remove-k-digits",
            title: "Remove K Digits",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given string `num` representing a non-negative integer, and an integer `k`, return the smallest possible integer after removing `k` digits from `num`.",
            examples: [
              "Input: num = \"1432219\", k = 3\nOutput: \"1219\""
            ],
            constraints: []
          },
          {
            id: "largest-rectangle-histogram",
            title: "Largest Rectangle in Histogram",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
            examples: [
              "Input: heights = [2,1,5,6,2,3]\nOutput: 10"
            ],
            constraints: []
          },
          {
            id: "maximal-rectangle",
            title: "Maximal Rectangle",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a `rows x cols` binary `matrix` filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
            examples: [
              "Input: matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]\nOutput: 6"
            ],
            constraints: [
              "Hint: This problem can be reduced to the 'Largest Rectangle in Histogram' problem for each row."
            ]
          },
          {
            id: "sliding-window-maximum",
            title: "Sliding Window Maximum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window. An efficient solution uses a deque (double-ended queue).",
            examples: [
              "Input: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-9-4",
        title: "Implementation Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "lru-cache",
            title: "LRU Cache",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the `LRUCache` class which should support `get(key)` and `put(key, value)` operations. This is typically implemented using a hash map and a doubly linked list.",
            examples: [],
            constraints: [
              "All operations must be O(1) time complexity."
            ]
          },
          {
            id: "lfu-cache",
            title: "LFU Cache",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Design and implement a data structure for a Least Frequently Used (LFU) cache. It should support `get(key)` and `put(key, value)` operations. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. If there is a tie, the least recently used item should be evicted.",
            examples: [],
            constraints: [
              "All operations must be O(1) average time complexity."
            ]
          },
          {
            id: "largest-rectangle-binary-matrix",
            title: "Largest Rectangle of 1's with swapping of columns allowed",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary matrix, find the largest rectangle of 1s if you are allowed to swap columns. The key insight is to realize that for any given row, you can rearrange its columns. The problem then becomes finding the largest histogram for each row configuration, but since columns can be swapped, you can sort the heights of 1s in each column for a given row to maximize the histogram area.",
            examples: [],
            constraints: []
          },
          {
            id: "sliding-window-maximum-deque",
            title: "Sliding Window Maximum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array of integers `nums` and a window of size `k`. Find the maximum value in each window as it slides from left to right. This problem is a classic application of a deque to maintain a monotonic (decreasing) queue of indices.",
            examples: [
              "Input: nums = [1,3,-1,-3,5,3,6,7], k = 3\nOutput: [3,3,5,5,6,7]"
            ],
            constraints: []
          },
          {
            id: "the-celebrity-problem",
            title: "The Celebrity Problem",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "In a party of `N` people, only one person is known to everyone. Such a person is called a 'celebrity'. A celebrity is a person who is known by everyone but does not know anyone. You are given a function `knows(a, b)` which returns `true` if person `a` knows person `b`. Find the celebrity.",
            examples: [
              "Input: knows = [[1,1,0],[0,1,0],[1,1,1]]\nOutput: 1"
            ],
            constraints: [
              "The solution should have a time complexity of O(N)."
            ]
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 10 DATA ▼▼▼
  {
    id: "step-10",
    title: "Sliding Window & Two Pointer Combined Problems",
    description: "Master sliding window and two pointer techniques",
    totalProblems: 12,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-10-1",
        title: "Medium Problems",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          {
            id: "longest-substring-without-repeat",
            title: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s`, find the length of the longest substring without repeating characters. This is a classic sliding window problem.",
            examples: [
              "Input: s = \"abcabcbb\"\nOutput: 3\nExplanation: The answer is \"abc\", with the length of 3.",
              "Input: s = \"pwwkew\"\nOutput: 3\nExplanation: The answer is \"wke\", with the length of 3. Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring."
            ],
            constraints: []
          },
          {
            id: "max-points-cards",
            title: "Max Consecutive Ones III",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary array `nums` and an integer `k`, return the maximum number of consecutive 1's in the array if you can flip at most `k` 0's.",
            examples: [
              "Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2\nOutput: 6\nExplanation: Flip the two 0's to get the longest sequence of 1's."
            ],
            constraints: []
          },
          {
            id: "fruit-into-baskets",
            title: "Fruits into Baskets",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are visiting a farm with a single row of fruit trees, `fruits[i]` is the type of fruit the `i-th` tree produces. You have two baskets, and each basket can only hold a single type of fruit. You must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets. What is the total amount of fruit you can collect?",
            examples: [
              "Input: fruits = [1,2,1]\nOutput: 3",
              "Input: fruits = [0,1,2,2]\nOutput: 3"
            ],
            constraints: [
              "This problem is equivalent to finding the 'Longest Subarray with at most 2 distinct elements'."
            ]
          },
          {
            id: "longest-substring-at-most-k",
            title: "Longest Substring with At Most K Distinct Characters",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s` and an integer `k`, return the length of the longest substring of `s` that contains at most `k` distinct characters.",
            examples: [
              "Input: s = \"eceba\", k = 2\nOutput: 3\nExplanation: The substring is \"ece\" which has length 3.",
              "Input: s = \"aa\", k = 1\nOutput: 2"
            ],
            constraints: []
          },
          {
            id: "number-substrings-three-chars",
            title: "Number of Substrings Containing All Three Characters",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s` consisting only of characters 'a', 'b' and 'c'. Return the number of substrings that contain at least one occurrence of all these characters in it.",
            examples: [
              "Input: s = \"abcabc\"\nOutput: 10"
            ],
            constraints: []
          },
          {
            id: "max-consecutive-ones-iii",
            title: "Max Consecutive Ones III",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary array `nums` and an integer `k`, return the maximum number of consecutive 1's in the array if you can flip at most `k` 0's.",
            examples: [
              "Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2\nOutput: 6\nExplanation: Flip the two 0's to get the longest sequence of 1's."
            ],
            constraints: []
          },
          {
            id: "subarrays-k-different",
            title: "Subarrays with K Different Integers",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` and an integer `k`, return the number of good subarrays of `nums`. A good subarray is a contiguous subarray of `nums` that has exactly `k` different integers. For example, `[1,2,3,1,2]` has 3 different integers: 1, 2, and 3.",
            examples: [
              "Input: nums = [1,2,1,2,3], k = 2\nOutput: 7"
            ],
            constraints: [
              "Hint: The problem can be solved by finding the count of subarrays with at most `k` distinct elements and subtracting the count of subarrays with at most `k-1` distinct elements."
            ]
          },
          {
            id: "minimum-window-substring",
            title: "Minimum Window Substring",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `\"\"`.",
            examples: [
              "Input: s = \"ADOBECODEBANC\", t = \"ABC\"\nOutput: \"BANC\""
            ],
            constraints: []
          },
          {
            id: "minimum-window-subsequence",
            title: "Minimum Window Subsequence",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given strings `s1` and `s2`, return the minimum contiguous substring part of `s1`, so that `s2` is a subsequence of the part. If there is no such window in `s1` that covers all characters in `s2`, return the empty string `\"\"`.",
            examples: [
              "Input: s1 = \"abcdebdde\", s2 = \"bde\"\nOutput: \"bcde\""
            ],
            constraints: [
              "This problem is better solved with two pointers or dynamic programming rather than a traditional sliding window."
            ]
          },
          {
            id: "container-most-water",
            title: "Container With Most Water",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`. Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store.",
            examples: [
              "Input: height = [1,8,6,2,5,4,8,3,7]\nOutput: 49"
            ],
            constraints: []
          },
          {
            id: "three-sum-closest",
            title: "3 Sum Closest",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers.",
            examples: [
              "Input: nums = [-1,2,1,-4], target = 1\nOutput: 2\nExplanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)."
            ],
            constraints: [
              "You may assume that each input would have exactly one solution."
            ]
          },
          {
            id: "count-nice-subarrays",
            title: "Count Number of Nice Subarrays",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `nums` and an integer `k`. A continuous subarray is called `nice` if there are `k` odd numbers on it. Return the number of `nice` subarrays.",
            examples: [
              "Input: nums = [1,1,2,1,1], k = 3\nOutput: 2\nExplanation: The nice subarrays are [1,1,2,1] and [1,2,1,1]."
            ],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 11 DATA ▼▼▼
  {
    id: "step-11",
    title: "Heaps [Learning, Medium, Hard Problems]",
    description: "Master heap data structure and priority queue applications",
    totalProblems: 17,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-11-1",
        title: "Learning",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          {
            id: "heap-introduction",
            title: "Introduction to Priority Queues using Binary Heaps",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A Priority Queue is an abstract data type that operates like a regular queue but with a 'priority' assigned to each element. A Binary Heap is a common way to implement a priority queue. Your task is to explain the two main properties of a binary heap (Shape Property and Heap Property for both Min-Heap and Max-Heap).",
            examples: [],
            constraints: []
          },
          {
            id: "implement-min-heap",
            title: "Min Heap and Max Heap Implementation",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement a Min-Heap class from scratch using an array. It should support `insert`, `extractMin` (remove and return the minimum element), and `peek` operations. Include helper methods like `heapifyUp` and `heapifyDown`.",
            examples: [],
            constraints: []
          },
          {
            id: "check-min-heap",
            title: "Check if an array represents a min-heap or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array, determine if it represents a valid Min-Heap. In a Min-Heap, for any given node `i`, the value of the node is less than or equal to the value of its children.",
            examples: [
              "Input: [10, 20, 15, 30, 40]\nOutput: false (15 is a child of 10, but 20 is not <= 15)",
              "Input: [10, 20, 30, 25, 35]\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "convert-min-max-heap",
            title: "Convert min Heap to max Heap",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array representing a Min-Heap, convert it into a Max-Heap in-place. This can be done by starting from the last non-leaf node and calling a `heapifyDown` function for a Max-Heap on each node up to the root.",
            examples: [],
            constraints: [
              "The solution should have O(N) time complexity."
            ]
          },
          {
            id: "does-array-represent-heap",
            title: "Does array represent Heap",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `N` elements, check if the given array represents a valid Max-Heap.",
            examples: [
              "Input: arr = [90, 15, 10, 7, 12, 2, 7, 3]\nOutput: Yes"
            ],
            constraints: []
          },
          {
            id: "introduction-priority-queue",
            title: "Introduction to Priority Queue",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Learn to use the built-in Priority Queue library in your language (e.g., `PriorityQueue` in Java, `priority_queue` in C++). Write a program that inserts several numbers into a priority queue and then extracts them one by one to see them come out in sorted order.",
            examples: [],
            constraints: []
          }
        ]
      },
      {
        id: "lec-11-2",
        title: "Medium Problems",
        totalProblems: 6,
        completedProblems: 0,
        problems: [
          {
            id: "kth-largest-element",
            title: "Kth Largest Element in an Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` and an integer `k`, return the `k-th` largest element in the array. Note that it is the k-th largest element in the sorted order, not the k-th distinct element. An efficient solution uses a Min-Heap of size `k`.",
            examples: [
              "Input: nums = [3,2,1,5,6,4], k = 2\nOutput: 5"
            ],
            constraints: []
          },
          {
            id: "kth-smallest-element",
            title: "Kth Smallest Element in an Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` and an integer `k`, return the `k-th` smallest element in the array. An efficient solution uses a Max-Heap of size `k`.",
            examples: [
              "Input: nums = [3,2,1,5,6,4], k = 2\nOutput: 2"
            ],
            constraints: []
          },
          {
            id: "sort-k-sorted-array",
            title: "Sort a K-Sorted Array",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `n` elements, where each element is at most `k` away from its target position, devise an algorithm that sorts in `O(n log k)` time. Such an array is also called a 'nearly sorted' array.",
            examples: [
              "Input: arr = [6, 5, 3, 2, 8, 10, 9], k = 3\nOutput: [2, 3, 5, 6, 8, 9, 10]"
            ],
            constraints: []
          },
          {
            id: "merge-m-sorted-lists",
            title: "Merge M-Sorted Lists",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it. This is a classic problem for Min-Heaps.",
            examples: [
              "Input: lists = [[1,4,5],[1,3,4],[2,6]]\nOutput: [1,1,2,3,4,4,5,6]"
            ],
            constraints: []
          },
          {
            id: "replace-elements-rank",
            title: "Replace Elements by Its Rank in the Array",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `N` integers, the task is to replace each element of the array by its rank in the array.",
            examples: [
              "Input: [20, 15, 26, 2, 98, 6]\nOutput: [4, 3, 5, 1, 6, 2]"
            ],
            constraints: [
              "This can be solved by sorting pairs of (value, index), but also think about how a heap could be used."
            ]
          },
          {
            id: "task-scheduler",
            title: "Task Scheduler",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a characters array `tasks` representing tasks a CPU needs to do, where each letter represents a different task, and a non-negative integer `n` that represents the cooldown period between two same tasks. Return the least number of units of times that the CPU will take to finish all the given tasks. This is a greedy problem that can be solved efficiently with a Max-Heap.",
            examples: [
              "Input: tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\nOutput: 8"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-11-3",
        title: "Hard Problems",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "design-twitter",
            title: "Design Twitter",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in their news feed. Your design should support these functions efficiently. The `getNewsFeed` part is a classic use case for a Max-Heap to merge `k` sorted lists of tweets.",
            examples: [],
            constraints: []
          },
          {
            id: "connect-n-ropes",
            title: "Connect N Ropes with Minimum Cost",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "There are `n` ropes of different lengths. We need to connect these ropes into one rope. The cost to connect two ropes is equal to the sum of their lengths. We need to connect the ropes with minimum cost. This is a classic greedy problem solved with a Min-Heap.",
            examples: [
              "Input: ropes = [4, 3, 2, 6]\nOutput: 29"
            ],
            constraints: []
          },
          {
            id: "k-most-frequent-elements",
            title: "Top K Frequent Elements",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.",
            examples: [
              "Input: nums = [1,1,1,2,2,3], k = 2\nOutput: [1,2]"
            ],
            constraints: [
              "Your algorithm's time complexity must be better than O(n log n), where n is the array's size."
            ]
          },
          {
            id: "maximum-sum-combinations",
            title: "Maximum Sum Combination",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two integer arrays `A` and `B` of size `N` each. Find the `K` largest sum combinations `(A[i] + B[j])` from the two arrays.",
            examples: [
              "Input: A = [1, 4, 2, 3], B = [2, 5, 1, 6], K = 4\nOutput: [10, 9, 9, 8]"
            ],
            constraints: []
          },
          {
            id: "count-inversions-merge-sort",
            title: "Count Inversions",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "An inversion of an array is a pair of indices `(i, j)` such that `i < j` and `A[i] > A[j]`. Given an array `A`, count the total number of inversions.",
            examples: [
              "Input: [8, 4, 2, 1]\nOutput: 6\nExplanation: The inversions are (8,4), (8,2), (8,1), (4,2), (4,1), (2,1)."
            ],
            constraints: [
              "Note: The most efficient and standard solution for this problem involves modifying the Merge Sort algorithm, not a heap. This problem tests divide-and-conquer strategies."
            ]
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 12 DATA ▼▼▼
  {
    id: "step-12",
    title: "Greedy Algorithms [Easy, Medium/Hard]",
    description: "Master greedy algorithmic approach and optimization problems",
    totalProblems: 16,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-12-1",
        title: "Easy Problems",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "assign-cookies",
            title: "Assign Cookies",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content. Your goal is to maximize the number of your content children and output the maximum number.",
            examples: [
              "Input: g = [1,2,3], s = [1,1]\nOutput: 1"
            ],
            constraints: []
          },
          {
            id: "fractional-knapsack",
            title: "Fractional Knapsack",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given weights and values of `N` items, we need to put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack. In the Fractional Knapsack, we can break items for maximizing the total value of the knapsack. The greedy approach is to pick items with the highest value/weight ratio first.",
            examples: [
              "Input: N = 3, W = 50, values = [60,100,120], weight = [10,20,30]\nOutput: 240.00"
            ],
            constraints: []
          },
          {
            id: "find-minimum-coins",
            title: "Find Minimum Number of Coins",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a value `V`, if we want to make change for `V` cents, and we have an infinite supply of each of C = { C1, C2, .. , Cm} valued coins, what is the minimum number of coins to make the change? This greedy approach works for canonical coin systems (like in India, USA, EU).",
            examples: [
              "Input: V = 49, Coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000]\nOutput: 4 (20+20+5+2+2)"
            ],
            constraints: []
          },
          {
            id: "lemonade-change",
            title: "Lemonade Change",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time. Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5. Initially, you have no change. Given an integer array `bills` where `bills[i]` is the bill the `i-th` customer pays, return `true` if you can provide every customer with correct change, or `false` otherwise.",
            examples: [
              "Input: bills = [5,5,5,10,20]\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "valid-parenthesis-string",
            title: "Valid Parenthesis String",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string `s` containing only three types of characters: '(', ')' and '*', return `true` if `s` is valid. The character '*' can be treated as a single right parenthesis ')', a single left parenthesis '(', or an empty string.",
            examples: [
              "Input: s = \"()\"\nOutput: true",
              "Input: s = \"(*)\"\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "n-meetings-one-room",
            title: "N meetings in one room",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "There is one meeting room in a firm. There are `N` meetings in the form of `(start[i], end[i])`. What is the maximum number of meetings that can be accommodated in the meeting room? This is a classic Activity Selection Problem. The greedy choice is to always pick the next activity whose finish time is earliest among the remaining activities.",
            examples: [
              "Input: N = 6, start[] = {1,3,0,5,8,5}, end[] = {2,4,6,7,9,9}\nOutput: 4"
            ],
            constraints: []
          },
          {
            id: "jump-game",
            title: "Jump Game",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.",
            examples: [
              "Input: nums = [2,3,1,1,4]\nOutput: true",
              "Input: nums = [3,2,1,0,4]\nOutput: false"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-12-2",
        title: "Medium/Hard Problems",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          {
            id: "jump-game-ii",
            title: "Jump Game II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`. Each element `nums[i]` represents the maximum length of a forward jump from index `i`. Return the minimum number of jumps to reach `nums[n - 1]`.",
            examples: [
              "Input: nums = [2,3,1,1,4]\nOutput: 2"
            ],
            constraints: []
          },
          {
            id: "minimum-platforms",
            title: "Minimum number of platforms required for a railway",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given arrival and departure times of all trains that reach a railway station, the task is to find the minimum number of platforms required for the railway station so that no train waits.",
            examples: [
              "Input: arr[] = {9:00, 9:40, 9:50, 11:00, 15:00, 18:00}, dep[] = {9:10, 12:00, 11:20, 11:30, 19:00, 20:00}\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "job-sequencing",
            title: "Job Sequencing Problem",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a set of `N` jobs where each job `i` has a deadline and profit associated with it. Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We get profit `P` for a job if and only if it is completed by its deadline. Find the maximum profit and the number of jobs done.",
            examples: [
              "Input: N = 4, Jobs = {(1,4,20),(2,1,10),(3,1,40),(4,1,30)}\nOutput: 2 60"
            ],
            constraints: []
          },
          {
            id: "candy",
            title: "Candy",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "There are `n` children standing in a line. Each child is assigned a rating value given in the integer array `ratings`. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute the candies to the children.",
            examples: [
              "Input: ratings = [1,0,2]\nOutput: 5"
            ],
            constraints: []
          },
          {
            id: "shortest-job-first",
            title: "Shortest Job First",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Shortest job first (SJF) is a scheduling policy that selects the waiting process with the smallest execution time to execute next. Given `N` jobs with their arrival times and burst times, find the average waiting time for all the jobs if the SJF (non-preemptive) scheduling algorithm is used.",
            examples: [],
            constraints: []
          },
          {
            id: "page-faults-lru",
            title: "Page Faults in LRU",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "In operating systems that use paging for memory management, a page fault occurs when a program attempts to access a block of memory that is not currently stored in the main memory (RAM). You are given a sequence of pages and the capacity of the memory (number of frames). Find the number of page faults using the Least Recently Used (LRU) page replacement algorithm.",
            examples: [
              "Input: pages[] = {7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2}, capacity = 4\nOutput: 6"
            ],
            constraints: []
          },
          {
            id: "insert-interval",
            title: "Insert Interval",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [starti, endi]` represent the start and the end of the `i-th` interval and `intervals` is sorted in ascending order by `starti`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval. Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `starti` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).",
            examples: [
              "Input: intervals = [[1,3],[6,9]], newInterval = [2,5]\nOutput: [[1,5],[6,9]]"
            ],
            constraints: []
          },
          {
            id: "merge-intervals",
            title: "Merge Intervals",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
            examples: [
              "Input: intervals = [[1,3],[2,6],[8,10],[15,18]]\nOutput: [[1,6],[8,10],[15,18]]"
            ],
            constraints: []
          },
          {
            id: "non-overlapping-intervals",
            title: "Non-overlapping Intervals",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            examples: [
              "Input: intervals = [[1,2],[2,3],[3,4],[1,3]]\nOutput: 1\nExplanation: [1,3] can be removed and the rest of the intervals are non-overlapping."
            ],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 13 DATA ▼▼▼
  {
    id: "step-13",
    title: "Binary Trees [Traversals, Medium and Hard Problems]",
    description: "Master binary tree operations and advanced tree algorithms",
    totalProblems: 39,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-13-1",
        title: "Traversals",
        totalProblems: 11,
        completedProblems: 0,
        problems: [
          {
            id: "binary-tree-representation",
            title: "Binary Tree Representation",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A Binary Tree is a tree data structure in which each node has at most two children, referred to as the left child and the right child. Your task is to implement a `TreeNode` class/struct in your chosen language.",
            examples: [
              "A `TreeNode` should have three properties: `data` (integer), `left` (pointer to the left child), and `right` (pointer to the right child)."
            ],
            constraints: []
          },
          {
            id: "binary-tree-traversals",
            title: "Binary Tree Traversals",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "This is a conceptual problem. Explain the three main types of Depth First Traversal (DFS) for a binary tree: Inorder (Left, Root, Right), Preorder (Root, Left, Right), and Postorder (Left, Right, Root). Also explain Breadth First Traversal (BFS), also known as Level Order Traversal.",
            examples: [],
            constraints: []
          },
          {
            id: "preorder-traversal",
            title: "Preorder Traversal",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the preorder traversal of its nodes' values. (Root, Left, Right)",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [1,2,3]"
            ],
            constraints: [
              "Solve it both recursively and iteratively."
            ]
          },
          {
            id: "inorder-traversal",
            title: "Inorder Traversal",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the inorder traversal of its nodes' values. (Left, Root, Right)",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [1,3,2]"
            ],
            constraints: [
              "Solve it both recursively and iteratively."
            ]
          },
          {
            id: "postorder-traversal",
            title: "Postorder Traversal",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the postorder traversal of its nodes' values. (Left, Right, Root)",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [3,2,1]"
            ],
            constraints: [
              "Solve it both recursively and iteratively."
            ]
          },
          {
            id: "level-order-traversal",
            title: "Level Order Traversal",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level). This is typically solved using a queue.",
            examples: [
              "Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[9,20],[15,7]]"
            ],
            constraints: []
          },
          {
            id: "iterative-preorder",
            title: "Iterative Preorder Traversal",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the preorder traversal of a binary tree iteratively using a stack.",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [1,2,3]"
            ],
            constraints: []
          },
          {
            id: "iterative-inorder",
            title: "Iterative Inorder Traversal",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the inorder traversal of a binary tree iteratively using a stack.",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [1,3,2]"
            ],
            constraints: []
          },
          {
            id: "iterative-postorder-two-stack",
            title: "Post-order Traversal using 2 stacks",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the postorder traversal of a binary tree iteratively using two stacks.",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [3,2,1]"
            ],
            constraints: []
          },
          {
            id: "iterative-postorder-one-stack",
            title: "Post-order Traversal using 1 stack",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the postorder traversal of a binary tree iteratively using only one stack. This is trickier than the other iterative traversals.",
            examples: [
              "Input: root = [1,null,2,3]\nOutput: [3,2,1]"
            ],
            constraints: []
          },
          {
            id: "all-traversals-one-go",
            title: "All Traversals in One Go",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Write a single function to return the preorder, inorder, and postorder traversals of a binary tree. This can be achieved in a single pass using one stack, where you store a pair of `(node, num)`. The `num` indicates the state of the node's processing.",
            examples: [],
            constraints: []
          }
        ]
      },
      {
        id: "lec-13-2",
        title: "Medium Problems",
        totalProblems: 15,
        completedProblems: 0,
        problems: [
          {
            id: "height-binary-tree",
            title: "Height of a Binary Tree",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, find its maximum depth (or height). The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
            examples: [
              "Input: root = [3,9,20,null,null,15,7]\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "check-balanced-binary-tree",
            title: "Check if the Binary tree is height-balanced or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary tree, determine if it is height-balanced. A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.",
            examples: [
              "Input: root = [3,9,20,null,null,15,7]\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "diameter-binary-tree",
            title: "Diameter of Binary Tree",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.",
            examples: [
              "Input: root = [1,2,3,4,5]\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "maximum-path-sum",
            title: "Maximum Path Sum",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root. The path sum of a path is the sum of the node's values in the path. Given the `root` of a binary tree, return the maximum path sum of any non-empty path.",
            examples: [
              "Input: root = [-10,9,20,null,null,15,7]\nOutput: 42"
            ],
            constraints: []
          },
          {
            id: "check-identical-trees",
            title: "Check if two trees are identical or not",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
            examples: [
              "Input: p = [1,2,3], q = [1,2,3]\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "zigzag-traversal",
            title: "Zig Zag Traversal of Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).",
            examples: [
              "Input: root = [3,9,20,null,null,15,7]\nOutput: [[3],[20,9],[15,7]]"
            ],
            constraints: []
          },
          {
            id: "boundary-traversal",
            title: "Boundary Traversal of a Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "The boundary of a binary tree is the concatenation of the left boundary, the leaves, and the right boundary in order. Write a function to perform a boundary traversal of a binary tree.",
            examples: [],
            constraints: []
          },
          {
            id: "vertical-order-traversal",
            title: "Vertical Order Traversal of Binary Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, calculate the vertical order traversal of the binary tree. For each node at position `(row, col)`, its left and right children will be at positions `(row + 1, col - 1)` and `(row + 1, col + 1)` respectively. The root is at `(0, 0)`. If two nodes are in the same row and column, the order should be from small to large.",
            examples: [
              "Input: root = [3,9,20,null,null,15,7]\nOutput: [[9],[3,15],[20],[7]]"
            ],
            constraints: []
          },
          {
            id: "top-view-binary-tree",
            title: "Top View of Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary tree, print the top view of it. The top view of a binary tree is the set of nodes visible when the tree is viewed from the top. If multiple nodes are in the same vertical line, the one that appears first is visible.",
            examples: [
              "Input: [1,2,3,4,5,6,7]\nOutput: [4,2,1,3,7]"
            ],
            constraints: []
          },
          {
            id: "bottom-view-binary-tree",
            title: "Bottom View of Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary tree, print the bottom view of it. The bottom view of a binary tree is the set of nodes visible when the tree is viewed from the bottom. If multiple nodes are in the same vertical line, the one that appears last is visible.",
            examples: [
              "Input: [1,2,3,4,5,6,7]\nOutput: [4,2,6,3,7]"
            ],
            constraints: []
          },
          {
            id: "right-left-view",
            title: "Right/Left View of Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom. A similar problem exists for the left view.",
            examples: [
              "Input: root = [1,2,3,null,5,null,4]\nOutput: [1,3,4]"
            ],
            constraints: []
          },
          {
            id: "check-symmetrical",
            title: "Check for Symmetrical Binary Tree",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
            examples: [
              "Input: root = [1,2,2,3,4,4,3]\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "print-root-to-node-path",
            title: "Print Root to Node Path in Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree and a target node's value, return the path from the root to that node. If the node does not exist, return an empty list.",
            examples: [
              "Input: root = [1,2,3], target = 2\nOutput: [1,2]"
            ],
            constraints: []
          },
          {
            id: "lca-binary-tree",
            title: "Lowest Common Ancestor in Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The LCA is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants.",
            examples: [
              "Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1\nOutput: 3"
            ],
            constraints: []
          },
          {
            id: "maximum-width",
            title: "Maximum width of a Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, return the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels. The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.",
            examples: [
              "Input: root = [1,3,2,5,3,null,9]\nOutput: 4"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-13-3",
        title: "Hard Problems",
        totalProblems: 13,
        completedProblems: 0,
        problems: [
          {
            id: "children-sum-property",
            title: "Children Sum Property in Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary tree, write a function that converts the tree to hold the Children Sum Property. This property means that for every node, the value of the node is equal to the sum of the values of its left and right children. You can only increment the values of the nodes.",
            examples: [],
            constraints: []
          },
          {
            id: "all-nodes-distance-k",
            title: "All Nodes Distance K in Binary Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `root` of a binary tree, the value of a `target` node, and an integer `k`, return an array of the values of all nodes that have a distance `k` from the target node.",
            examples: [
              "Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2\nOutput: [7,4,1]"
            ],
            constraints: []
          },
          {
            id: "minimum-time-burn-tree",
            title: "Minimum Time to Burn a Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the root of a binary tree with unique values, and an integer `start`. At minute 0, an infection starts from the node with value `start`. Each minute, a node becomes infected if it is uninfected and is adjacent to an infected node. Return the number of minutes needed for the entire tree to be infected.",
            examples: [
              "Input: root = [1,5,3,null,4,10,6,9,2], start = 3\nOutput: 4"
            ],
            constraints: []
          },
          {
            id: "count-total-nodes-complete-tree",
            title: "Count Complete Tree Nodes",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a complete binary tree, return the number of the nodes in the tree. A solution faster than O(N) is required. An efficient solution takes advantage of the complete nature of the tree to achieve O((log N)^2) time complexity.",
            examples: [
              "Input: root = [1,2,3,4,5,6]\nOutput: 6"
            ],
            constraints: []
          },
          {
            id: "construct-unique-binary-tree",
            title: "Construct Unique Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "This is a conceptual problem. What are the minimum traversals required to uniquely construct a binary tree? Explain why certain pairs of traversals (like Preorder and Inorder) can uniquely identify a tree, while others (like Preorder and Postorder) cannot.",
            examples: [],
            constraints: []
          },
          {
            id: "construct-from-preorder-inorder",
            title: "Construct Binary Tree from Preorder and Inorder Traversal",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return the binary tree.",
            examples: [
              "Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]\nOutput: [3,9,20,null,null,15,7]"
            ],
            constraints: []
          },
          {
            id: "construct-from-postorder-inorder",
            title: "Construct Binary Tree from Postorder and Inorder Traversal",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return the binary tree.",
            examples: [
              "Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]\nOutput: [3,9,20,null,null,15,7]"
            ],
            constraints: []
          },
          {
            id: "serialize-deserialize",
            title: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. Design an algorithm to serialize and deserialize a binary tree.",
            examples: [],
            constraints: []
          },
          {
            id: "morris-preorder",
            title: "Morris Preorder Traversal of a Binary Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Morris Traversal algorithm to perform a preorder traversal of a binary tree. This advanced technique allows for tree traversal using O(1) extra space by temporarily modifying the tree structure.",
            examples: [],
            constraints: []
          },
          {
            id: "morris-inorder",
            title: "Morris Inorder Traversal of a Binary Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Morris Traversal algorithm to perform an inorder traversal of a binary tree. This advanced technique allows for tree traversal using O(1) extra space.",
            examples: [],
            constraints: []
          },
          {
            id: "flatten-binary-tree",
            title: "Flatten Binary Tree to Linked List",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the `root` of a binary tree, flatten the tree into a 'linked list': The 'linked list' should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`. The 'linked list' should be in the same order as a pre-order traversal of the binary tree. Do this in-place.",
            examples: [
              "Input: root = [1,2,5,3,4,null,6]\nOutput: [1,null,2,null,3,null,4,null,5,null,6]"
            ],
            constraints: []
          },
          {
            id: "binary-tree-cameras",
            title: "Binary Tree Cameras",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the `root` of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children. Return the minimum number of cameras needed to monitor all nodes of the tree.",
            examples: [
              "Input: root = [0,0,null,0,0]\nOutput: 1"
            ],
            constraints: []
          },
          {
            id: "distribute-coins",
            title: "Distribute Coins in Binary Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the `root` of a binary tree with `n` nodes where each `node` in the tree has `node.val` coins and there are `n` coins total. In one move, we may move one coin from a node to its parent or from a node to its child. Return the minimum number of moves required to make every node have exactly one coin.",
            examples: [
              "Input: root = [3,0,0]\nOutput: 2"
            ],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 14 DATA ▼▼▼
  {
    id: "step-14",
    title: "Binary Search Trees [Concept and Problems]",
    description: "Master binary search tree operations and applications",
    totalProblems: 16,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-14-1",
        title: "Concept",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "introduction-bst",
            title: "Introduction to Binary Search Trees",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees. Your task is to explain these properties.",
            examples: [],
            constraints: []
          },
          {
            id: "search-bst",
            title: "Search in a Binary Search Tree",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the root of a binary search tree (BST) and an integer `val`. Find the node in the BST that equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.",
            examples: [
              "Input: root = [4,2,7,1,3], val = 2\nOutput: [2,1,3]"
            ],
            constraints: [
              "The search operation should take O(H) time, where H is the height of the tree."
            ]
          },
          {
            id: "ceil-bst",
            title: "Ceil in a Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a BST and a key, find the ceiling of the key. The ceiling of a key is the smallest key in the BST that is greater than or equal to the given key. If the ceiling doesn't exist, return -1.",
            examples: [
              "Input: Tree with root 8, key = 6\nOutput: 8"
            ],
            constraints: []
          },
          {
            id: "floor-bst",
            title: "Floor in a Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a BST and a key, find the floor of the key. The floor of a key is the largest key in the BST that is smaller than or equal to the given key. If the floor doesn't exist, return -1.",
            examples: [
              "Input: Tree with root 8, key = 6\nOutput: (Assuming 5 is in the tree) 5"
            ],
            constraints: []
          },
          {
            id: "insert-node-bst",
            title: "Insert a given Node in Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. The new value should be inserted while maintaining the BST properties.",
            examples: [
              "Input: root = [4,2,7,1,3], val = 5\nOutput: [4,2,7,1,3,5]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-14-2",
        title: "Practice Problems",
        totalProblems: 11,
        completedProblems: 0,
        problems: [
          {
            id: "delete-node-bst",
            title: "Delete a Node in Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a root node of a binary search tree and a key, delete the node with the given key in the BST. Return the root node of the BST after deletion. Handle all three cases: node is a leaf, node has one child, and node has two children.",
            examples: [
              "Input: root = [5,3,6,2,4,null,7], key = 3\nOutput: [5,4,6,2,null,null,7]"
            ],
            constraints: []
          },
          {
            id: "kth-smallest-bst",
            title: "Find K-th smallest element in BST",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary search tree, and an integer `k`, return the `k-th` smallest value (1-indexed) of all the values of the nodes in the tree. An inorder traversal of a BST yields nodes in ascending order.",
            examples: [
              "Input: root = [3,1,4,null,2], k = 1\nOutput: 1"
            ],
            constraints: []
          },
          {
            id: "validate-bst",
            title: "Validate Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees.",
            examples: [
              "Input: root = [2,1,3]\nOutput: true",
              "Input: root = [5,1,4,null,null,3,6]\nOutput: false"
            ],
            constraints: []
          },
          {
            id: "lca-bst",
            title: "Lowest Common Ancestor in a BST",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. The LCA is the lowest node that has both nodes as descendants. The BST property makes this simpler than finding LCA in a general binary tree.",
            examples: [
              "Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\nOutput: 6"
            ],
            constraints: []
          },
          {
            id: "construct-bst-preorder",
            title: "Construct a BST from a preorder traversal",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an array of integers `preorder`, which represents the preorder traversal of a BST, construct the tree and return its root.",
            examples: [
              "Input: preorder = [8,5,1,7,10,12]\nOutput: [8,5,10,1,7,null,12]"
            ],
            constraints: []
          },
          {
            id: "inorder-successor-predecessor",
            title: "Inorder Successor/Predecessor in BST",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a BST and a node `p` in it, find the in-order successor of that node. The successor of a node `p` is the node with the smallest key greater than `p.val`. A similar problem is to find the in-order predecessor.",
            examples: [],
            constraints: []
          },
          {
            id: "bst-iterator",
            title: "BST Iterator",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the `BSTIterator` class that represents an iterator over the in-order traversal of a binary search tree (BST). It should support `next()` and `hasNext()` operations in O(1) average time and use O(h) memory, where `h` is the height of the tree.",
            examples: [],
            constraints: []
          },
          {
            id: "two-sum-bst",
            title: "Two Sum IV - Input is a BST",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Given the root of a Binary Search Tree and a target number `k`, return `true` if there exist two elements in the BST such that their sum is equal to the given target.",
            examples: [
              "Input: root = [5,3,6,2,4,null,7], k = 9\nOutput: true"
            ],
            constraints: []
          },
          {
            id: "recover-bst",
            title: "Recover Binary Search Tree",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.",
            examples: [
              "Input: root = [1,3,null,null,2]\nOutput: [3,1,null,null,2]"
            ],
            constraints: [
              "A solution with O(1) space is preferred (using Morris Traversal)."
            ]
          },
          {
            id: "largest-bst-binary-tree",
            title: "Largest BST in a Binary Tree",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a binary tree, find the size of the largest subtree which is also a Binary Search Tree (BST).",
            examples: [],
            constraints: []
          },
          {
            id: "merge-two-bst",
            title: "Merge Two BSTs",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two Binary Search Trees, merge them into a single balanced BST. The merged tree should contain all elements from both of the original trees.",
            examples: [],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 15 DATA ▼▼▼
  {
    id: "step-15",
    title: "Graphs [Concepts & Problems]",
    description: "Master graph algorithms and advanced graph problems",
    totalProblems: 54,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-15-1",
        title: "Learning",
        totalProblems: 7,
        completedProblems: 0,
        problems: [
          {
            id: "graph-representation",
            title: "Graph Representation",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "This is a conceptual problem. Explain the two most common ways to represent a graph: Adjacency Matrix and Adjacency List. Discuss the pros and cons of each in terms of space complexity and time complexity for operations like finding if an edge exists and iterating over all neighbors of a vertex.",
            examples: [],
            constraints: []
          },
          {
            id: "bfs-graph",
            title: "BFS in Graph",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an undirected graph, perform a Breadth First Traversal (BFS) starting from a given source vertex. BFS explores the neighbor nodes first, before moving to the next level neighbors. It uses a queue.",
            examples: [],
            constraints: []
          },
          {
            id: "dfs-graph",
            title: "DFS in Graph",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an undirected graph, perform a Depth First Traversal (DFS) starting from a given source vertex. DFS explores as far as possible along each branch before backtracking. It can be implemented using recursion or a stack.",
            examples: [],
            constraints: []
          },
          {
            id: "number-provinces",
            title: "Number of Provinces",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There are `n` cities. Some of them are connected, while some are not. A province is a group of directly or indirectly connected cities. You are given an `n x n` matrix `isConnected` where `isConnected[i][j] = 1` if the `i-th` and `j-th` city are directly connected. Return the total number of provinces.",
            examples: [
              "Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]\nOutput: 2"
            ],
            constraints: []
          },
          {
            id: "connected-components",
            title: "Number of Islands",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an `m x n` 2D binary grid `grid` which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
            examples: [
              "Input: grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]\nOutput: 1"
            ],
            constraints: []
          },
          {
            id: "rotten-oranges",
            title: "Rotten Oranges",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an `m x n` grid where each cell can be: 0 (empty), 1 (fresh orange), or 2 (rotten orange). Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten. Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.",
            examples: [
              "Input: grid = [[2,1,1],[1,1,0],[0,1,1]]\nOutput: 4"
            ],
            constraints: []
          },
          {
            id: "flood-fill",
            title: "Flood Fill",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "An image is represented by an `m x n` integer grid `image`. You are given a starting pixel `(sr, sc)` and a `color`. Perform a flood fill on the image starting from `image[sr][sc]`. Replace the color of the starting pixel and any pixels connected 4-directionally with the same original color with the new `color`.",
            examples: [
              "Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2\nOutput: [[2,2,2],[2,2,0],[2,0,1]]"
            ],
            constraints: []
          }
        ]
      },
      {
        id: "lec-15-2",
        title: "Problems on BFS/DFS",
        totalProblems: 12,
        completedProblems: 0,
        problems: [
          {
            id: "detect-cycle-undirected-bfs",
            title: "Detect cycle in an undirected graph using BFS",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an undirected graph with `V` vertices and `E` edges, check whether it contains any cycle. This can be solved by doing a BFS traversal. For every visited vertex `v`, if there is an adjacent `u` such that `u` is already visited and `u` is not a parent of `v`, then there is a cycle in the graph.",
            examples: [],
            constraints: []
          },
          {
            id: "detect-cycle-undirected-dfs",
            title: "Detect cycle in an undirected graph using DFS",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an undirected graph, check whether it contains any cycle using DFS. The logic is similar to BFS: for a given vertex `v`, if an adjacent vertex `u` is already visited and is not the parent of `v`, a cycle is detected.",
            examples: [],
            constraints: []
          },
          {
            id: "detect-cycle-directed-dfs",
            title: "Detect cycle in a directed graph using DFS",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a directed graph, check whether the graph contains a cycle. This can be solved by maintaining a recursion stack (or a `pathVisited` array) during DFS. If we encounter a node that is already in the current recursion stack, we have found a cycle.",
            examples: [],
            constraints: []
          },
          {
            id: "detect-cycle-directed-bfs",
            title: "Detect cycle in a directed graph using BFS (Kahn's Algo)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a directed graph, check for a cycle using BFS. This is typically done using Kahn's algorithm for topological sorting. If a valid topological sort can be generated and it includes all vertices, then the graph has no cycle.",
            examples: [],
            constraints: []
          },
          {
            id: "topological-sort-dfs",
            title: "Topological Sort Algorithm | DFS",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a Directed Acyclic Graph (DAG), print a topological sort of the given graph. A topological sort is a linear ordering of vertices such that for every directed edge from vertex `u` to vertex `v`, vertex `u` comes before `v` in the ordering. This can be achieved with DFS and a stack.",
            examples: [],
            constraints: []
          },
          {
            id: "topological-sort-bfs",
            title: "Topological Sort Algorithm | BFS (Kahn's Algo)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a Directed Acyclic Graph (DAG), print a topological sort of the given graph using Kahn's algorithm (which uses BFS). The algorithm works by finding vertices with an in-degree of 0 and adding them to a queue.",
            examples: [],
            constraints: []
          },
          {
            id: "detect-cycle-topo-sort",
            title: "Detect a cycle in Directed Graph | Topological Sort",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Explain how a topological sort algorithm (like Kahn's) can be used to detect a cycle in a directed graph. If the number of vertices in the generated topological sort is not equal to the total number of vertices in the graph, a cycle exists.",
            examples: [],
            constraints: []
          },
          {
            id: "course-schedule",
            title: "Course Schedule I and II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There are a total of `numCourses` courses you have to take, labeled from 0 to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Problem I: Return `true` if you can finish all courses. Problem II: Return the ordering of courses you should take. These are classic applications of topological sort.",
            examples: [
              "Input: numCourses = 2, prerequisites = [[1,0]]\nOutput: true (or [0,1] for Problem II)"
            ],
            constraints: []
          },
          {
            id: "find-eventual-safe-states",
            title: "Find Eventual Safe States",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "In a directed graph, we start at some node and every turn, walk along a directed edge of the graph. If we reach a node that is a terminal node (a node with no outgoing edges), we stop. A node is a `safe node` if every possible path starting from that node leads to a terminal node. Return an array containing all the safe nodes of the graph. This can be solved by detecting nodes that are part of a cycle.",
            examples: [],
            constraints: []
          },
          {
            id: "alien-dictionary",
            title: "Alien Dictionary",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings `words` from the alien language's dictionary, where the strings in `words` are sorted lexicographically by the rules of this new language. Derive the order of letters in this language. If the order is invalid, return `\"\"`.",
            examples: [
              "Input: words = [\"wrt\",\"wrf\",\"er\",\"ett\",\"rftt\"]\nOutput: \"wertf\""
            ],
            constraints: []
          },
          {
            id: "shortest-path-dag",
            title: "Shortest Path in DAG",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a Directed Acyclic Graph (DAG) with weighted edges and a source vertex, find the shortest path from the source to all other vertices. This can be solved in O(V+E) time by first finding a topological sort of the graph.",
            examples: [],
            constraints: []
          },
          {
            id: "shortest-path-binary-maze",
            title: "Shortest Path in a Binary Maze",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given an `m x n` binary matrix `grid`, return the length of the shortest clear path in the matrix. If there is no clear path, return -1. A clear path is a path from the top-left cell `(0, 0)` to the bottom-right cell `(m - 1, n - 1)` such that all visited cells are 0 and all adjacent cells are connected 8-directionally. This is a classic BFS problem.",
            examples: [],
            constraints: []
          }
        ]
      },
      {
        id: "lec-15-3",
        title: "Topo Sort Problems",
        totalProblems: 4,
        completedProblems: 0,
        problems: [
          {
            id: "word-ladder",
            title: "Word Ladder I",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the length of the shortest transformation sequence from `beginWord` to `endWord`, such that only one letter can be changed at a time and each transformed word must exist in the word list.",
            examples: [
              "Input: beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]\nOutput: 5"
            ],
            constraints: []
          },
          {
            id: "word-ladder-ii",
            title: "Word Ladder II",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return all the shortest transformation sequences from `beginWord` to `endWord`.",
            examples: [],
            constraints: []
          },
          {
            id: "number-distinct-islands",
            title: "Number of Distinct Islands",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an `m x n` binary matrix `grid`. An island is a group of 1's connected 4-directionally. Two islands are considered the same if one can be translated to obtain the other. Return the number of distinct islands. To solve this, you can perform a DFS/BFS from each land cell and store the 'shape' of the island (e.g., as a string of moves relative to the starting cell).",
            examples: [],
            constraints: []
          },
          {
            id: "bipartite-graph-bfs",
            title: "Bipartite Graph | BFS",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "A graph is bipartite if its vertices can be divided into two disjoint and independent sets, U and V, such that every edge connects a vertex in U to one in V. Given a graph, return `true` if the graph is bipartite and `false` otherwise. This can be solved by 'coloring' the graph nodes with two colors using BFS.",
            examples: [],
            constraints: []
          }
        ]
      },
      {
        id: "lec-15-4",
        title: "Shortest Path Algorithms",
        totalProblems: 9,
        completedProblems: 0,
        problems: [
          {
            id: "bipartite-graph-dfs",
            title: "Bipartite Graph | DFS",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a graph, determine if it is bipartite using a DFS-based coloring algorithm.",
            examples: [],
            constraints: []
          },
          {
            id: "dijkstra-algorithm",
            title: "Dijkstra's Algorithm",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a weighted, directed graph with non-negative weights and a source vertex, find the shortest paths from the source to all other vertices in the graph. Implement Dijkstra's algorithm using a priority queue.",
            examples: [],
            constraints: []
          },
          {
            id: "shortest-path-print",
            title: "Shortest Path in Weighted undirected graph",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a weighted undirected graph, a source and a destination, find the shortest path from source to destination. If no path exists, return -1. Also, print the path. This can be done by extending Dijkstra's algorithm to store parent pointers.",
            examples: [],
            constraints: []
          },
          {
            id: "shortest-distance-binary-maze",
            title: "Shortest Distance in a Binary Maze",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a `n * m` grid of `0`s and `1`s, find the shortest path between a given source cell to a destination cell. A `0` represents a wall, and a `1` represents a path. This can be solved with Dijkstra's or, if all edge weights are 1, simple BFS.",
            examples: [],
            constraints: []
          },
          {
            id: "path-minimum-effort",
            title: "Path with Minimum Effort",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are a hiker preparing for your next hike. You are given a 2D array of heights `heights`. You are situated in the top-left cell and you hope to travel to the bottom-right cell. You can move up, down, left, or right. You want to find a path that requires the minimum effort. A path's effort is the maximum absolute difference in heights between two consecutive cells of the path. This can be modeled as a shortest path problem on a graph and solved with a variation of Dijkstra's algorithm.",
            examples: [],
            constraints: []
          },
          {
            id: "cheapest-flights-k-stops",
            title: "Cheapest Flights Within K Stops",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There are `n` cities connected by some number of flights. You are given an array `flights` where `flights[i] = [from_i, to_i, price_i]`. You are also given three integers `src`, `dst`, and `k`. Return the cheapest price from `src` to `dst` with at most `k` stops.",
            examples: [],
            constraints: []
          },
          {
            id: "network-delay-time",
            title: "Network Delay Time",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given a network of `n` nodes, labeled from 1 to `n`. You are also given `times`, a list of travel times as directed edges `times[i] = (u, v, w)`. We will send a signal from a given node `k`. Return the minimum time it takes for all `n` nodes to receive the signal. If it is impossible for all `n` nodes to receive the signal, return -1. This is a single-source shortest path problem.",
            examples: [],
            constraints: []
          },
          {
            id: "number-ways-arrive-destination",
            title: "Number of Ways to Arrive at Destination",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "You are in a city that consists of `n` intersections. You are given an integer `n` and a 2D integer array `roads`. You are tasked to find the number of ways you can travel from intersection 0 to intersection `n - 1` in the shortest amount of time. Since the answer may be large, return it modulo 10^9 + 7. This requires modifying Dijkstra's algorithm to count paths.",
            examples: [],
            constraints: []
          },
          {
            id: "minimum-multiplications",
            title: "Minimum Multiplications to reach End",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a `start` number, an `end` number, and an array of `multipliers`, find the minimum number of multiplications to go from `start` to `end`. At each step, you can multiply the current number by any of the multipliers. All multiplications are performed modulo 100000. This can be modeled as a shortest path problem on a graph where nodes are numbers from 0 to 99999.",
            examples: [],
            constraints: []
          }
        ]
      },
      {
        id: "lec-15-5",
        title: "Minimum Spanning Tree",
        totalProblems: 5,
        completedProblems: 0,
        problems: [
          {
            id: "bellman-ford",
            title: "Bellman Ford Algorithm",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a weighted, directed graph, a source vertex, and the number of vertices, find the shortest paths from the source to all other vertices. Unlike Dijkstra's, the Bellman-Ford algorithm can handle graphs with negative edge weights. It can also detect negative weight cycles.",
            examples: [],
            constraints: []
          },
          {
            id: "floyd-warshall",
            title: "Floyd Warshall Algorithm",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "The Floyd Warshall Algorithm is for solving the All-Pairs Shortest Path problem. The problem is to find the shortest distances between every pair of vertices in a given edge-weighted directed Graph.",
            examples: [],
            constraints: []
          },
          {
            id: "find-city-threshold-distance",
            title: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There are `n` cities and a set of weighted edges connecting them. You are given an integer `distanceThreshold`. You need to find the city that has the smallest number of reachable cities within the `distanceThreshold`. If there's a tie, return the city with the greatest index. This is an All-Pairs Shortest Path problem, suitable for Floyd-Warshall.",
            examples: [],
            constraints: []
          },
          {
            id: "minimum-spanning-tree",
            title: "Minimum Spanning Tree (MST)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "This is a conceptual problem. Define a Minimum Spanning Tree (MST). An MST of a connected, undirected graph is a subgraph that connects all the vertices together, without any cycles and with the minimum possible total edge weight. Name two popular algorithms for finding the MST (e.g., Kruskal's and Prim's).",
            examples: [],
            constraints: []
          },
          {
            id: "disjoint-set-union-rank",
            title: "Disjoint Set | Union by Rank and Path Compression",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Disjoint Set Union (DSU) or Union-Find data structure. It keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets. Implement the `find` (with path compression) and `union` (by rank or size) operations.",
            examples: [],
            constraints: []
          }
        ]
      },
      {
        id: "lec-15-6",
        title: "Other Algorithms",
        totalProblems: 17,
        completedProblems: 0,
        problems: [
          {
            id: "disjoint-set-union-size",
            title: "Disjoint Set | Union by Size",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Disjoint Set Union (DSU) data structure using the union-by-size optimization. When merging two sets, the smaller tree is attached to the root of the larger tree.",
            examples: [],
            constraints: []
          },
          {
            id: "kruskal-algorithm",
            title: "Kruskal's Algorithm for MST",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a connected and undirected graph, find a Minimum Spanning Tree (MST) for that graph using Kruskal's algorithm. The algorithm sorts all the edges in non-decreasing order of their weight and uses a DSU data structure to detect cycles.",
            examples: [],
            constraints: []
          },
          {
            id: "prim-algorithm",
            title: "Prim's Algorithm for MST",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a connected and undirected graph, find a Minimum Spanning Tree (MST) for that graph using Prim's algorithm. The algorithm starts with a single vertex and grows the MST by adding the cheapest possible connection from the tree to another vertex at each step. It is typically implemented with a priority queue.",
            examples: [],
            constraints: []
          },
          {
            id: "number-operations-network-connected",
            title: "Number of Operations to Make Network Connected",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "There are `n` computers connected by `ethernet` cables, forming a network. You are given a list of connections. You can remove a cable between two computers and place it between any two disconnected computers. Return the minimum number of operations to make all the computers connected. If it's not possible, return -1. This can be solved using DSU.",
            examples: [],
            constraints: []
          },
          {
            id: "most-stones-removed",
            title: "Most Stones Removed with Same Row or Column",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "On a 2D plane, we place `n` stones at integer coordinate points. Each coordinate point may have at most one stone. A stone can be removed if it shares either the same row or the same column as another stone that has not been removed. Given an array `stones` of coordinate points, return the largest possible number of stones that can be removed. This can be modeled as a graph problem and solved with DSU.",
            examples: [],
            constraints: []
          },
          {
            id: "accounts-merge",
            title: "Accounts Merge",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a list of `accounts` where each element `accounts[i]` is a list of strings, where the first element is a name, and the rest of the elements are emails. If two accounts have at least one email in common, they belong to the same person. Merge these accounts. The merged accounts should be returned in a specific sorted format. This is a classic DSU problem.",
            examples: [],
            constraints: []
          },
          {
            id: "number-islands-ii",
            title: "Number of Islands II",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an `m x n` binary grid `grid`. A new land is formed at `(row, col)` if `grid[row][col] = 0` becomes 1. You are given a list of positions `positions` where land will be formed. After each new land is formed, return the number of islands. This dynamic version of the problem is best solved with DSU.",
            examples: [],
            constraints: []
          },
          {
            id: "making-large-island",
            title: "Making A Large Island",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an `n x n` binary matrix `grid`. You are allowed to change at most one `0` to be `1`. Return the size of the largest island in `grid` after applying this operation. This can be solved by first identifying all islands and their sizes (using DFS/BFS), and then checking each `0` to see what size island it would create by merging its neighbors.",
            examples: [],
            constraints: []
          },
          {
            id: "swim-rising-water",
            title: "Swim in Rising Water",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "You are given an `n x n` integer matrix `grid` where `grid[i][j]` represents the elevation at that point. At time `t`, the depth of the water everywhere is `t`. You can swim from a square to another 4-directionally adjacent square if and only if the elevation of both squares individually are at most `t`. You can swim infinite distances in zero time. Find the least time until you can reach the bottom right square from the top left square. This can be solved with a variation of Dijkstra's algorithm or with Binary Search on the answer.",
            examples: [],
            constraints: []
          },
          {
            id: "bridges-graph",
            title: "Bridges in Graph",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "An edge in an undirected connected graph is a bridge if removing it disconnects the graph. Given a graph, find all bridges in it. This is a classic application of DFS and can be solved using Tarjan's bridge-finding algorithm.",
            examples: [],
            constraints: []
          },
          {
            id: "articulation-point",
            title: "Articulation Point in Graph",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "A vertex in an undirected connected graph is an articulation point (or cut vertex) if removing it (and all edges incident to it) increases the number of connected components of the graph. Given a graph, find all articulation points in it.",
            examples: [],
            constraints: []
          },
          {
            id: "kosaraju-algorithm",
            title: "Kosaraju's Algorithm",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement Kosaraju's algorithm to find the strongly connected components (SCCs) of a directed graph. The algorithm performs two DFS traversals.",
            examples: [],
            constraints: []
          },
          {
            id: "strongly-connected-components",
            title: "Strongly Connected Components (Kosaraju's)",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a directed graph, find all of its strongly connected components. A directed graph is strongly connected if there is a path from each vertex in the graph to every other vertex. The SCCs of a directed graph form a partition of the vertices.",
            examples: [],
            constraints: []
          },
          {
            id: "maximum-bipartite-matching",
            title: "Maximum Bipartite Matching",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "A matching in a Bipartite Graph is a set of edges chosen in such a way that no two edges share an endpoint. A maximum matching is a matching of maximum size. Given a bipartite graph, find the maximum number of edges in a matching.",
            examples: [],
            constraints: []
          },
          {
            id: "maximum-flow-ford-fulkerson",
            title: "Maximum Flow | Ford Fulkerson Algorithm",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the Ford-Fulkerson algorithm to find the maximum flow from a source vertex `s` to a sink vertex `t` in a flow network.",
            examples: [],
            constraints: []
          },
          {
            id: "minimum-cut-maximum-flow",
            title: "Minimum Cut | Maximum Flow",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Explain the max-flow min-cut theorem. The theorem states that in a flow network, the maximum flow from a source `s` to a sink `t` is equal to the minimum capacity of an `s-t` cut.",
            examples: [],
            constraints: []
          },
          {
            id: "maximum-matching-general-graph",
            title: "Maximum Matching in General Graph (Edmonds' Blossom)",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "This is a theoretical problem. Describe the challenge of finding a maximum matching in a general (non-bipartite) graph and name the algorithm used to solve it (Edmonds' blossom algorithm).",
            examples: [],
            constraints: []
          }
        ]
      }
    ]
  },
  // ▼▼▼ STEP 16 DATA ▼▼▼
  {
    id: "step-16",
    title: "Dynamic Programming [Patterns and Problems]",
    description: "Master dynamic programming with systematic pattern-based approach",
    totalProblems: 56,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-16-1",
        title: "Introduction to DP",
        totalProblems: 3,
        completedProblems: 0,
        problems: [
          {
            id: "dynamic-programming-introduction",
            title: "Dynamic Programming Introduction",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "Dynamic Programming is a method for solving complex problems by breaking them down into simpler subproblems. It is applicable where subproblems are overlapping. Explain the two main techniques of DP: Memoization (Top-Down) and Tabulation (Bottom-Up), using the Fibonacci sequence as an example.",
            examples: [],
            constraints: []
          },
          {
            id: "climbing-stairs",
            title: "Climbing Stairs",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? This is a classic DP problem similar to Fibonacci.",
            examples: [
              "Input: n = 3\nOutput: 3\nExplanation: 1. 1 + 1 + 1, 2. 1 + 2, 3. 2 + 1"
            ],
            constraints: []
          },
          {
            id: "frog-jump",
            title: "Frog Jump",
            difficulty: "Easy",
            status: "not-started",
            isFreeProblem: true,
            description: "A frog is trying to cross a river. The frog is on the 0th stone and wants to reach the (N-1)th stone. The frog can jump from stone `i` to `i+1` or `i+2`. The energy lost is the absolute difference in height between the stones. Find the minimum total energy required. Heights are given in an array.",
            examples: [
              "Input: heights = [10, 20, 30, 10]\nOutput: 20\nExplanation: Frog jumps from 10 to 30 (cost 20), then 30 to 10 (cost 20). Total = 40. Or 10->20(10) then 20->10(10). Total=20."
            ],
            constraints: []
          }
        ]
      }
      // ... Note: Other DP lectures and problems would go here ...
    ]
  },
  // ▼▼▼ STEP 17 DATA ▼▼▼
  {
    id: "step-17",
    title: "Tries",
    description: "Master trie data structure and string processing applications",
    totalProblems: 7,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-17-1",
        title: "Theory",
        totalProblems: 2,
        completedProblems: 0,
        problems: [
          {
            id: "implement-trie",
            title: "Implement Trie (Prefix Tree)",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "A trie (pronounced as 'try') or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement a `Trie` class with `insert`, `search`, and `startsWith` methods.",
            examples: [],
            constraints: []
          },
          {
            id: "implement-trie-ii",
            title: "Implement Trie II",
            difficulty: "Medium",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement a `Trie` class that, in addition to the basic operations, supports `countWordsEqualTo(word)` and `countWordsStartingWith(prefix)`. This requires storing counts at each node.",
            examples: [],
            constraints: []
          }
        ]
      }
      // ... Note: Other Trie problems would go here ...
    ]
  },
  // ▼▼▼ STEP 18 DATA ▼▼▼
  {
    id: "step-18",
    title: "String Matching Algorithms",
    description: "Master advanced string matching and pattern searching algorithms",
    totalProblems: 3,
    completedProblems: 0,
    lectures: [
      {
        id: "lec-18-1",
        title: "Hard Problems",
        totalProblems: 3,
        completedProblems: 0,
        problems: [
          {
            id: "z-function",
            title: "Z-Function Algorithm",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "For a string `S` of length `n`, the Z-array is an array of length `n` where `Z[i]` is the length of the longest substring starting from `S[i]` which is also a prefix of `S`. Implement the Z-algorithm to construct this array in linear time.",
            examples: [
              "Input: S = \"abacaba\"\nOutput: [7,0,1,0,3,0,1]"
            ],
            constraints: []
          },
          {
            id: "kmp-algorithm",
            title: "Knuth-Morris-Pratt (KMP) Algorithm",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Implement the KMP algorithm for pattern searching. The algorithm avoids backtracking in the text by using a pre-computed Longest Proper Prefix Suffix (LPS) array for the pattern.",
            examples: [
              "Input: text = \"ababdabacdabacaba\", pattern = \"abacaba\"\nOutput: Pattern found at index 10"
            ],
            constraints: []
          },
          {
            id: "minimum-characters-palindrome",
            title: "Minimum characters to be added at front to make string palindrome",
            difficulty: "Hard",
            status: "not-started",
            isFreeProblem: true,
            description: "Given a string, find the minimum number of characters to be inserted at the beginning of the string to make it a palindrome. This can be solved efficiently using the KMP algorithm's LPS array.",
            examples: [
              "Input: \"AACECAAAA\"\nOutput: 2\nExplanation: Prepending \"AA\" makes it \"AAAACECAAAA\"."
            ],
            constraints: []
          }
        ]
      }
    ]
  }
];

// ----------------------------------------------------------
// 3. Helper Functions
// ----------------------------------------------------------

export const getTotalProgress = () => {
  const totalProblems = dsaCourse.reduce((sum, step) => sum + step.totalProblems, 0);
  const completedProblems = dsaCourse.reduce((sum, step) => sum + step.completedProblems, 0);
  return { totalProblems, completedProblems };
};

export const getDifficultyProgress = () => {
  let easy = { total: 0, completed: 0 };
  let medium = { total: 0, completed: 0 };
  let hard = { total: 0, completed: 0 };

  dsaCourse.forEach(step => {
    step.lectures.forEach(lecture => {
      lecture.problems.forEach(problem => {
        if (problem.difficulty === 'Easy') {
          easy.total++;
          if (problem.status === 'completed') easy.completed++;
        } else if (problem.difficulty === 'Medium') {
          medium.total++;
          if (problem.status === 'completed') medium.completed++;
        } else if (problem.difficulty === 'Hard') {
          hard.total++;
          if (problem.status === 'completed') hard.completed++;
        }
      });
    });
  });

  return { easy, medium, hard };
};