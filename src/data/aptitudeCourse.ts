export interface Example {
  problem: string;
  solution: string;
}

export interface AptitudeTopic {
  name: string;
  notes: string[];
  detailedNotes: { [key: string]: string[] | { [key: string]: string[] } };
  examples: Example[];
  status: 'not-started' | 'completed' | 'in-progress';
  practiceQuestions?: { question: string; solution: string; }[];
}

export interface AptitudeChapter {
  id: string;
  chapter: string;
  topics: AptitudeTopic[];
  totalTopics: number;
  completedTopics: number;
}

export const aptitudeCourse: AptitudeChapter[] = [
  {
    id: "quantitative-aptitude",
    chapter: "Quantitative Aptitude",
    totalTopics: 13,
    completedTopics: 0,
    topics: [
      {
        name: "Number System",
        notes: [
          "A number system is a systematic way of expressing and representing numbers.",
          "It includes a set of symbols, rules, and conventions for counting and performing arithmetic operations."
        ],
        detailedNotes: {
          "Real Numbers": [
            "Rational Numbers",
            "Irrational Numbers"
          ],
          "Integers": [
            "Negative Integers",
            "Zero",
            "Positive Integers"
          ],
        },
        examples: [
          {
            problem: "Find the remainder when 98 is divided by 7.",
            solution: "Step 1: Divide 98 by 7. 98 / 7 = 14. Step 2: The remainder is 0."
          },
          {
            problem: "What is the largest 3-digit number divisible by 13?",
            solution: "Step 1: The largest 3-digit number is 999. Step 2: Divide 999 by 13. 999 = 13 * 76 + 11. Step 3: Subtract the remainder from 999. 999 - 11 = 988. So, 988 is the largest 3-digit number divisible by 13."
          }
        ],
        status: "not-started",
        practiceQuestions: [
          {
            question: "Q.1 1 + 2 + 3 + ⋯ . . +30 =?",
            solution: "Sol.\nn(n + 1)\n2\n=\n30 × 31\n2\n= 15 × 31\n= 45"
          },
          {
            question: "Q.2 12 + 22 + 32 + ⋯ + 122 =?",
            solution: "Sol.\nn(n + 1)(2n + 1)\n6\n=\n12 × 13 × 25\n6\n= 50 × 13\n= 650"
          },
          {
            question: "Q.3 13 + 23 + 33 + ⋯ ⋅ +93 =?",
            solution: "Sol. ቈ\nn(n + 1)\n2\n቉\n2\n= (\n9 × 10\n2\n)\n2\n= 452\n= 2025"
          },
          {
            question: "Q.4 1 + 3 + 5 + ⋯ + 49 =?",
            solution: "Sol. x2\nWe know, x = n+1\n2\n=\n49 + 1\n2\n= 25\n∴ x2 = (25)2\n= 625"
          },
          {
            question: "Q.5 2 + 4 + 6 + ⋯ + 5 + 58 =?",
            solution: "Sol. x(x + 1)\nWe Know, x = n\n2\n=\n58\n2\n= 29\n∴ x(x + 1) = 29(29 + 1)\n= 29 × 30\n6\n= 870"
          },
          {
            question: "Q.6 51 + 53 + 55. … + 99 =?",
            solution: "Sol. (1 + 3 + 5 + ⋯ 99) − (1 + 3 + 5 ⋯ + 49)\nFor 1 + 3 + 5 + ⋯ 99\nby using formula: x2\n𝐓𝐫𝐢𝐜𝐤: x =\nn + 1\n2\n=\n99 + 1\n2\nx = 50\nx2 = (50)2\n= 2500\nFor 1 + 3 + 5 ⋯ + 49\nSolving : (1 + 3 + 5 + ⋯ 99) − (1 + 3 + 5 ⋯ + 49)\n= 2500 − 625\n= 1875\nThis method can be used when series starts from random number in between. That is series doesn't\nstarts from 1, 2 etc."
          },
          {
            question: "Q.7 102 + 112 + 122 + ⋯ + 202 =?",
            solution: ""
          }
        ]
      },
      {
        name: "LCM & HCF",
        notes: [
            "LCM (Least Common Multiple) is the smallest number that is a multiple of two or more numbers.",
            "HCF (Highest Common Factor) is the largest number that divides two or more numbers."
        ],
        detailedNotes: {
          "Introduction": [
            "Think of LCM and HCF as two different tools for solving puzzles. HCF helps you find the best way to share or divide things into equal pieces, while LCM helps you figure out when things will happen together again."
          ],
          "HCF (Highest Common Factor): The \"Greatest Sharer\"": [
            "The HCF, also known as the Greatest Common Divisor (GCD), is the largest possible number that can divide a set of numbers without leaving any remainder.",
            "Analogy: Imagine you have two ribbons, one 12 meters long and the other 18 meters long. You want to cut both ribbons into smaller pieces of equal length, but you want these pieces to be as long as possible. The length of the longest possible piece you can cut is the HCF of 12 and 18."
          ],
          "How to Find the HCF": [
            "The easiest and most reliable method is Prime Factorization.",
            "Step 1: Break down each number into its prime factors (its \"building blocks\").",
            "Step 2: List all the common prime factors that appear in every number.",
            "Step 3: For each common factor, choose the one with the lowest power.",
            "Step 4: Multiply these chosen factors together to get the HCF.",
            "Example: Find the HCF of 24 and 36.",
            "Step 1 (Factorize): 24 = 2^3 x 3^1, 36 = 2^2 x 3^2",
            "Step 2 (Find Commons): The common prime factors are 2 and 3.",
            "Step 3 (Pick Lowest Powers): The lowest power of 2 is 2^2. The lowest power of 3 is 3^1.",
            "Step 4 (Multiply): HCF = 2^2 x 3^1 = 4 x 3 = 12."
          ],
          "LCM (Least Common Multiple): The \"First Meeting Point\"": [
            "The LCM is the smallest possible number that is a multiple of all the numbers in a set. In other words, it's the smallest number that all the given numbers can divide into perfectly.",
            "Analogy: Imagine two people are running around a circular track. Person A completes a lap in 3 minutes, and Person B completes a lap in 4 minutes. If they start at the same time, when will they be at the starting line together again for the first time? This \"first meeting point\" is the LCM of 3 and 4."
          ],
          "How to Find the LCM": [
            "We use Prime Factorization again, but with a slightly different rule.",
            "Step 1: Break down each number into its prime factors.",
            "Step 2: List ALL the prime factors that appear in any of the numbers.",
            "Step 3: For each prime factor, choose the one with the highest power.",
            "Step 4: Multiply these chosen factors together to get the LCM.",
            "Example: Find the LCM of 24 and 36.",
            "Step 1 (Factorize): 24 = 2^3 x 3^1, 36 = 2^2 x 3^2",
            "Step 2 (Find ALL Factors): The prime factors involved are 2 and 3.",
            "Step 3 (Pick Highest Powers): The highest power of 2 is 2^3. The highest power of 3 is 3^2.",
            "Step 4 (Multiply): LCM = 2^3 x 3^2 = 8 x 9 = 72."
          ],
          "The Golden Rule: Connecting HCF and LCM": [
            "For any two positive numbers, A and B, there is a beautiful relationship between them and their HCF and LCM.",
            "Formula: HCF(A, B) × LCM(A, B) = A × B",
            "Why it's useful: This is one of the most frequently tested concepts! If you are given any three of these values, you can instantly find the fourth.",
            "Example: For our numbers 24 and 36: HCF = 12, LCM = 72. HCF × LCM = 12 × 72 = 864. Product of numbers = 24 × 36 = 864. They match perfectly!"
          ],
          "HCF and LCM of Fractions": [
            "Yes, you can find the HCF and LCM for fractions too! The rules are simple and opposite to each other.",
            "LCM of Fractions: You want the final fraction to be as \"large\" as possible. So, you make the top (numerator) large and the bottom (denominator) small. Formula: LCM of Fractions = (LCM of Numerators) / (HCF of Denominators)",
            "HCF of Fractions: You want the final fraction to be as \"small\" as possible. So, you make the top small and the bottom large. Formula: HCF of Fractions = (HCF of Numerators) / (LCM of Denominators)",
            "Example: Find the LCM of 2/3 and 4/9. Step 1 (LCM of Numerators): LCM of (2, 4) is 4. Step 2 (HCF of Denominators): HCF of (3, 9) is 3. Step 3 (Combine): The LCM is 4/3."
          ],
          "Word Problems: When to Use Which Tool?": {
            "Use HCF when the problem involves:": [
              "Splitting things into smaller sections.",
              "Finding the largest size for items (like tiles to pave a floor).",
              "Arranging things into rows or groups with an equal number of items.",
              "Keywords: \"Greatest\", \"Largest\", \"Maximum\", \"Highest\", \"Dividing equally\"."
            ],
            "Use LCM when the problem involves:": [
              "Finding a future point in time when events will happen together.",
              "Combining things that are in different cycles.",
              "Keywords: \"Least\", \"Smallest\", \"Minimum\", \"Together\", \"Simultaneously\", \"Next time\".",
              "Classic examples: Traffic lights changing, bells ringing, runners on a circular track."
            ]
          }
        },
        examples: [
          {
            problem: "Find the HCF of 50 and 75.",
            solution: "Step 1: Prime factors of 50 are 2 * 5 * 5. Step 2: Prime factors of 75 are 3 * 5 * 5. Step 3: Common factors are 5 * 5 = 25. So, HCF is 25."
          },
          {
            problem: "Find the LCM of 12, 15, and 20.",
            solution: "Step 1: Prime factors of 12 are 2 * 2 * 3. Step 2: Prime factors of 15 are 3 * 5. Step 3: Prime factors of 20 are 2 * 2 * 5. Step 4: LCM is 2 * 2 * 3 * 5 = 60."
          }
        ],
        status: "not-started"
      },
      {
        name: "Percentages",
        notes: [
            "Percentage means ‘per hundred’ and is represented by the symbol %.",
            "It is a fraction or a ratio in which the value of the whole is always 100."
        ],
        detailedNotes: {
          "Definition": ["Percentage means per hundred. It is denoted using the symbol '%'"],
          "Conversion": [
            "Fraction to Percentage: (part/whole) × 100",
            "Percentage to Fraction: percentage ÷ 100"
          ],
        },
        examples: [
          {
            problem: "If a student scores 240 marks out of 300, what percentage did he score?",
            solution: "Step 1: (240 / 300) * 100. Step 2: 0.8 * 100 = 80%."
          },
          {
            problem: "The price of a shirt is increased by 20%. If it was originally ₹500, what is the new price?",
            solution: "Step 1: Increase amount = 20% of 500 = (20/100) * 500 = ₹100. Step 2: New price = 500 + 100 = ₹600."
          }
        ],
        status: "not-started"
      },
      {
        name: "Profit & Loss",
        notes: [
            "Profit is the gain made from a transaction, while loss is the amount lost.",
            "These concepts are central to commercial arithmetic."
        ],
        detailedNotes: {
            "Key Terms": ["Cost Price (CP)", "Selling Price (SP)", "Profit (P)", "Loss (L)"],
            "Formulas": [
                "Profit = SP - CP",
                "Loss = CP - SP",
            ]
        },
        examples: [
          {
            problem: "A book bought for ₹200 was sold at ₹250. Find the profit percentage.",
            solution: "Step 1: Profit = 250 - 200 = ₹50. Step 2: Profit % = (50 / 200) * 100 = 25%."
          },
          {
            problem: "A shopkeeper sells a phone at a 10% loss. If the cost price is ₹12,000, what is the selling price?",
            solution: "Step 1: Loss = 10% of 12000 = ₹1200. Step 2: Selling Price = 12000 - 1200 = ₹10800."
          }
        ],
        status: "not-started"
      },
      {
        name: "Simple & Compound Interest",
        notes: [
            "Simple interest is calculated on the principal amount.",
            "Compound interest is calculated on the principal amount and the accumulated interest."
        ],
        detailedNotes: {
            "Simple Interest (SI)": ["SI = (P * R * T) / 100"],
            "Compound Interest (CI)": ["A = P(1 + R/100)^T", "CI = A - P"]
        },
        examples: [
            {
                problem: "Calculate the simple interest on ₹5000 for 2 years at 8% per annum.",
                solution: "SI = (5000 * 8 * 2) / 100 = ₹800."
            },
            {
                problem: "Find the compound interest on ₹10000 for 2 years at 10% per annum.",
                solution: "A = 10000(1 + 10/100)^2 = 10000 * (1.1)^2 = 12100. CI = 12100 - 10000 = ₹2100."
            }
        ],
        status: "not-started"
      },
      {
        name: "Ratio & Proportion",
        notes: [
            "A ratio compares two quantities.",
            "A proportion is an equation that states that two ratios are equal."
        ],
        detailedNotes: {
            "Ratio": ["Compares two quantities of the same unit."],
            "Proportion": ["An equality of two ratios."]
        },
        examples: [
            {
                problem: "If a:b = 2:3 and b:c = 4:5, find a:b:c.",
                solution: "a:b = 2:3, b:c = 4:5. To make b common, multiply first ratio by 4 and second by 3. a:b = 8:12, b:c = 12:15. So, a:b:c = 8:12:15."
            },
            {
                problem: "Divide ₹1200 in the ratio 2:3.",
                solution: "Sum of ratios = 2 + 3 = 5. First part = (2/5) * 1200 = ₹480. Second part = (3/5) * 1200 = ₹720."
            }
        ],
        status: "not-started"
      },
      {
        name: "Time, Speed & Distance",
        notes: [
            "These three quantities are related by the formula: Distance = Speed × Time.",
            "Units must be consistent (e.g., km/hr and hours)."
        ],
        detailedNotes: {
            "Formula": ["Distance = Speed × Time"]
        },
        examples: [
            {
                problem: "A car travels at 60 km/hr. How far will it travel in 3 hours?",
                solution: "Distance = 60 * 3 = 180 km."
            },
            {
                problem: "A train 100m long is running at 30 km/hr. Find the time taken to pass a man standing near the railway line.",
                solution: "Speed in m/s = 30 * (5/18) = 25/3 m/s. Time = Distance / Speed = 100 / (25/3) = 12 seconds."
            }
        ],
        status: "not-started"
      },
      {
        name: "Time & Work",
        notes: [
            "This topic deals with the efficiency of individuals or groups.",
            "The total work is usually considered as 1 unit."
        ],
        detailedNotes: {
            "Concepts": ["Work is assumed to be 1 unit if not specified.", "Efficiency is the rate of doing work."],
        },
        examples: [
          {
            problem: "A can complete a work in 10 days and B in 15 days. How many days will they take together?",
            solution: "A's 1 day work = 1/10. B's 1 day work = 1/15. (A+B)'s 1 day work = 1/10 + 1/15 = 1/6. They will take 6 days."
          },
          {
            problem: "If 8 workers can build a wall in 12 days, how many workers are required to build it in 6 days?",
            solution: "Let x be the number of workers. 8 * 12 = x * 6. x = (8 * 12) / 6 = 16 workers."
          }
        ],
        status: "not-started"
      },
      {
        name: "Averages & Mixtures",
        notes: [
            "Average is the central value of a set of numbers.",
            "Mixtures involve combining two or more substances."
        ],
        detailedNotes: {
            "Average": ["Sum of observations / Number of observations"],
            "Mixture": ["The rule of alligation is used to find the ratio in which two or more ingredients at the given price must be mixed."]
        },
        examples: [
            {
                problem: "Find the average of the first 10 natural numbers.",
                solution: "Sum = (10 * 11) / 2 = 55. Average = 55 / 10 = 5.5."
            },
            {
                problem: "In what ratio must a grocer mix two varieties of pulses costing ₹15 and ₹20 per kg respectively so as to get a mixture worth ₹16.50 kg?",
                solution: "By the rule of alligation, ratio = (20 - 16.50) : (16.50 - 15) = 3.50 : 1.50 = 7:3."
            }
        ],
        status: "not-started"
      },
      {
        name: "Permutations & Combinations",
        notes: [
            "Permutation is about arrangement.",
            "Combination is about selection."
        ],
        detailedNotes: {
            "Permutation": ["Arrangement of objects in a definite order."],
            "Combination": ["Selection of objects where order does not matter."]
        },
        examples: [
            {
                problem: "How many 3-letter words can be formed from the letters of the word 'CAT'?",
                solution: "3P3 = 3! = 3 * 2 * 1 = 6."
            },
            {
                problem: "From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there on the committee. In how many ways can it be done?",
                solution: "(7C3 * 6C2) + (7C4 * 6C1) + (7C5) = (35 * 15) + (35 * 6) + 21 = 525 + 210 + 21 = 756."
            }
        ],
        status: "not-started"
      },
      {
        name: "Probability",
        notes: [
            "Probability is the measure of the likelihood of an event.",
            "The value of probability ranges from 0 to 1."
        ],
        detailedNotes: {
            "Terms": ["Experiment", "Sample Space", "Event"],
            "Formula": ["P(E) = (Number of favorable outcomes) / (Total number of outcomes)"]
        },
        examples: [
          {
            problem: "A dice is rolled once. What is the probability of getting an even number?",
            solution: "Favorable outcomes = {2, 4, 6}. Total outcomes = {1, 2, 3, 4, 5, 6}. P(Even) = 3/6 = 1/2."
          },
          {
            problem: "Two cards are drawn from a deck. What is the probability that both are aces?",
            solution: "P(Both Aces) = (4/52) * (3/51) = 1/221."
          }
        ],
        status: "not-started"
      },
      {
        name: "Algebra",
        notes: [
            "Algebra is a branch of mathematics that uses letters and other symbols to represent numbers and quantities in formulae and equations.",
            "It deals with solving for unknown variables."
        ],
        detailedNotes: {
            "Linear Equations": ["Equations of the form ax + b = 0"],
            "Quadratic Equations": ["Equations of the form ax^2 + bx + c = 0"]
        },
        examples: [
            {
                problem: "Solve for x: 2x + 5 = 15",
                solution: "2x = 15 - 5 => 2x = 10 => x = 5."
            },
            {
                problem: "Find the roots of the equation x^2 - 5x + 6 = 0",
                solution: "x^2 - 3x - 2x + 6 = 0 => x(x-3) - 2(x-3) = 0 => (x-2)(x-3) = 0. Roots are x=2, x=3."
            }
        ],
        status: "not-started"
      },
      {
        name: "Geometry & Mensuration",
        notes: [
            "Geometry deals with properties of space.",
            "Mensuration deals with the measurement of geometric figures."
        ],
        detailedNotes: {
            "2D Shapes": ["Triangle, Square, Rectangle, Circle"],
            "3D Shapes": ["Cube, Cuboid, Cylinder, Sphere"]
        },
        examples: [
            {
                problem: "Find the area of a circle with radius 7cm.",
                solution: "Area = π * r^2 = (22/7) * 7 * 7 = 154 sq.cm."
            },
            {
                problem: "Calculate the volume of a cube with side 5cm.",
                solution: "Volume = side^3 = 5^3 = 125 cubic cm."
            }
        ],
        status: "not-started"
      }
    ]
  },
  {
    id: "logical-reasoning",
    chapter: "Logical Reasoning",
    totalTopics: 9,
    completedTopics: 0,
    topics: [
      {
        name: "Puzzles",
        notes: [
            "Puzzles test your analytical and problem-solving skills.",
            "They often involve arranging people or objects based on given conditions."
        ],
        detailedNotes: {
            "Types": ["Seating Arrangement (Linear, Circular)", "Floor Puzzles", "Scheduling Puzzles"]
        },
        examples: [
          {
            problem: "Five friends are sitting in a row. A is left of B but right of C. Who is in the middle?",
            solution: "The arrangement is C, A, B. So, A is in the middle."
          },
          {
            problem: "Six boxes are stacked. Which one is on top if A is below B and C is above D?",
            solution: "The information is insufficient to determine which box is on top."
          }
        ],
        status: "not-started"
      },
      {
        name: "Syllogisms",
        notes: [
            "Syllogisms are a form of deductive reasoning.",
            "You need to draw a conclusion from two given or assumed propositions."
        ],
        detailedNotes: {
            "Components": ["Major Premise", "Minor Premise", "Conclusion"]
        },
        examples: [
            {
                problem: "Statements: All dogs are animals. All animals have four legs. Conclusion: All dogs have four legs.",
                solution: "This is a valid conclusion as it follows from the given premises."
            }
        ],
        status: "not-started"
      },
      {
        name: "Blood Relations",
        notes: [
            "These questions test your ability to understand family relationships.",
            "Drawing a family tree is often helpful."
        ],
        detailedNotes: {
            "Types of Relations": ["Direct", "Indirect"],
            "Common Representations": ["Family Tree Diagram"]
        },
        examples: [
          {
            problem: "Pointing to a photo, Ramesh said 'She is my mother’s only daughter’s daughter'. Who is she to Ramesh?",
            solution: "Ramesh's mother's only daughter is Ramesh's sister. Her daughter is Ramesh's niece."
          },
          {
            problem: "A is B’s father, B is C’s sister. How is A related to C?",
            solution: "A is the father of both B and C. So, A is C's father."
          }
        ],
        status: "not-started"
      },
      {
        name: "Coding-Decoding",
        notes: [
            "This involves encoding a message according to a certain rule and decoding it.",
            "The rule can be based on letter positions, opposites, etc."
        ],
        detailedNotes: {
            "Types": ["Letter Coding", "Number Coding", "Symbol Coding"]
        },
        examples: [
          {
            problem: "If CAT = DBU, how is DOG coded?",
            solution: "Each letter is shifted one position forward. So, DOG becomes EPH."
          },
          {
            problem: "In a certain code, 'HELLO' is written as 'JGNNQ'. How is 'WORLD' written?",
            solution: "The logic is +2, +2, +2, +2, +2. So, WORLD becomes YQTNF."
          }
        ],
        status: "not-started"
      },
      {
        name: "Direction Sense",
        notes: [
            "These questions test your sense of direction.",
            "You need to keep track of the person's or object's movement."
        ],
        detailedNotes: {
            "Directions": ["North, South, East, West"]
        },
        examples: [
            {
                problem: "A man walks 5 km east and then 10 km south. What is his shortest distance from the starting point?",
                solution: "By Pythagoras theorem, shortest distance = sqrt(5^2 + 10^2) = sqrt(125) = 5 * sqrt(5) km."
            }
        ],
        status: "not-started"
      },
      {
        name: "Series",
        notes: [
            "A series is a sequence of numbers, letters, or figures with a certain pattern.",
            "You need to identify the pattern to find the missing term."
        ],
        detailedNotes: {
            "Types": ["Number Series", "Letter Series", "Figure Series"]
        },
        examples: [
            {
                problem: "Find the next term in the series: 2, 5, 10, 17, ?",
                solution: "The pattern is n^2 + 1. So, the next term is 5^2 + 1 = 26."
            },
            {
                problem: "What comes next in the series: A, C, F, J, ?",
                solution: "The gap between letters increases by 1 each time. A (+2) C (+3) F (+4) J (+5) O."
            }
        ],
        status: "not-started"
      },
      {
        name: "Data Sufficiency",
        notes: [
            "You need to determine if the given data is sufficient to answer the question.",
            "You don't need to solve the problem, just check for sufficiency."
        ],
        detailedNotes: {
            "Options": ["Statement I alone is sufficient", "Statement II alone is sufficient", "Both statements are needed", "Either statement is sufficient", "Both statements are not sufficient"]
        },
        examples: [
            {
                problem: "Question: What is the value of x? Statements: I. x + y = 5, II. x - y = 1",
                solution: "Both statements are needed to solve for x and y."
            }
        ],
        status: "not-started"
      },
      {
        name: "Analogies",
        notes: [
            "An analogy is a comparison between two things.",
            "You need to find the relationship between the first pair and apply it to the second."
        ],
        detailedNotes: {
            "Types": ["Word Analogy", "Number Analogy"]
        },
        examples: [
            {
                problem: "Dog is to Puppy as Cat is to ?",
                solution: "Kitten."
            },
            {
                problem: "8 is to 64 as 9 is to ?",
                solution: "81 (8^2 = 64, 9^2 = 81)."
            }
        ],
        status: "not-started"
      },
      {
        name: "Statement & Conclusion",
        notes: [
            "You need to draw a valid conclusion from a given statement.",
            "The conclusion must be based solely on the information given in the statement."
        ],
        detailedNotes: {
            "Key": ["The conclusion should be drawn only from the statement."]
        },
        examples: [
            {
                problem: "Statement: In a one-day cricket match, the total runs made by a team were 200. Out of these 160 runs were made by spinners. Conclusion: 80% of the team consists of spinners.",
                solution: "The conclusion is not valid. We only know about the runs, not the composition of the team."
            }
        ],
        status: "not-started"
      }
    ]
  },
  {
    id: "data-interpretation",
    chapter: "Data Interpretation (DI)",
    totalTopics: 5,
    completedTopics: 0,
    topics: [
      {
        name: "Tables",
        notes: [
            "Data is presented in rows and columns.",
            "You need to read the data carefully and perform calculations."
        ],
        detailedNotes: {
            "Skills Required": ["Reading data from rows and columns", "Calculating Averages, Percentages, Ratios"]
        },
        examples: [
          {
            problem: "The following table shows marks of 3 students. Find who scored the highest average.",
            solution: "Calculate the average for each student and compare."
          },
          {
            problem: "In a table of population by year, find the growth rate between 2010 and 2020.",
            solution: "Growth Rate = ((Population in 2020 - Population in 2010) / Population in 2010) * 100."
          }
        ],
        status: "not-started"
      },
      {
        name: "Bar Graphs",
        notes: [
            "Bar graphs use bars to compare data among different categories.",
            "The length of the bar is proportional to the value it represents."
        ],
        detailedNotes: {
            "Types": ["Simple Bar Graph", "Grouped Bar Graph", "Stacked Bar Graph"]
        },
        examples: [
          {
            problem: "The bar graph shows sales of books across 5 years. Find the average sales.",
            solution: "Sum the sales for all 5 years and divide by 5."
          },
          {
            problem: "Which year had the maximum percentage increase in sales?",
            solution: "Calculate the percentage increase for each year compared to the previous year and find the maximum."
          }
        ],
        status: "not-started"
      },
      {
        name: "Line Graphs",
        notes: [
            "Line graphs are used to show trends over a period of time.",
            "They are created by connecting a series of data points."
        ],
        detailedNotes: {
            "Use": ["To show trends over time."]
        },
        examples: [
            {
                problem: "The line graph shows the temperature of a city over a week. Find the average temperature.",
                solution: "Sum the temperatures for all 7 days and divide by 7."
            }
        ],
        status: "not-started"
      },
      {
        name: "Pie Charts",
        notes: [
            "A pie chart is a circular graph that is divided into slices to illustrate numerical proportion.",
            "The whole pie represents 100%."
        ],
        detailedNotes: {
            "Key": ["The sum of all percentages is 100."]
        },
        examples: [
            {
                problem: "The pie chart shows the distribution of expenses of a family. If the total monthly income is ₹20000, find the expenditure on food.",
                solution: "Find the percentage for food and multiply it by the total income."
            }
        ],
        status: "not-started"
      },
      {
        name: "Caselets",
        notes: [
            "A caselet is a paragraph of information.",
            "You need to read the paragraph carefully and extract the data to answer the questions."
        ],
        detailedNotes: {
            "Skill": ["Extracting data and organizing it into a table or diagram."]
        },
        examples: [
            {
                problem: "A paragraph describing the number of students in different departments of a college and their preferences for different sports.",
                solution: "Read the paragraph, create a table to organize the data, and then answer the questions based on the table."
            }
        ],
        status: "not-started"
      }
    ]
  },
  {
    id: "verbal-ability",
    chapter: "Verbal Ability",
    totalTopics: 5,
    completedTopics: 0,
    topics: [
      {
        name: "Reading Comprehension",
        notes: [
            "This tests your ability to read and understand a passage.",
            "You need to answer questions based on the information given in the passage."
        ],
        detailedNotes: {
            "Question Types": ["Main Idea", "Inference", "Vocabulary-in-context"]
        },
        examples: [
          {
            problem: "Read the passage and answer: What is the author’s main argument?",
            solution: "Read the passage to understand the central theme and the author's point of view."
          },
          {
            problem: "According to the passage, what does the phrase 'economic downturn' imply?",
            solution: "Look for the context in which the phrase is used in the passage to understand its meaning."
          }
        ],
        status: "not-started"
      },
      {
        name: "Sentence Correction",
        notes: [
            "This tests your knowledge of grammar and sentence structure.",
            "You need to identify and correct errors in a sentence."
        ],
        detailedNotes: {
            "Common Errors": ["Subject-Verb Agreement", "Tense Errors", "Pronoun Errors", "Misplaced Modifiers"]
        },
        examples: [
          {
            problem: "Choose the correct sentence: (a) He go to school everyday (b) He goes to school every day",
            solution: "(b) is correct because the subject 'He' is singular, so the verb should be 'goes'."
          },
          {
            problem: "Find the error: 'She don’t like apples.'",
            solution: "The error is 'don’t'. It should be 'doesn’t' because the subject 'She' is singular."
          }
        ],
        status: "not-started"
      },
      {
        name: "Para Jumbles",
        notes: [
            "You are given a set of sentences that are jumbled up.",
            "You need to arrange them in a logical order to form a coherent paragraph."
        ],
        detailedNotes: {
            "Tips": ["Look for the opening sentence", "Find logical connections between sentences"]
        },
        examples: [
            {
                problem: "Arrange the following sentences in a logical order: A. The cat sat on the mat. B. It was a fluffy, white cat. C. The mat was in front of the fireplace.",
                solution: "The logical order is B, A, C."
            }
        ],
        status: "not-started"
      },
      {
        name: "Synonyms/Antonyms",
        notes: [
            "Synonyms are words with similar meanings.",
            "Antonyms are words with opposite meanings."
        ],
        detailedNotes: {
            "Synonym": ["A word having the same or nearly the same meaning as another."],
            "Antonym": ["A word opposite in meaning to another."]
        },
        examples: [
            {
                problem: "Find the synonym of 'happy'.",
                solution: "Joyful, cheerful, delighted."
            },
            {
                problem: "What is the antonym of 'beautiful'?",
                solution: "Ugly, unattractive."
            }
        ],
        status: "not-started"
      },
      {
        name: "Fill in the blanks",
        notes: [
            "You need to fill in the blank with the most appropriate word.",
            "This tests your vocabulary and grammar."
        ],
        detailedNotes: {
            "Skills Tested": ["Vocabulary", "Grammar"]
        },
        examples: [
            {
                problem: "The sun ___ in the east.",
                solution: "rises."
            }
        ],
        status: "not-started"
      }
    ]
  }
];