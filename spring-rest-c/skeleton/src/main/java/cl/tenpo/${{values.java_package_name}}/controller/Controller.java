package cl.tenpo.${{values.java_package_name}}.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${main.path}/v1")
public class Controller {

    @GetMapping("/hello")
    public ResponseEntity<String> get() {
        return ResponseEntity.ok().body("hello");
    }

}
