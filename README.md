# Community Economic Connector (CEC)

A full-stack web application designed to connect Indigenous Nations with grant funding opportunities and facilitate economic development initiatives across the United States.

## About

CEC serves as a crucial bridge between Indigenous Nations and available grant funding resources. The platform provides an interactive map-based interface to explore funding opportunities by state and territory, offering detailed information about grants, deadlines, and application requirements. Our goal is to streamline the grant discovery and application process while promoting economic development in Indigenous communities.

## Key Features

- Interactive map interface for exploring funding opportunities by state
- Comprehensive database of federal, state, and private grants
- Detailed grant information including:
  - Funding amounts
  - Eligibility requirements
  - Application deadlines
  - Required documentation
- User profiles for Indigenous Nation representatives
- Grant tracking and application management
- Resource library for grant writing and economic development
- Notification system for new opportunities

## Tech Stack

### Frontend
- React (Vite)
- Redux for state management
- Leaflet.js for interactive maps
- Tailwind CSS for styling
- React Router for navigation

### Backend
- Flask (Python)
- SQLAlchemy ORM
- PostgreSQL database
- Flask-Login for authentication
- Alembic for database migrations

## Getting Started

1. Clone this repository

2. Install backend dependencies:
   ```bash
   pipenv install -r requirements.txt
   ```

3. Create a __.env__ file based on the example with proper settings for your
   development environment.

4. Configure your PostgreSQL database URL in the __.env__ file.

5. Set up your database schema:
   - This project uses a custom schema defined by the `SCHEMA` environment variable
   - Choose a unique snake_case name for your schema

6. Initialize and seed the database:
   ```bash
   pipenv shell
   flask db upgrade
   flask seed all
   flask run
   ```

7. Set up the frontend:
   ```bash
   cd react-vite
   npm install
   npm run build
   ```
   The build command includes the --watch flag for automatic rebuilding during development.

## Deployment

This application is configured for deployment on Render.com using Docker containerization.

### Pre-deployment Steps:
1. Ensure your React build is up to date (`npm run build` in react-vite directory)
2. Commit and push all changes to GitHub
3. Configure environment variables in Render.com dashboard:
   - SECRET_KEY
   - FLASK_ENV
   - FLASK_APP
   - SCHEMA
   - DATABASE_URL

### Deployment Process:
1. Create a new Web Service in Render.com
2. Connect to your GitHub repository
3. Select Docker as the runtime
4. Configure environment variables
5. Deploy!

For detailed deployment instructions, refer to the [Render.com documentation](https://render.com/docs).

[Render.com]: https://render.com/
[Dashboard]: https://dashboard.render.com/
