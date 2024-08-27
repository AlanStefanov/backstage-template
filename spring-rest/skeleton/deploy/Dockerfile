FROM registry.gitlab.com/tenpo/docker-openjdk11-distroless-newrelic:jdk17-alpine-1.0
ENV NEW_RELIC_APP_NAME ${{values.component_name}}
WORKDIR /app
COPY ./build/libs/${{values.component_name}}-0.0.1-SNAPSHOT.jar /app/app.jar

ARG NEWRELIC_LICENSE_KEY
ENV NEW_RELIC_LICENSE_KEY ${NEWRELIC_LICENSE_KEY}

EXPOSE 80
CMD ["java", "-jar", "app.jar"]