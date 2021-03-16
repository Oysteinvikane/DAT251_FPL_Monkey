# DAT251 - FPLMonkey
FPLMonkey is a web application developed as a project in DAT251,
the web application is set up as a maven project with react as frontend.

## React app packaged with Spring Boot.

The project is set up to publish one jar file for production.
The jar file contains both backend and frontend.

To run the project you can run maven with "mvn clean install" and all dependencies will be installed including npm and node.
For running the jar file you can use "java -jar target/fplmapp-0.0.1-SNAPSHOT.jar"
After running the jar file you can navigate to http://localhost:8080 and you will see the application.

## CI/CD
Github actions with Heroku deployment
