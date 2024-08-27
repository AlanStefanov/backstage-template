package cl.tenpo.banking.${{values.java_package_name}}.application.domain.exception;

public class TemplateException extends RuntimeException {
  public TemplateException(String message) {
    super(message);
  }

  public TemplateException(String message, Throwable cause) {
    super(message, cause);
  }
}
