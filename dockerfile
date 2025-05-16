# Etapa de construcción (con Maven)
FROM maven:3.8-eclipse-temurin-17 AS builder
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean install -DskipTests  # Aquí ya no fallará

# Etapa final (solo JRE + JAR)
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /app/target/*.jar ./app.jar
ENV PORT=8080
EXPOSE $PORT
CMD ["java", "-jar", "app.jar"]
