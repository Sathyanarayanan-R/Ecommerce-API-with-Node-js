# Ecommerce-API-with-Node-js

## 📌 Introduction

This ECommerce API is to support e-commerce operations, such as product and category listing, product details, cart management, and order processing. Integrated MongoDB to manage product/category data, user cart information, and order details. The API is also handle token management in the system.

## Deployed API URL : https://ecommerce-api-sj.onrender.com

# Credentials to try out the app :

### For Admin Sign in

email : sathya@gmail.com

password: sathya123

### For Member Sign in

email : jana@gmail.com

password: jana@123

## ⭐ Features of the app

1. API Endpoints:

* Category Listing: To retrieve a list of categories.
* Product Listing:  To retrieve a list of products with essential details such as title, price, description, and availability, based on category Id.
* Product Details: To fetch the detailed information of a specific product by its ID.
* Cart Management: Users can add products to their cart, view the cart, update quantities, and remove items from the cart.
* Order Placement: To handle order placement, allowing users to place an order with products from their cart.
* Order History: To fetch the order history for authenticated users.
* Order Details: To retrieve the detailed information of a specific order by its ID.
* A set of API to register and login the users.

NOTE: Ignored any payment related APIs for simplicity. We have assumed that payment is not needed for orders.

2. Database Integration: Integrated MongoDB to store and manage product data, user cart information, and order details. The API interacts with DB to perform CRUD operations on products, cart items, and orders.

3. Authentication Middleware and security: Implemented authentication middleware to secure sensitive API endpoints, such as cart management and order placement. Only authenticated users are allowed to access these endpoints.

4. User Authentication: Implemented user authentication using JSON Web Tokens (JWT). Users are able to register, log in, and obtain a token to authenticate API requests.

5. Error Handling: Appropriate error handling is in place, and the API returns meaningful error messages and status codes when necessary.

6. Documentation: Created postman documentation for the API endpoints, including details about their functionality, expected input, and output.
   * API Documentation URL : https://documenter.getpostman.com/view/26192113/2s9Y5SXkxr
