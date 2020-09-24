interface task {
  Id: number;
  Job: string;
  Task: string;
  StartTime: string;
  EndTime: string;
}

const tasks: Array<task> = [
  {
    Id: 1,
    Job: "Work",
    Task: "Refactor",
    StartTime: "9:00am",
    EndTime: "5:00pm",
  },
  {
    Id: 2,
    Job: "Personal Project",
    Task: "Build fake service",
    StartTime: "6:00pm",
    EndTime: "8:00pm",
  },
  {
    Id: 3,
    Job: "Personal Project",
    Task: "Build fake service",
    StartTime: "6:00pm",
    EndTime: "8:00pm",
  },
  {
    Id: 4,
    Job: "Personal Project",
    Task: "Build fake service",
    StartTime: "6:00pm",
    EndTime: "8:00pm",
  },
];

export function getTasks(): Array<task> {
  return tasks;
}

export function getTask(id: number): task | null {
  const item = tasks.find(t => t.Id === id);
  return item ? item : null;
}
