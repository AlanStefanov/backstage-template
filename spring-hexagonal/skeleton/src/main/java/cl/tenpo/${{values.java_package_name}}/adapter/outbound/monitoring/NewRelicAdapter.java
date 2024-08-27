package cl.tenpo.banking.${{values.java_package_name}}.adapter.outbound.monitoring;

import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Logger;
import cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound.Monitoring;

import com.newrelic.api.agent.NewRelic;

import java.util.HashMap;

import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class NewRelicAdapter implements Monitoring {

  @Override
  public void notifyError(String errorMsg) {
    notifyError(errorMsg, null, null, false);
  }

  @Override
  public void notifyError(String errorMsg, Map<String, String> params) {
    notifyError(errorMsg, params, null, false);
  }

  @Override
  public void notifyError(String errorMsg, Map<String, String> params, Logger logger) {
    logger.error(errorMsg);
    notifyError(errorMsg, params, null, false);
  }

  @Override
  public void notifyError(String errorMsg, Throwable e, Map<String, String> params) {
    notifyError(errorMsg, params, e, false);
  }

  @Override
  public void notifyError(String errorMsg, Throwable e, Map<String, String> params, Logger logger) {
    logger.error(errorMsg);
    notifyError(errorMsg, params, e, false);
  }

  @Override
  public void notifyError(String errorMsg, Throwable e) {
    notifyError(errorMsg, null, e, false);
  }

  @Override
  public void notifyError(String errorMsg, Throwable e, Logger logger) {
    logger.error(errorMsg);
    notifyError(errorMsg, null, e, false);
  }

  @Override
  public void hitMetric(String name) {
    NewRelic.incrementCounter(name);
  }

  @Override
  public void hitMetric(String name, Map<String, ?> values) {
    NewRelic.getAgent().getInsights().recordCustomEvent(name, values);
  }

  @Override
  public void hitError(Throwable error) {
    NewRelic.noticeError(error);
  }

  private void notifyError(
      String errorMsg, Map<String, String> params, Throwable e, boolean expected) {
    Map<String, String> mapError = new HashMap<>();
    if (!params.isEmpty()) {
      mapError.putAll(params);
    }
    mapError.put("ERROR", errorMsg);
    mapError.put("error_message", errorMsg);
    com.newrelic.api.agent.NewRelic.noticeError(e, mapError, expected);
  }
}
