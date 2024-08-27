package cl.tenpo.${{values.java_package_name}}.exception;

public class ProducerEventException extends TemplateException {

    public ProducerEventException(String message) {
        super(message);
    }

    public ProducerEventException(String message, Throwable cause) {
        super(message, cause);
    }
}
