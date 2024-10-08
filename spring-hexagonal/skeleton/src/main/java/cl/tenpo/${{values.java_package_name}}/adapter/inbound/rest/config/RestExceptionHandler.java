package cl.tenpo.banking.${{values.java_package_name}}.adapter.inbound.rest.config;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

import cl.tenpo.banking.${{values.java_package_name}}.application.domain.exception.TemplateException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class RestExceptionHandler {

  @ExceptionHandler({TemplateException.class, Exception.class})
  @ResponseStatus(INTERNAL_SERVER_ERROR)
  public ResponseErrorDto handleEventException(Exception ex) {
    return new ResponseErrorDto(ex.getLocalizedMessage());
  }
}
