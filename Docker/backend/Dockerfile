FROM openjdk:17
COPY GestioneTask-0.0.1-SNAPSHOT.jar /usr/src/myapp/app.jar
WORKDIR /usr/src/myapp
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "./app.jar" ]

# BUILD
# docker build -t myjavatest:1.0.0 .