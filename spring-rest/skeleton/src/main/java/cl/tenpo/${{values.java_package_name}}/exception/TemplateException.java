package cl.tenpo.${{values.java_package_name}}.exception;

public class TemplateException extends RuntimeException {
    public TemplateException(String message) {
        super(message);
    }

    public TemplateException(String message, Throwable cause) {
        super(message, cause);
    }
}
