export interface Topic {
  id?: string;
  topic?: string;
  duration?: number;
  user?: SelectedUser[];
  file?: string;
  completed?: boolean;
  votes_up?: SelectedUser[];
  votes_down?: SelectedUser[];
}

export interface SelectedUser {
  id: number;
  name: string;
}
