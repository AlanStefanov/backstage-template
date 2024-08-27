FROM alpine:latest

WORKDIR /migrate

ADD https://github.com/amacneil/dbmate/releases/download/v1.7.0/dbmate-linux-musl-amd64 /migrate
ADD ./db/migrations /migrate/db/migrations

RUN chmod +x dbmate-linux-musl-amd64

CMD ["/migrate/dbmate-linux-musl-amd64", "migrate"]
