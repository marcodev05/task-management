FROM eclipse-temurin:11-jdk-alpine
COPY ./target/task-management-0.0.1.jar /task-management.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/task-management.jar", "--spring.profiles.active=prod"]
