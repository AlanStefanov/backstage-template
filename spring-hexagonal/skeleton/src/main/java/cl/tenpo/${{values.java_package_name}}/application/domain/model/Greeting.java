package cl.tenpo.banking.${{values.java_package_name}}.application.domain.model;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@Data
@EqualsAndHashCode(callSuper = true)
@Builder
public class Greeting extends Model {
  private Long id;
  private String message;
  private Date greetingDate;
}
