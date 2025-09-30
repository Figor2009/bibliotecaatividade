-- CreateTable
CREATE TABLE "Books" (
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Books_author_key" ON "Books"("author");
