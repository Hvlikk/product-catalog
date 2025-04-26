# 📦 **Product Catalog App (Angular)**

A simple product catalog application built with Angular, demonstrating key features such as data binding, component communication, routing, API integration, and form handling.

### 🎯 **Project Overview**
This project allows users to view, add, and delete products in a catalog. The app uses Angular's powerful features like components, services, HTTP requests, and form handling to create a dynamic and functional web application.

### 🔧 **Technologies Used**
- **Angular** (Latest Version)
- **TypeScript**
- **SCSS** for styling
- **RxJS** for handling asynchronous operations

### ⚙️ **Key Features**
- **Product List**: Dynamically rendered list of products using `*ngFor` directive.
- **Add Product**: Form-based product creation using template-driven forms with validation.
- **Delete Product**: Event-driven product removal from the list using `@Output` and `EventEmitter`.
- **Product Details**: View detailed information about each product via routing (`routerLink`, `ActivatedRoute`).
- **HTTP Requests**: Fetch products from an API using `HttpClient` (`GET`, `POST`).
- **Form Validation**: Template-driven and reactive forms with validation (required, minlength).
- **Error Handling**: Display loading states and handle HTTP request errors.

### 🛠 **Features in Detail**
- **Component Communication**: Use of `@Input` to pass data between components and `@Output` to emit events from child to parent components.
- **Routing & Navigation**: Simple routing with dynamic product detail pages, including a 404 redirect.
- **Services & Dependency Injection**: `ProductService` to manage products in the app, with methods for retrieving, adding, and deleting products.
- **API Integration**: Data is fetched from the JSONPlaceholder API (or you can replace it with a real API for production).
- **Form Handling**: Template-driven forms for creating new products and reactive forms for future scalability.

### 🚀 **How to Run the Project Locally**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/product-catalog-app.git


2. Install dependencies:
```bash
cd product-catalog-app
npm install
Run the app:
```


3. Run the app:
```bash
ng serve
Open your browser and navigate to: http://localhost:4200/.
```

4. Open your browser and navigate to: http://localhost:4200/.


