# Next.js Frontend Application

This is a simple dashboard built with Next.js that displays four charts (Candlestick, Line, Bar, Pie) using data fetched from a Django API backend.

[!TIP]
Extra Features in another branch.

## Requirements

- Node.js
- npm or yarn

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/GanatraJay2000/blockhouse-tha-frontend.git
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

## Functionality

- **Candlestick Chart**: Displays stock market data (e.g., open, close, high, low prices) fetched from `/api/candlestick-data/`.
- **Line Chart**: Displays time-series data fetched from `/api/line-chart-data/`.
- **Bar Chart**: Displays category-based data fetched from `/api/bar-chart-data/`.
- **Pie Chart**: Displays proportional data fetched from `/api/pie-chart-data/`.

### Example Pages

- **Dashboard Page**: Contains all four charts and dynamically fetches the data from the Django API.

## Tools and Libraries Used

- **Next.js**: React framework with server-side rendering.
- **shadcn-ui - Recharts / ECharts**: Charting libraries used for rendering the charts.
- **FETCH**: Used for fetching data from the Django API.

## Thought Process

The Next.js frontend fetches data from the Django backend API using Fetch API and renders the data dynamically into charts. The frontend is responsive and modular, making it easy to extend or replace components if needed. The design is kept minimal, focusing on clear data representation.

## Instructions

1. Ensure the Django backend is running on `http://127.0.0.1:8000`.
2. Start the Next.js app with `npm run dev`.
3. Access the dashboard at `http://localhost:3000/` to see the charts populated with data from the Django API.

## Future Scope

1. **Use a Singular Axios Instance**:

   - I plan to refactor the API calls to use a centralized Axios instance with predefined settings like base URL, headers, and interceptors. This will result in cleaner, more maintainable code and ensure consistent error handling across the application.

2. **Work on the Theme Context**:

   - I aim to implement a global theme context to allow dynamic switching between light and dark themes. Using React’s Context API or a state management tool, I'll ensure the theme persists across the entire application for a better user experience.

3. **Dockerize**:

   - I plan to create a `Dockerfile` for the frontend to simplify setup and deployment. Dockerizing the application will ensure consistency across different environments and make the project easier to manage and scale.

4. **Unit Testing Using Jest**:
   - I intend to introduce unit testing for React components using Jest and React Testing Library. These tests will help ensure that each component behaves as expected, handling various states and user interactions, improving the overall code quality.
