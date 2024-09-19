# Next.js Frontend Application

This is a simple dashboard built with Next.js that displays four charts (Candlestick, Line, Bar, Pie) using data fetched from a Django API backend.

## Requirements

- Node.js
- npm or yarn

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone -b extra-requirements https://github.com/GanatraJay2000/blockhouse-tha-frontend.git
   cd blockhouse-tha-frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

## Server-Side Rendering (SSR)

The application uses server-side rendering (SSR) to fetch all data from the /api/all-data backend endpoint. This ensures that the data is fetched and rendered on the server before being sent to the client, improving performance and SEO.

## Functionality

- **Candlestick Chart**: Displays stock market data (e.g., open, close, high, low prices)
- **Line Chart**: Displays line-chart data
- **Bar Chart**: Displays category-based data
- **Pie Chart**: Displays proportional data

### Example Pages

- **Dashboard Page**: Contains all four charts and dynamically fetches the data from the Django API.

## Tools and Libraries Used

- **Next.js**: React framework with server-side rendering.
- **shadcn-ui - Recharts / ECharts**: Charting libraries used for rendering the charts.
- **FETCH**: Used for fetching data from the Django API.
- **JEST**: Used for Unit Testing.

## Unit Testing Using Jest:

Basic Unit tests have been introduced for React components using Jest and React Testing Library. These tests help ensure that each component behaves as expected, handling various states and user interactions, improving the overall code quality.

## Thought Process

The Next.js frontend fetches data from the Django backend API using Fetch API and renders the data dynamically into charts. The frontend is responsive and modular, making it easy to extend or replace components if needed. The design is kept minimal, focusing on clear data representation. Used SSR instead of SSG to test out change in data.

## Instructions

1. Ensure the Django backend is running on `http://127.0.0.1:8000`.
2. Start the Next.js app with `npm run dev`.
3. Access the dashboard at `http://localhost:3000/` to see the charts populated with data from the Django API.

## Future Scope

1. **Use a Singular Axios Instance**:

   - I plan to refactor the API calls to use a centralized Axios instance with predefined settings like base URL, headers, and interceptors. This will result in cleaner, more maintainable code and ensure consistent error handling across the application.

2. **Dockerize**:

   - I plan to create a `Dockerfile` for the frontend to simplify setup and deployment. Dockerizing the application will ensure consistency across different environments and make the project easier to manage and scale.
