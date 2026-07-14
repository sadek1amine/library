-- ==========================================
-- LOCAL POSTGRESQL INITIALIZATION SCRIPT
-- University Library Management System
-- ==========================================

-- STEP 1: (Optional) Create the database manually or run this command in your PostgreSQL terminal:
-- CREATE DATABASE library_db;

-- Connect to your database before running the rest of the script.
-- \c library_db;

-- Enable UUID extension (usually enabled by default in modern pg versions, but good practice to ensure)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- STEP 2: Create custom Enum types
CREATE TYPE "status" AS ENUM('PENDING', 'APPROVED', 'REJECTED');
CREATE TYPE "role" AS ENUM('USER', 'ADMIN');
CREATE TYPE "borrow_status" AS ENUM('BORROWED', 'RETURNED');

-- STEP 3: Create 'users' table
CREATE TABLE IF NOT EXISTS "users" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "full_name" varchar(255) NOT NULL,
    "email" text NOT NULL,
    "university_id" integer NOT NULL,
    "password" text NOT NULL,
    "university_card" text NOT NULL,
    "status" "status" DEFAULT 'PENDING',
    "role" "role" DEFAULT 'USER',
    "last_activity_date" date DEFAULT now(),
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT "users_id_unique" UNIQUE("id"),
    CONSTRAINT "users_email_unique" UNIQUE("email"),
    CONSTRAINT "users_university_id_unique" UNIQUE("university_id")
);

-- STEP 4: Create 'books' table
CREATE TABLE IF NOT EXISTS "books" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "title" varchar(255) NOT NULL,
    "author" varchar(255) NOT NULL,
    "genre" text NOT NULL,
    "rating" integer NOT NULL,
    "cover_url" text NOT NULL,
    "cover_color" varchar(7) NOT NULL,
    "description" text NOT NULL,
    "total_copies" integer DEFAULT 1 NOT NULL,
    "available_copies" integer DEFAULT 0 NOT NULL,
    "video_url" text NOT NULL,
    "summary" varchar NOT NULL,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT "books_id_unique" UNIQUE("id")
);

-- STEP 5: Create 'borrow_records' table
CREATE TABLE IF NOT EXISTS "borrow_records" (
    "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
    "user_id" uuid NOT NULL,
    "book_id" uuid NOT NULL,
    "borrow_date" timestamp with time zone DEFAULT now() NOT NULL,
    "due_date" date NOT NULL,
    "return_date" date,
    "status" "borrow_status" DEFAULT 'BORROWED' NOT NULL,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT "borrow_records_id_unique" UNIQUE("id")
);

-- STEP 6: Add Relationships & Foreign Keys
ALTER TABLE "borrow_records" 
    ADD CONSTRAINT "borrow_records_user_id_users_id_fk" 
    FOREIGN KEY ("user_id") 
    REFERENCES "users"("id") 
    ON DELETE NO ACTION 
    ON UPDATE NO ACTION;

ALTER TABLE "borrow_records" 
    ADD CONSTRAINT "borrow_records_book_id_books_id_fk" 
    FOREIGN KEY ("book_id") 
    REFERENCES "books"("id") 
    ON DELETE NO ACTION 
    ON UPDATE NO ACTION;
