package no.fplmonkey.fplmapp;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class PlayerController {


    @GetMapping(value = "/player")
    public String forward() {
        return "forward:/";
    }

}