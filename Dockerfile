# Use the official Node.js image as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the app
CMD ["npm", "run", "dev"]
