package cl.tenpo.banking.${{values.java_package_name}}.integration.base;

import cl.tenpo.banking.${{values.java_package_name}}.integration.factory.TestContainerFactory;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;


@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
public class BaseIntegrationTest {

    @DynamicPropertySource
    private static void registerRedisProperties(DynamicPropertyRegistry registry) {
        //starting containers
        TestContainerFactory.POSTGRES_CONTAINER.start();
        TestContainerFactory.KAFKA_CONTAINER.start();

        //PostgresContainer
        registry.add("spring.datasource.url", TestContainerFactory.POSTGRES_CONTAINER::getJdbcUrl);
        registry.add("spring.datasource.username", TestContainerFactory.POSTGRES_CONTAINER::getUsername);
        registry.add("spring.datasource.password", TestContainerFactory.POSTGRES_CONTAINER::getPassword);

        //KafkaContainer
        registry.add("spring.kafka.properties.bootstrap-servers", TestContainerFactory.KAFKA_CONTAINER::getBootstrapServers);
        registry.add("spring.kafka.properties.api-key", () -> "user-secret");
        registry.add("spring.kafka.properties.api-secret", () -> "password-secret");
        registry.add("spring.kafka.properties.security.protocol", () -> "SASL_PLAINTEXT");
        registry.add("spring.kafka.properties.sasl.jaas.config", () -> TestContainerFactory.KAFKA_JAAS_CONFIG);
        registry.add("spring.kafka.properties.sasl.mechanism", () -> "PLAIN");

    }

}
