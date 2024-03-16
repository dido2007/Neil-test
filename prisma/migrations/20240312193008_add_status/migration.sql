-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "phoneNumber" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "status" TEXT NOT NULL DEFAULT 'FREE'
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name", "phoneNumber") SELECT "email", "emailVerified", "id", "image", "name", "phoneNumber" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
