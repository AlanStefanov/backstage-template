package cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound;

import com.newrelic.api.agent.NewRelic;

import java.util.Map;

public interface Monitoring {
  void notifyError(String errorMsg);

  void notifyError(String errorMsg, Map<String, String> params);

  void notifyError(String errorMsg, Map<String, String> params, Logger logger);

  void notifyError(String errorMsg, Throwable e, Map<String, String> params);

  void notifyError(String errorMsg, Throwable e, Map<String, String> params, Logger logger);

  void notifyError(String errorMsg, Throwable e);

  void notifyError(String errorMsg, Throwable e, Logger logger);

  void hitMetric(String name);

  void hitMetric(String name, Map<String, ?> values);

  void hitError(Throwable error);
}
