-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL DEFAULT 'M',

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);
