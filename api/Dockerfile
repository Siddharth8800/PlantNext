FROM python:3.11-slim

WORKDIR /app

COPY api/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && \
    apt-get install -y mongodb && \
    mkdir -p /data/db

COPY api /app

EXPOSE 8000

CMD mongod --fork --logpath /var/log/mongodb.log && \
    python create_database.py && \
    uvicorn main:app --host 0.0.0.0 --port 8000