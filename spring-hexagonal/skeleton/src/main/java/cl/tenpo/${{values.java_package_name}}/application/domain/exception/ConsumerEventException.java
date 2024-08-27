package cl.tenpo.banking.${{values.java_package_name}}.application.domain.exception;

public class ConsumerEventException extends TemplateException {

  public ConsumerEventException(String message) {
    super(message);
  }

  public ConsumerEventException(String message, Throwable cause) {
    super(message, cause);
  }
}
