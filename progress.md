# ShopEase - React E-Commerce Platform

## Project Goal

This project is built primarily to **learn React and the modern frontend ecosystem**, not to build a production-ready e-commerce application.

The objective is to understand:

- React
- React Router
- Redux Toolkit
- TanStack Query / React Query
- Axios
- Component Architecture
- Reusable UI Design
- Responsive Design
- Frontend Project Structure

Backend authentication, payments, order management, etc. will be implemented later after learning backend development.

---

# Tech Stack

- React 19
- React Router v7
- Redux Toolkit
- React Redux
- TanStack Query
- Axios
- DummyJSON API
- CSS (No Tailwind)

---

# API

We use DummyJSON.

Products:

```
https://dummyjson.com/products
```

Product Details:

```
https://dummyjson.com/products/:id
```

No other APIs are currently used.

---

# Project Architecture

```
refer tree.txt

```

---

# Architecture Rules

These rules must always be followed.

## 1. Mobile First

Every page must be styled mobile-first.

Order:

```
Mobile

↓

Tablet

↓

Desktop
```

Example:

```css
/* Mobile */

...

/* Tablet */

@media (min-width:768px) {
}

/* Desktop */

@media (min-width: 1024px) {
}
```

---

## 2. Separation of Concerns

Pages compose components.

Components contain UI.

Utilities contain helper functions.

Redux contains global state.

API folder contains API calls only.

---

## 3. Styling Rules

Each feature owns its CSS.

Example:

```
ProductCard.jsx

ProductCard.css
```

Shared utilities live in global CSS.

---

## 4. Reusable Components

Whenever two pages share a UI structure, create reusable components.

Examples:

- AuthHeader
- AuthFooter
- ProductCard

---

## 5. Learning Rule

Do NOT add unnecessary features.

If a roadmap item is completed, it is frozen.

Only fix bugs.

No scope creep.

---

# Completed Features

---

## Foundation

✅ React Setup

✅ Routing

✅ Navbar

Responsive

Badges

Active Links

---

✅ Footer

Responsive

Quick Links

Contact

---

✅ Axios

Dedicated axios client

Products API

Categories API

---

✅ React Query

Fetching

Caching

Loading

Error Handling

---

# Product Catalog

Completed:

✅ Products

✅ Search

Search Params

URL synchronization

---

✅ Category Filter

Uses URL Search Params

---

✅ Sorting

Price ASC

Price DESC

Rating

---

✅ Pagination

Client-side pagination

---

# Product Details

Completed:

✅ Gallery

Thumbnail selection

---

✅ Image Modal

Fullscreen preview

---

✅ Specifications

Brand

Weight

Dimensions

Tags

---

✅ Shipping Information

Warranty

Shipping

Return Policy

---

# Shopping

Completed:

✅ Cart

Redux Toolkit

Increase Quantity

Decrease Quantity

Remove

Clear Cart

Order Summary

---

✅ Wishlist

Add

Remove

Move to Cart

---

Checkout is intentionally postponed until Authentication is complete.

---

# Landing Page

Completed:

## Hero

Responsive

CTA Buttons

Image

---

## Categories

Uses existing product data

Extracts unique categories

Category image comes from first product in category

Helper:

```
getCategoryData()
```

---

## Featured Products

Uses first 8 products

Reuses ProductCard

---

## Why Choose Us

Reusable FeaturesCard

---

## Newsletter

Frontend only

No backend

---

# Global Styling

Already exists.

Uses variables like:

```
--primary

--text

--border

--surface

--radius-md

--shadow-md

--transition
```

Components should reuse these variables.

---

# Redux

Current slices:

```
cartSlice

wishlistSlice

authSlice
```

Store configured.

Persistence middleware exists for:

- Cart
- Wishlist

---

# Dummy Authentication

No backend.

No JWT.

No API.

use localstorage

login()

↓

isAuthenticated = true

logout()

↓

isAuthenticated = false

ProtectedRoute checks

---

# Roadmap

## Phase 1

- [x] React Setup
- [x] Routing
- [x] Navbar
- [x] Footer
- [x] Axios
- [x] React Query

---

## Phase 2

- [x] Products
- [x] Search
- [x] Category Filter
- [x] Sorting
- [x] Pagination

---

## Phase 3

- [x] Gallery
- [x] Image Modal
- [x] Specifications
- [x] Shipping Information

---

## Phase 4

- [x] Cart
- [x] Wishlist
- [ ] Checkout
- [ ] Order Confirmation

Checkout starts AFTER authentication.

---

## Phase 5

- [x] Hero
- [x] Categories
- [x] Featured Products
- [x] Why Choose Us
- [x] Newsletter

---

## Phase 6

- [ ] Login
- [ ] Register
- [ ] Protected Routes
- [ ] User Profile

---

## Phase 7

- [ ] Skeleton Loaders
- [ ] Toast Notifications
- [ ] Dark Mode
- [ ] SEO
- [ ] Performance Optimization

---

# Important Instructions

- Follow the existing architecture.
- Do not redesign completed features.
- Keep the code modular.
- Continue using mobile-first responsive CSS.
- Reuse components wherever possible.
- Continue teaching instead of providing complete implementations unless explicitly requested.
- This project is for learning React. Backend functionality will be added in a future project.
