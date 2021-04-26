package no.fplmonkey.fplmapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.text.ParseException;


@RestController
public class CountdownController {
    @GetMapping("/api/countdown")
    public String countdown() {
        SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
        String dateString = "22-4-2021 01:00:00";

        int seconds = 0;
        int minutes = 0;
        int hours = 0;
        int days = 0;

        try{
        Date dateNow = new Date();
        Date dateEnd = sdf.parse(dateString);
        long difference = dateEnd.getTime() - dateNow.getTime();

        seconds = (int) (difference / 1000) % 60 ;
        minutes = (int) ((difference / (1000*60)) % 60);
        hours   = (int) ((difference / (1000*60*60)) % 24);
        days    = (int) (difference / (1000*60*60*24));

        }catch(ParseException e){
            e.printStackTrace();
        }

        return "Next game week: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "\n";
    }
}