package cl.tenpo.banking.${{values.java_package_name}}.adapter.inbound.rest.greeting;

import cl.tenpo.banking.${{values.java_package_name}}.application.port.inbound.GreetingRequest;
import cl.tenpo.banking.${{values.java_package_name}}.application.usecase.greeting.GreetUseCase;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
@AllArgsConstructor
public class GreetingController {

  private final GreetUseCase greetUseCase;

  @GetMapping("/greet")
  GreetingAdapter.GreetingResponseDto get(@RequestParam String message) {
    return GreetingAdapter.fromDomain(
        this.greetUseCase.execute(GreetingRequest.builder().message(message).build()));
  }
}
