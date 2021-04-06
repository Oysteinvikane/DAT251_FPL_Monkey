package no.fplmonkey.fplmapp;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class WebMainController {

    @RequestMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}" })
    public String getIndex(HttpServletRequest request) {
        return "/index.html";
    }

    // @RequestMapping(value = "/home")
    // public String home() {
    //     return "home";
    // }

    // @RequestMapping(value = "/player")
    // public String player() {
    //     return "player";
    // }
}