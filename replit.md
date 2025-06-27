# Emparo Peri Peri Restaurant Website

## Overview

This is a modern restaurant website for Emparo Peri Peri, a London-based peri peri chicken restaurant. The application is designed as a full-stack web solution featuring an aesthetic, user-friendly interface with online ordering capabilities, menu management, and payment integration. The project prioritizes visual appeal and seamless user experience while maintaining modular architecture for easy feature management.

## System Architecture

### Frontend Architecture
- **Framework**: Modern JavaScript framework (React/Next.js recommended)
- **Styling**: CSS-in-JS or utility-first CSS framework for aesthetic design
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Component Structure**: Modular component architecture for reusability and maintainability

### Backend Architecture
- **API Layer**: RESTful API design for handling menu, orders, and user management
- **Authentication**: Session-based or JWT authentication for user accounts
- **Order Management**: Comprehensive order processing system supporting both collection and delivery
- **Admin Panel**: Backend interface for menu updates and order management

### Database Design
- **Primary Database**: Turso (SQLite-compatible) for production data storage
- **Schema Design**: Normalized database structure supporting:
  - Menu items with categories, descriptions, prices, and spice levels
  - User accounts and order history
  - Order management with status tracking
  - Administrative data

## Key Components

### Menu System
- **Dynamic Menu Display**: Category-based menu organization (Starters, Mains, Platters, Sides, Drinks)
- **Item Details**: Each menu item includes description, price, image, and spice level indicator
- **Special Offers**: Dedicated section for deals and combo offers
- **Image Management**: High-quality food photography integration

### Ordering System (Prototype)
- **Dual Service Model**: Support for both delivery and collection orders
- **Payment Integration**: Stripe integration for secure payment processing
- **Order Tracking**: Real-time order status updates
- **Modular Design**: Built as removable feature without affecting core website functionality

### User Interface
- **Aesthetic Design**: Visually appealing interface emphasizing food photography
- **Navigation**: Clean, intuitive navigation structure
- **Contact Integration**: Seamless contact information display with map integration
- **Social Media Integration**: Links to social platforms

## Data Flow

1. **User Journey**: Home → Menu → Item Selection → Cart → Checkout → Payment → Confirmation
2. **Order Processing**: Order Creation → Payment Verification → Kitchen Notification → Status Updates
3. **Admin Workflow**: Menu Management → Order Monitoring → Status Updates
4. **Data Synchronization**: Real-time updates between frontend and Turso database

## External Dependencies

### Payment Processing
- **Stripe Integration**: Secure payment handling for online orders
- **Fallback Strategy**: Designed for easy removal if payment integration fails

### Database Connection
- **Turso Database**: Existing database connection for data persistence
- **Migration Strategy**: Support for data import/export if needed

### Media Assets
- **Food Photography**: Integration of provided food images
- **Brand Assets**: Logo and brand color implementation

## Deployment Strategy

### Development Environment
- **Local Development**: Hot-reload development server
- **Database Connection**: Direct Turso integration
- **Environment Variables**: Secure API key management

### Production Deployment
- **Static Assets**: Optimized image delivery
- **Performance**: Lazy loading and image optimization
- **SEO Optimization**: Meta tags and structured data for local business

## Changelog

- June 26, 2025: Initial setup and architecture planning
- June 26, 2025: Full website implementation completed
  - Connected to Turso database successfully
  - Built comprehensive homepage with hero section and business information
  - Created menu page featuring 70+ food photographs with category filtering
  - Developed contact page with business details and contact form
  - Implemented responsive design with authentic peri peri branding
  - Deployed backend API on port 3000 and frontend on port 5173
  - All business information integrated (address, hours, phone)
- June 27, 2025: Production deployment configuration completed
  - Built client application with all 12 authentic food photographs processed
  - Configured production server for static file serving and API routing
  - Created render.yaml for Render platform deployment
  - Fixed Vite build configuration and asset import paths
  - Resolved Express routing conflicts for production deployment
  - Ready for Render deployment with environment variable configuration

## User Preferences

Preferred communication style: Simple, everyday language.

### Business Information
- **Name**: Emparo Peri Peri
- **Address**: 24 Blackstock Rd, Finsbury Park, London N4 2DW
- **Phone**: 020 3441 6940
- **Hours**: Thursday-Tuesday 1 PM–4 AM (Closed Wednesday)

### Design Requirements
- **Aesthetic Focus**: Visual appeal is the primary design priority
- **Professional Look**: Clean, modern design suitable for food service industry
- **Image-Heavy**: Emphasis on high-quality food photography
- **Brand Consistency**: Warm, spicy color scheme reflecting peri peri cuisine

### Technical Priorities
1. **Visual Excellence**: Aesthetic design takes precedence
2. **Modular Architecture**: Ordering system built as removable component
3. **Database Integration**: Seamless Turso connection
4. **Performance**: Fast loading times and smooth user experience
5. **Responsive Design**: Optimal experience across all devices