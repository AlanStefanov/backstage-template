package cl.tenpo.${{values.java_package_name}}.common;

import com.newrelic.api.agent.NewRelic;

import java.util.Map;

public class NewRelicMetricService {

    public static void hitMetric(String name) {
        NewRelic.incrementCounter(name);
    }

    public static void hitMetric(String name, Map<String, ?> values) {
        NewRelic.getAgent().getInsights().recordCustomEvent(name, values);
    }

    public static void hitError(Throwable error) {
        NewRelic.noticeError(error);
    }

}
