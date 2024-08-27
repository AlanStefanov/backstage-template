package cl.tenpo.${{values.java_package_name}}.integration.factory;

import org.testcontainers.containers.KafkaContainer;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.utility.DockerImageName;

public class TestContainerFactory {

    public static final PostgreSQLContainer<?> POSTGRES_CONTAINER;
    private static final String POSTGRES_CONTAINER_IMAGE = "postgres:10.2";
    public static final KafkaContainer KAFKA_CONTAINER;
    private static final String KAFKA_CONTAINER_IMAGE = "confluentinc/cp-kafka:6.2.1";
    public static final String KAFKA_JAAS_CONFIG = "org.apache.kafka.common.security.plain.PlainLoginModule required " +
            "username=\"admin\" " +
            "password=\"admin\" " +
            "user_admin=\"admin\" " +
            "user_test=\"secret\";";

    static {

        POSTGRES_CONTAINER = new PostgreSQLContainer<>(POSTGRES_CONTAINER_IMAGE)
                .withDatabaseName("test-db")
                .withReuse(true)
                .withLabel("reuse.UUID", "282b8993-097c-4fd4-98f1-94daf3466dd6")
                .withUsername("sa")
                .withPassword("sa");

        KAFKA_CONTAINER = new KafkaContainer(
                DockerImageName.parse(KAFKA_CONTAINER_IMAGE)).withEmbeddedZookeeper()
                .withStartupAttempts(1)
                .withEnv("KAFKA_LISTENER_SECURITY_PROTOCOL_MAP", "PLAINTEXT:SASL_PLAINTEXT,BROKER:SASL_PLAINTEXT")
                .withEnv("KAFKA_SASL_MECHANISM_INTER_BROKER_PROTOCOL", "PLAIN")
                .withEnv("KAFKA_LISTENER_NAME_PLAINTEXT_SASL_ENABLED_MECHANISMS", "PLAIN")
                .withEnv("KAFKA_LISTENER_NAME_BROKER_SASL_ENABLED_MECHANISMS", "PLAIN")
                .withEnv("KAFKA_LISTENER_NAME_BROKER_PLAIN_SASL_JAAS_CONFIG", KAFKA_JAAS_CONFIG)
                .withEnv("KAFKA_LISTENER_NAME_PLAINTEXT_PLAIN_SASL_JAAS_CONFIG", KAFKA_JAAS_CONFIG);
    }
}
