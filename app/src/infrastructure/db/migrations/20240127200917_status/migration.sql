/*
  Warnings:

  - Added the required column `status` to the `ScheduledReminder` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ScheduledReminder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "scheduledAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ScheduledReminder" ("createdAt", "id", "scheduledAt", "updatedAt") SELECT "createdAt", "id", "scheduledAt", "updatedAt" FROM "ScheduledReminder";
DROP TABLE "ScheduledReminder";
ALTER TABLE "new_ScheduledReminder" RENAME TO "ScheduledReminder";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
