## ⚛️ React & PHP Communication Test Project

This project serves as a minimal example demonstrating how to send data from a **React** frontend application to a **PHP** backend server using **Axios** for HTTP requests, and how to handle the response.

-----

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

You will need the following installed on your system:

  * **Node.js** and **npm** (for the React application)
  * A **local server environment** (e.g., XAMPP, WAMP, or MAMP) capable of running PHP.

### 1\. Backend Setup (PHP)

The PHP script handles the API endpoint.

1.  **Place the PHP file:** Save the provided PHP code (let's assume it's named `index.php`) in a directory accessible by your local server.

      * **Example Path:** If you are using XAMPP, you might place it in a path like:
        `C:\xampp\htdocs\React+PHP test project\php-back-end\index.php`

2.  **Ensure Server is Running:** Start your local web server (e.g., Apache via XAMPP control panel).

3.  **Verify Endpoint:** The endpoint the React app calls is:
    `http://localhost/React+PHP%20test%20project/php-back-end/index.php`

      * **Crucial:** Make sure this URL **exactly matches** the location of your `index.php` file on your server.

### 2\. Frontend Setup (React)

The React application handles the user interface and HTTP request.

1.  **Navigate to the React Directory:** Open your terminal and navigate to the root directory of your React project.

2.  **Install Dependencies:** Install the required dependencies, primarily `axios`.

    ```bash
    npm install axios
    ```

3.  **Run the React Application:** Start the development server.

    ```bash
    npm run dev
    # or
    npm start
    ```

    The React application should now be running, typically at `http://localhost:5173` or a similar port.

-----

## 📁 Project Structure

This project consists of two main components:

### Frontend (`App.jsx`)

The React component handles the following:

  * **State Management:** Uses `useState` for the input value (`name`), the server's response (`resName`), and any errors (`error`).
  * **Input Handling:** The `handleChange` function updates the `name` state as the user types.
  * **Request Logic:** The `SendRequest` function is triggered on form submission.
      * It uses **Axios** to make a `POST` request to the PHP backend.
      * It sends the user's input `{ name }` in the request body.
      * On success, it displays an alert, logs the response, and sets the received message (`response.data.message`) to the `resName` state.
      * On failure, it displays an error alert and sets the `error` state.

### Backend (`index.php`)

The PHP script handles the API request:

  * **CORS Headers:**
    ```php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    ```
    These headers are **essential** for allowing the React application (running on a different port/origin) to communicate with the PHP server, resolving **CORS** (Cross-Origin Resource Sharing) issues.
  * **Method Check:** It checks if the request method is `POST`.
  * **Data Retrieval:**
    ```php
    $data = json_decode(file_get_contents("php://input"));
    $name = $data->name;
    ```
    It reads the raw JSON data sent by Axios from the request body (`php://input`), decodes it, and extracts the `name` value.
  * **Response:** It constructs a success response, concatenates the received name into a greeting, and sends it back to the frontend as JSON.

-----

## 🛠️ Key Technologies

  * **React:** Frontend library for building the user interface.
  * **Axios:** Promise-based HTTP client for making requests from the frontend.
  * **PHP:** Backend scripting language used to handle the API endpoint.

-----

## 💡 Troubleshooting

If you encounter issues, consider the following:

| Problem | Possible Cause & Solution |
| :--- | :--- |
| **Request Fails/CORS Error** | 1. **CORS Headers Missing:** Ensure `header("Access-Control-Allow-Origin: *")` is the first thing in your `index.php` file. |
| | 2. **Incorrect URL:** Double-check that the URL in `axios.post()` exactly matches your PHP script's location on the server. |
| **PHP is not receiving data** | **Content-Type Header:** Ensure Axios is sending JSON data and PHP is correctly reading it using `file_get_contents("php://input")` and `json_decode()`. |

