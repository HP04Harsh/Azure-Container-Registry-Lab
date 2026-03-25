# Use Node.js runtime
FROM node:18

# Set working directory
WORKDIR /app

# Copy your single app.js
COPY App.js .

# Expose a port (let's use 3000)
EXPOSE 3000

# Run the app
CMD ["node", "App.js"]