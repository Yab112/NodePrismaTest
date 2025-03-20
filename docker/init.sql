// filepath: c:\Users\USER\Documents\testProjects\upwork.Node.test_3-20-2025\node-express-prisma\docker\init.sql
CREATE TABLE IF NOT EXISTS "Data" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL
);

INSERT INTO "Data" ("name", "value") VALUES ('Test Name', 'Test Value');