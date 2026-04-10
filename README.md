Library Management System

A full-featured library management system database built using PostgreSQL.
Designed to handle real-world library operations including books, users, borrowing, reservations, fines, and analytics.

🚀 Features
📖 Book management (with multiple copies)
👤 User roles (Admin, Librarian, Reader)
🏢 Multi-branch support
🔄 Borrowing & returning system
⏳ Reservation system
💰 Fine management
⭐ Reviews & ratings
🔔 Notifications system
🧾 Audit logs
📊 Dashboard statistics (SQL View)
🧱 Database Structure
Core Entities
Branches → Library locations
Users → Admins, librarians, readers
Books → Main book records
Book Copies → Physical copies per branch
Authors → Book writers
Categories → Book classification
Publishers → Publishing houses
🔄 Operations
Borrowings → Track borrowed books
Reservations → Book reservation system
Fines → Late payment tracking
Reviews → User feedback system
Notifications → Alerts for users
Audit Logs → Track system actions
🛠️ Installation
1. Create Database
CREATE DATABASE library_system;
\c library_system;
2. Enable Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
3. Run Schema

Execute the full SQL file provided in this repository to create all tables, indexes, triggers, and views.

⚡ Advanced Features
🔁 Automatic Copy Status Update

A trigger automatically updates book copy status:

When borrowed → borrowed
When returned → available
📊 Dashboard View
SELECT * FROM full_library_stats;
Returns:
Total books
Total copies
Total users
Active loans
Total reservations
📈 Indexing

Optimized queries with indexes:

Books (title)
Authors (name)
Borrowings (user)
Reservations (user)
Copies (status)
🔐 Roles System
Role	Permissions
Admin	Full access
Librarian	Manage books & users
Reader	Borrow & review
🧠 Future Improvements
🔥 API (Next.js / Node.js)
🔥 Admin Dashboard (React + Tailwind)
🔥 Authentication system (JWT / OAuth)
🔥 Real-time notifications
🔥 PDF reports
🔥 Mobile app integration
📦 Tech Stack
PostgreSQL
SQL (Advanced queries + triggers)
Designed for integration with:
Next.js
React
REST / GraphQL APIs
💀 Author

Sadek Amine
Computer Science Student
Library SaaS System Developer 🚀

⭐ Contribution

Feel free to fork this project and improve it.
Pull requests are welcome!
