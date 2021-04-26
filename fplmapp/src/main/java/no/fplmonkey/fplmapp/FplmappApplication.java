package no.fplmonkey.fplmapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class FplmappApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(FplmappApplication.class, args);
	}

}
