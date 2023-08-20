FROM python:slim

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY app /app
WORKDIR /app

CMD python3 app.py