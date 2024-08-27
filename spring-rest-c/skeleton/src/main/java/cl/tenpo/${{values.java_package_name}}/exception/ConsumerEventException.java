package cl.tenpo.${{values.java_package_name}}.exception;

public class ConsumerEventException extends TemplateException {

    public ConsumerEventException(String message) {
        super(message);
    }

    public ConsumerEventException(String message, Throwable cause) {
        super(message, cause);
    }
}
