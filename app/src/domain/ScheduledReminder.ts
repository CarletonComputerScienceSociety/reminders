import ReminderStatus from "./ReminderStatus";

class ScheduledReminder {
  private id: string;
  private scheduledAt: Date;
  private status: ReminderStatus;

  constructor({
    id,
    scheduledAt,
    status,
  }: {
    id: string;
    scheduledAt: Date;
    status: ReminderStatus;
  }) {
    this.id = id;
    this.scheduledAt = scheduledAt;
    this.status = status;
  }

  public getId(): string {
    return this.id;
  }

  public getScheduledAt(): Date {
    return this.scheduledAt;
  }

  public getStatus(): ReminderStatus {
    return this.status;
  }
}

export default ScheduledReminder;
