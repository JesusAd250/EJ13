# Usa una imagen con JDK 17
FROM eclipse-temurin:17-jdk-jammy AS builder

# Directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para construir
COPY pom.xml .
COPY src ./src

# Construye el proyecto (genera el .jar en /app/target/)
RUN mvn clean install -DskipTests

# Fase final (imagen ligera con solo el JAR)
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

# Copia el JAR desde la fase de construcción
COPY --from=builder /app/target/*.jar ./app.jar

# Puerto expuesto (usa la variable PORT de Render)
ENV PORT=8080
EXPOSE $PORT

# Comando de inicio
CMD ["java", "-jar", "app.jar"]
