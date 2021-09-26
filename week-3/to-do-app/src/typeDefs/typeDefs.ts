export interface ToDoItemType {
  id: number;
  title: string;
  details: string;
  //dueDateTime:DateTime,
  completed: boolean;
}

export class ToDo implements ToDoItemType {
  id: number;
  title: string;
  details: string;
  completed: boolean;
  constructor(id: number, title: string, details: string, completed: boolean) {
    this.id = id;
    this.title = title;
    this.details = details;
    this.completed = completed;
  }
}

export type ToDoListType = ToDoItemType[];

export type InputElement = HTMLInputElement | HTMLTextAreaElement;

export {};