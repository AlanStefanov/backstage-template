package cl.tenpo.banking.${{values.java_package_name}}.adapter.inbound.rest.greeting;

import cl.tenpo.banking.${{values.java_package_name}}.application.domain.model.Greeting;

public class GreetingAdapter {
  static GreetingResponseDto fromDomain(Greeting greeting) {
    return new GreetingResponseDto(greeting.getMessage());
  }

  record GreetingResponseDto(String message) {}
}
