# Use an official lightweight Python image
FROM python:3.10-slim

# Create app directory
WORKDIR /app

# Copy dependency list first (better caching)
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the repo
COPY . .

# Streamlit needs these for Render
ENV PORT=10000
EXPOSE 10000

# Run the Streamlit app
CMD ["streamlit", "run", "app/Homepage.py", "--server.port=10000", "--server.address=0.0.0.0"]
