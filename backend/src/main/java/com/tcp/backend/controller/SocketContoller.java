package com.tcp.backend.controller;

import java.util.HashMap;
import java.util.List;

import org.apache.logging.log4j.message.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcp.backend.model.SocketVo;

@CrossOrigin("http://localhost:4000")
@RestController
public class SocketContoller {

    // @MessageMapping("/webSocket")
    // @SendTo("/topic")
    // public Message boradCast(Message message) {
    // System.out.println("##############");
    // System.out.println(message.getFormattedMessage());
    // System.out.println("##############");
    // return message;
    // }

    @MessageMapping("/hello")
    @SendTo("/topic/roomId")
    public SocketVo boradCast(@RequestBody SocketVo message) throws Exception {
        System.out.println("###################");
        System.out.println(message);
        System.out.println("###################");
        return message;
    }
}