package ch.souti.introapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IntroAppController {
    @RequestMapping("/")
    public String index() {
        return "Welcome to souti.ch!";
    }
}
