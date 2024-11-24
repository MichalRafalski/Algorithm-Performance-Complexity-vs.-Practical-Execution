# Use an official Node.js runtime as the base image
FROM node:22.11.0-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) for dependencies
COPY *.js ./

# Specify the command to run the application
CMD ["node", "app.js"]
