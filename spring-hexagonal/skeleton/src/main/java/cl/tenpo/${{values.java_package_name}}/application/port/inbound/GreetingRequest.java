package cl.tenpo.banking.${{values.java_package_name}}.application.port.inbound;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class GreetingRequest extends InboundPort {
  private String message;
}
