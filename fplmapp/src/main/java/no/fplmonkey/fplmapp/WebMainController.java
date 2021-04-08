package no.fplmonkey.fplmapp;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class WebMainController {

    @GetMapping(value = "/frontend")
    public String home() {
        return "index.html";
    }

    @GetMapping(value = "/player")
    public String player() {
        return "player.js";
    }

}