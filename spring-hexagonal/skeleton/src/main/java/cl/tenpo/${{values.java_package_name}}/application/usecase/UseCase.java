package cl.tenpo.banking.${{values.java_package_name}}.application.usecase;

import cl.tenpo.banking.${{values.java_package_name}}.application.domain.model.Model;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.inbound.InboundPort;

public interface UseCase<I extends InboundPort, O extends Model> {
  O execute(I request);
}
