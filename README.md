Sure, here is a README file for your Contact List Application:

---

# Contact List Application

## Overview

This Contact List Application is a simple web-based application for managing contacts. Users can add, update, delete, and view contacts. The application consists of a frontend built with HTML, CSS, and JavaScript, and a backend server built with Node.js and Express.js.

## Features

- Add new contacts
- Update existing contacts
- Delete contacts
- Display contacts with a title "My Saved Contacts"
- Validate form fields to ensure no fields are left empty

## Project Structure

```
contact-app/
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
├── server.js
```

## API Endpoints

### 1. Get all contacts
- **Route**: `GET /contacts`
- **Description**: Returns a list of all contacts in the collection.
- **Response**:
  ```json
  [
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "phone": "123-456-7890"
    },
    ...
  ]
  ```

### 2. Create a new contact
- **Route**: `POST /contacts`
- **Description**: Creates a new contact in the collection.
- **Request Body**:
  ```json
  {
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "phone": "098-765-4321"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Contact added successfully",
    "contact": {
      "id": 2,
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "jane.doe@example.com",
      "phone": "098-765-4321"
    }
  }
  ```

### 3. Update a contact by ID
- **Route**: `PUT /contacts/:id`
- **Description**: Updates an existing contact by its ID.
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@example.com",
    "phone": "123-456-7890"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Contact updated successfully"
  }
  ```

### 4. Delete a contact by ID
- **Route**: `DELETE /contacts/:id`
- **Description**: Deletes a contact by its ID.
- **Response**:
  ```json
  {
    "message": "Contact deleted successfully"
  }
  ```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-link>
   cd contact-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```sh
   node server.js
   ```
   You should see:
   ```
   Server is running on port 3000
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage with Insomnia

You can test the API using Insomnia by performing the following operations:

- **GET /contacts**: Retrieve all contacts.
- **POST /contacts**: Create a new contact (provide a JSON body with contact data).
- **PUT /contacts/{id}**: Update a contact by its ID (provide a JSON body with updated data).
- **DELETE /contacts/{id}**: Delete a contact by its ID.

## Error Handling

- **404 Not Found**: If a contact is not found by its ID.
- **400 Bad Request**: If required fields are missing when creating or updating a contact.

## Conclusion

This project provides an easy-to-use application for managing a contact list with the capability to create, read, update, and delete contacts. The application is built with Node.js, Express, and a simple frontend using HTML, CSS, and JavaScript, and it includes basic validation and error handling.

---

Let me know if you need any more details or further customization! 😊