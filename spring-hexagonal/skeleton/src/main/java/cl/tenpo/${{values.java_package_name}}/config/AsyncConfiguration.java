package cl.tenpo.banking.${{values.java_package_name}}.config;

import cl.tenpo.banking.${{values.java_package_name}}.application.domain.exception.CustomAsyncExceptionHandler;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Logger;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Monitoring;
import lombok.AllArgsConstructor;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.scheduling.annotation.AsyncConfigurer;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@Configuration
@EnableAsync
@EnableScheduling
@Profile("!test")
@AllArgsConstructor
public class AsyncConfiguration implements AsyncConfigurer {

  private final Monitoring monitoring;
  private final Logger logger;

  @Override
  public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
    return new CustomAsyncExceptionHandler(monitoring, logger);
  }
}
