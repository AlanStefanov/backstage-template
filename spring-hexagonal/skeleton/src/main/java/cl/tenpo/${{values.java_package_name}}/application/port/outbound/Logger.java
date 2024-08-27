package cl.tenpo.banking.${{values.java_package_name}}.application.port.outbound;

public interface Logger {
  void trace(String message);

  void debug(String message);

  void info(String message);

  void warn(String message);

  void error(String message);

  void error(String message, Throwable e);
}
