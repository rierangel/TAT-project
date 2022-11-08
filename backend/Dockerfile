FROM python:3.8-alpine3.15

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1
# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1
ENV PORT 8000


WORKDIR /

COPY ./ ./

RUN ls


RUN  apk update \
  && apk add --no-cache gcc musl-dev postgresql-dev python3-dev  jpeg-dev zlib-dev \
  && pip install --upgrade pip
  

COPY ./requirements.txt  ./

RUN python -m pip install -r ./requirements.txt 

RUN python manage.py

RUN python manage.py migrate

EXPOSE 8000

CMD [ "python", "manage.py", "runserver" ]