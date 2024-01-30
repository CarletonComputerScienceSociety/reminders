class WorkItem {
  private id: string;
  private title: string;
  private description: string;
  private completed: boolean;

  constructor({
    id,
    title,
    description,
  }: {
    id: string;
    title: string;
    description: string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  public getDescription(): string {
    return this.description;
  }

  public isCompleted(): boolean {
    return this.completed;
  }

  public complete(): void {
    this.completed = true;
  }
}

export default WorkItem;
