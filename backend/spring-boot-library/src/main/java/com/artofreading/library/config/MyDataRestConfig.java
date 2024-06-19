package com.artofreading.library.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.artofreading.library.entity.Book;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

	private String theAllowedOrigins = "https://localhost:3000";

	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

		HttpMethod[] theUnsupportedActions = { HttpMethod.POST, HttpMethod.PATCH, HttpMethod.DELETE, HttpMethod.PUT };
		config.exposeIdsFor(Book.class);
		disableHttpMethods(Book.class,config,theUnsupportedActions);
		
		// configure core mapping
		cors.addMapping(config.getBasePath()+"/**").allowedOrigins(theAllowedOrigins);
	}

	private void disableHttpMethods(Class<Book> theClass, RepositoryRestConfiguration config,
			HttpMethod[] theUnsupportedActions) {
		config.getExposureConfiguration().forDomainType(theClass)
		.withItemExposure((metData, httpMethods)->
		httpMethods.disable(theUnsupportedActions))
		.withCollectionExposure((metData,httpMethods)->
		httpMethods.disable(theUnsupportedActions));
		
	}
}
