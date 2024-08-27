package cl.tenpo.${{values.java_package_name}}.integration.controller;

import cl.tenpo.${{values.java_package_name}}.integration.base.BaseIntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ControllerIntegrationTest extends BaseIntegrationTest {
    @Autowired
    private MockMvc mvc;
    @Value("${main.path}")
    private String mainPath;

    private static final String HELLO_URL = "/v1/hello";

    @Test
    void contextLoads() {
        assertThat(mvc).isNotNull();
        assertThat(mainPath).isNotNull();
    }

    @Test
    void get_case_1() throws Exception {
        mvc.perform(get(mainPath + HELLO_URL)).andExpect(status().isOk());
    }
}