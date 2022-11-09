FROM python:3.8.15-alpine3.16

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

WORKDIR /app

RUN  apk update \
  && apk add gcc musl-dev postgresql-dev python3-dev  jpeg-dev zlib-dev \
  && pip install --upgrade pip


COPY ./requirements.txt ./
RUN python -m pip install -r requirements.txt  

COPY ./ ./

EXPOSE 8000

RUN python manage.py migrate
RUN python manage.py loaddata ./db/data.json

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]







