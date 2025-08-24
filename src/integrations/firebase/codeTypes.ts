// Types for code compilation and storage
import { Timestamp } from 'firebase/firestore';

export interface UserCode {
  id?: string;
  user_id: string;
  problem_id: string;
  language: string;
  code: string;
  timestamp?: Date | Timestamp;
  created_at?: string;
  updated_at?: string;
}

export interface TestCase {
  id?: string;
  problem_id: string;
  input: string;
  expected_output: string;
  is_hidden?: boolean;
  order_index: number;
  description?: string; // Optional description of what the test case is testing
  created_at?: string;
  updated_at?: string;
}

export interface CodeExecutionResult {
  success: boolean;
  error?: string;
  compilationError?: boolean;
  testCaseResults: TestCaseResult[];
  executionTime: number; // in milliseconds
  memoryUsed: string; // in MB
}

export interface TestCaseResult {
  passed: boolean;
  actualOutput: string;
  error?: string;
}