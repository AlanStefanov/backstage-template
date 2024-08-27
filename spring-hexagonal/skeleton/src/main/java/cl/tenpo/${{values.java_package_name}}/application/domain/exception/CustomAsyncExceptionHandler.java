package cl.tenpo.banking.${{values.java_package_name}}.application.domain.exception;

import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Logger;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Monitoring;
import lombok.AllArgsConstructor;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;

import java.lang.reflect.Method;

@AllArgsConstructor
public class CustomAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {

  private final Monitoring monitoring;
  private final Logger log;

  @Override
  public void handleUncaughtException(Throwable throwable, Method method, Object... objects) {
    log.error(throwable.getMessage());
    AsyncException ex = new AsyncException(throwable.getMessage(), throwable);
    monitoring.notifyError("Error processing async request", ex, log);
  }
}
