import ReminderStatus from "./ReminderStatus";

class ScheduledReminder {
  private id: string;
  private title: string;
  private description: string;
  private scheduledAt: Date;
  private status: ReminderStatus;

  constructor({
    id,
    title,
    description,
    scheduledAt,
    status,
  }: {
    id: string;
    title: string;
    description: string;
    scheduledAt: Date;
    status: ReminderStatus;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.scheduledAt = scheduledAt;
    this.status = status;
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

  public getScheduledAt(): Date {
    return this.scheduledAt;
  }

  public getStatus(): ReminderStatus {
    return this.status;
  }
}

export default ScheduledReminder;
