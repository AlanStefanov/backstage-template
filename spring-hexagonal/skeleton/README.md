# ${{values.component_name}}

Entre las librerias incluidas se encuentran:

* Imagen docker con java ${{values.java_version}}  
* Springboot  
* New relic  
* PostgreSQL  
* Sleuth
* Lombok  
* Kafka
* Handler de excepciones


## Consideraciones

* Se encuentran `ConsumerEventImpl` y `ProducerEventImpl`, que deben ser extendidas para consumir y producir eventos a kafka. La idea, es que las subclases, como se ven en los ejemplos, solo tienen que indicar el topico a escuchar, y llamar al servicio que procese los eventos
* Ademas, viene con una clase `LoggerNewRelic` lista para enviar excepciones a New relic, asi como tambien clases de template para consumir y producir eventos a kafka.
* Se debe crear el PRIVATE_TOKEN como variable de git en la seccion de Settings - CI/CD.