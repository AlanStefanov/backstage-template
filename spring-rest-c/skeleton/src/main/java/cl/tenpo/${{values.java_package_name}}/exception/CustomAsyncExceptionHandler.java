package cl.tenpo.${{values.java_package_name}}.exception;

import cl.tenpo.${{values.java_package_name}}.common.NewRelicMetricService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.aop.interceptor.AsyncUncaughtExceptionHandler;

import java.lang.reflect.Method;

@Slf4j
public class CustomAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {
    @Override
    public void handleUncaughtException(Throwable throwable, Method method, Object... objects) {
        log.error(throwable.getMessage());
        AsyncException ex = new AsyncException(throwable.getMessage(), throwable);
        NewRelicMetricService.hitError(ex);
    }
}
