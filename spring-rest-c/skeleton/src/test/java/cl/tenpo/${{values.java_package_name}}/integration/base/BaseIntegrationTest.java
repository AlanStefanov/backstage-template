package cl.tenpo.${{values.java_package_name}}.integration.base;

import jakarta.annotation.PostConstruct;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;

import static cl.tenpo.${{values.java_package_name}}.integration.factory.TestContainerFactory.*;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class BaseIntegrationTest {

    @DynamicPropertySource
    private static void registerRedisProperties(DynamicPropertyRegistry registry) {
        //starting containers
        POSTGRES_CONTAINER.start();
        KAFKA_CONTAINER.start();

        //PostgresContainer
        registry.add("spring.datasource.url", POSTGRES_CONTAINER::getJdbcUrl);
        registry.add("spring.datasource.username", POSTGRES_CONTAINER::getUsername);
        registry.add("spring.datasource.password", POSTGRES_CONTAINER::getPassword);

        //KafkaContainer
        registry.add("spring.kafka.properties.bootstrap-servers", KAFKA_CONTAINER::getBootstrapServers);
        registry.add("spring.kafka.properties.api-key", () -> "user-secret");
        registry.add("spring.kafka.properties.api-secret", () -> "password-secret");
        registry.add("spring.kafka.properties.security.protocol", () -> "SASL_PLAINTEXT");
        registry.add("spring.kafka.properties.sasl.jaas.config", () -> KAFKA_JAAS_CONFIG);
        registry.add("spring.kafka.properties.sasl.mechanism", () -> "PLAIN");
    }

}
