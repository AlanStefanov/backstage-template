package cl.tenpo.banking.${{values.java_package_name}}.application.domain.exception;

public class ProducerEventException extends TemplateException {

  public ProducerEventException(String message) {
    super(message);
  }

  public ProducerEventException(String message, Throwable cause) {
    super(message, cause);
  }
}
