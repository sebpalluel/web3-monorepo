FROM python:3
WORKDIR /backend
ENV PIP_NO_CACHE_DIR=1
ADD ./requirements.base .
RUN pip install --upgrade pip && pip install -r requirements.base
ADD ./entrypoint.sh /entrypoint.sh
RUN chmod a+x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]