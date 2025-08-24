// Firebase Firestore types
export interface Chapter {
  id: string;
  title: string;
  description?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
  created_by?: string;
}

export interface Lecture {
  id: string;
  chapter_id: string;
  title: string;
  content?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
  created_by?: string;
}

export interface Problem {
  id: string;
  lecture_id: string;
  title: string;
  description?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  order_index: number;
  created_at: string;
  updated_at: string;
  created_by?: string;
}

export interface Link {
  id: string;
  lecture_id: string;
  title: string;
  url: string;
  link_type: 'article' | 'video' | 'practice';
  order_index: number;
  created_at: string;
  updated_at: string;
  created_by?: string;
}

export interface Profile {
  id: string;
  display_name?: string;
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'user';
  created_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  chapter_id?: string;
  lecture_id?: string;
  problem_id?: string;
  completed: boolean;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

export type AppRole = 'admin' | 'user'; 