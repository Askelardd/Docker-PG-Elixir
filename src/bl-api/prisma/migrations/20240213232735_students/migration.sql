-- CreateTable
CREATE TABLE "teachers" (
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "created_on" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_on" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "students" (
    "id" INTEGER NOT NULL,
    "reportingperiod" TIMESTAMP(3),
    "studentcount_201920" INTEGER,
    "attrate_202021" INTEGER,
    "attrate_ytd" INTEGER,
    "studentgroup" TEXT,
    "category" TEXT,
    "reportingdistrictcode" TEXT,
    "reportingdistrictname" TEXT,
    "attrate_201920" INTEGER,
    "studentcount_202021" INTEGER,
    "studentcount_current" INTEGER,
    "date_update" TIMESTAMP(3),

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
