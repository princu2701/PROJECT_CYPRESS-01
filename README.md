# PROJECT_CYPRESS-01

**Cypress POM Automation Project**  
Automated end-to-end workflows for [Tutorials Ninja Demo](https://tutorialsninja.com/demo/index.php?route=common/home) using **Cypress** with **Page Object Model (POM)** structure.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features Covered](#features-covered)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Reports](#test-reports)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project demonstrates automation of a typical e-commerce workflow using **Cypress** and the **Page Object Model (POM)** design pattern. It ensures maintainable, reusable, and scalable test scripts for web applications.

The workflow tested includes:

- User registration and login
- Product search
- Add to cart
- Checkout process
- Order confirmation

---

## Project Structure

PROJECT_CYPRESS-01/
├── cypress/
│ ├── e2e/ # Test spec files
│ ├── fixtures/ # Test data JSON files
│ ├── support/
│ │ ├── commands.js # Custom commands
│ │ └── index.js # Global configurations
│ └── pages/ # Page Object files
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies
└── README.md


---

## Features Covered

1. **User Account Management**
   - Register a new user
   - Login with valid credentials
   - Logout functionality

2. **Product Management**
   - Search for products
   - View product details
   - Add to cart and update quantities
   - Remove items from cart

3. **Checkout Process**
   - Fill billing and shipping details
   - Select payment method
   - Confirm order

4. **Reusable Utilities**
   - Custom Cypress commands for login, logout, and cart actions
   - Environment variables to handle multiple test environments
   - Fixtures for test data management

---

## Technologies Used

- **Cypress** for automation testing  
- **JavaScript** as programming language  
- **Page Object Model (POM)** design pattern  
- **Mochawesome** for reporting  
- **Node.js & npm** for project setup  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/princu2701/PROJECT_CYPRESS-01.git


## Project Structure

