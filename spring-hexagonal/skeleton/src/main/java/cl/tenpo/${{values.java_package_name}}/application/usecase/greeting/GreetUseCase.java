package cl.tenpo.banking.${{values.java_package_name}}.application.usecase.greeting;

import cl.tenpo.banking.${{values.java_package_name}}.application.domain.model.Greeting;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.inbound.GreetingRequest;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Logger;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Monitoring;
import cl.tenpo.banking.${{values.java_package_name}}.application.usecase.UseCase;
import lombok.AllArgsConstructor;

import java.time.Instant;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class GreetUseCase implements UseCase<GreetingRequest, Greeting> {
  private final Logger logger;
  private final Monitoring monitoring;

  @Override
  public Greeting execute(GreetingRequest request) {
    logger.info("GreetUseCase.execute");

    if (request.getMessage() == null) {
      monitoring.notifyError("GreetUseCase.execute: message is null");
      throw new IllegalArgumentException("message is null");
    }

    return Greeting.builder()
        .id(1L)
        .message(String.format("Hi %s !", request.getMessage()))
        .greetingDate(Date.from(Instant.now()))
        .build();
  }
}
