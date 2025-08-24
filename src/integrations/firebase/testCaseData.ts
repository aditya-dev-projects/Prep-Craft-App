import { testCaseService } from './codeServices';

/**
 * This file contains functions to initialize test cases for problems
 * It can be used to seed the database with test cases for new problems
 */

/**
 * Initialize test cases for a specific problem
 * @param problemId The ID of the problem to initialize test cases for
 */
export async function initializeTestCasesForProblem(problemId: string, problemTitle: string): Promise<void> {
  // Check if test cases already exist for this problem
  const existingTestCases = await testCaseService.getByProblemId(problemId);
  
  if (existingTestCases.length > 0) {
    console.log(`Test cases already exist for problem ${problemId}`);
    return;
  }
  
  // Define test cases based on problem title/ID
  let testCases = [];
  
  // Data Types problem
  if (problemTitle.toLowerCase().includes('data types')) {
    testCases = [
      {
        problem_id: problemId,
        input: '12\n4.0\nJavaScript',
        expected_output: '16\n8.0\nHello JavaScript',
        is_hidden: false,
        order_index: 0,
        description: 'Basic test case with integer, float and string'
      },
      {
        problem_id: problemId,
        input: '5\n2.5\nPython',
        expected_output: '9\n5.0\nHello Python',
        is_hidden: false,
        order_index: 1,
        description: 'Test with different values'
      },
      {
        problem_id: problemId,
        input: '0\n0.0\nEmpty',
        expected_output: '4\n0.0\nHello Empty',
        is_hidden: true,
        order_index: 2,
        description: 'Edge case with zeros'
      }
    ];
  }
  // User Input/Output problem
  else if (problemTitle.toLowerCase().includes('user input') || problemTitle.toLowerCase().includes('input/output')) {
    testCases = [
      {
        problem_id: problemId,
        input: 'Hello World',
        expected_output: 'Hello World',
        is_hidden: false,
        order_index: 0,
        description: 'Basic echo test'
      },
      {
        problem_id: problemId,
        input: '42',
        expected_output: '42',
        is_hidden: false,
        order_index: 1,
        description: 'Numeric input'
      },
      {
        problem_id: problemId,
        input: 'Special @#$% Characters',
        expected_output: 'Special @#$% Characters',
        is_hidden: true,
        order_index: 2,
        description: 'Special characters test'
      }
    ];
  }
  // Add more problem-specific test cases as needed
  else {
    // Default test cases if no specific ones are defined
    testCases = [
      {
        problem_id: problemId,
        input: '[1, 2, 3]',
        expected_output: '6',
        is_hidden: false,
        order_index: 0,
        description: 'Basic test case'
      },
      {
        problem_id: problemId,
        input: '[5, 10, 15]',
        expected_output: '30',
        is_hidden: false,
        order_index: 1,
        description: 'Larger numbers'
      },
      {
        problem_id: problemId,
        input: '[-1, 1, 0]',
        expected_output: '0',
        is_hidden: true,
        order_index: 2,
        description: 'Test with negative numbers and zero'
      }
    ];
  }
  
  // Create test cases in Firebase
  for (const testCase of testCases) {
    await testCaseService.create(testCase);
    console.log(`Created test case for problem ${problemId}, order ${testCase.order_index}`);
  }
  
  console.log(`Initialized ${testCases.length} test cases for problem ${problemId}`);
}