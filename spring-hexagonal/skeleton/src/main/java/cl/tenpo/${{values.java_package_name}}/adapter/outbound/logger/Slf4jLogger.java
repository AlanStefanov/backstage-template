package cl.tenpo.banking.${{values.java_package_name}}.adapter.outbound.logger;

import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Logger;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class Slf4jLogger implements Logger {
  @Override
  public void trace(String message) {
    log.trace(message);
  }

  @Override
  public void debug(String message) {
    log.debug(message);
  }

  @Override
  public void info(String message) {
    log.info(message);
  }

  @Override
  public void warn(String message) {
    log.warn(message);
  }

  @Override
  public void error(String message) {
    log.error(message);
  }

  @Override
  public void error(String message, Throwable e) {
    log.error(message, e);
  }
}
