FROM mysql:5.7

COPY schema.sql /docker-entrypoint-initdb.d

ARG MYSQL_DATABASE

ARG MYSQL_ROOT_PASSWORD

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

CMD ["mysqld", "--innodb-use-native-aio=0"]

EXPOSE 3306