export interface Topic {
  id?: string;
  topic?: string;
  duration?: string;
  user?: SelectedUser[];
  file?: string;
  completed?: boolean;
}

export interface SelectedUser {
  id: number;
  name: string;
}
