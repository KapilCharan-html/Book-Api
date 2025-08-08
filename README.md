# 📚 Book API

A simple and lightweight RESTful API built with **Node.js** and **Express.js** to manage a list of books. Ideal for beginners learning backend development and REST principles.

---

## 🛠️ Features

- Get a list of all books
- Get a specific book by ID
- Add a new book
- Update an existing book
- Delete a book

---

## 🧰 Tech Stack

- Node.js
- Express.js

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
2. Install Dependencies
bash
Copy
Edit
npm install
3. Run the Server
bash
Copy
Edit
node index.js
The server will start at:

arduino
Copy
Edit
http://localhost:3000
📂 API Endpoints
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
POST	/books	Add a new book
PUT	/books/:id	Update book by ID
DELETE	/books/:id	Delete book by ID

✅ Sample POST Body
json
Copy
Edit
{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}
📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
Kapil Charan
GitHub

vbnet
Copy
Edit

Would you like me to generate a downloadable `.md` file too?







You said:
in one page full readme


ChatGPT said:
Sure! Here's a complete one-page README.md file for your Book API project, compact and professional:

markdown
Copy
Edit
# 📚 Book API

A lightweight RESTful API built with **Node.js** and **Express.js** for managing a collection of books. Perfect for learning CRUD operations and building backend fundamentals.

---

## 🚀 Quick Start

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
Install Dependencies

bash
Copy
Edit
npm install
Start the Server

bash
Copy
Edit
node index.js
Server runs at: http://localhost:3000

🛠️ API Endpoints
Method	Route	Description
GET	/books	Get all books
GET	/books/:id	Get a book by ID
POST	/books	Add a new book
PUT	/books/:id	Update a book by ID
DELETE	/books/:id	Delete a book by ID

📝 Sample Request Body for POST/PUT
{
  "title": "1984",
  "author": "George Orwell"
}
📂 Project Structure
book-api/
├── index.js         # Entry point and routes
├── package.json     # Project metadata
📄 License
Licensed under the MIT License.

🙋‍♂️ Author
Kapil Charan
