package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpHeaders;import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/dummy")
public class DummyController {
    @PostMapping("/create-user")
    public String createUser(@RequestBody UserDto userDto) {
        return "User created successfully";
    }

    @GetMapping("/headers")
    public String readHeaders(@RequestHeader HttpHeaders headers) {
        List<String> location = headers.get("User-Location");
        return "Received headers with value : " + headers.toString();
    }

    @GetMapping("/search")
    public String searchUser(@RequestParam(required = false, defaultValue = "Guest",
            name ="name") String name) {
        return "Search for user : " + name;
    }

    @GetMapping("/multiple-search")
    public String multipleSearch(@RequestParam Map<String,String> params) {
        return "Search for user : " + params.get("firstName") + " " + params.get("lastName");
    }

    @GetMapping("/user/{userId}/posts/{postId}")
    public String getUser(@PathVariable String userId, @PathVariable String postId) {
        return "Searching for user : " + userId + " and post : " + postId;
    }

    @PostMapping("/request-entity")
    public String createUserWithEntity(RequestEntity<UserDto> requestEntity) {
        HttpHeaders header = requestEntity.getHeaders();
        requestEntity.getBody();
        return "User created successfully";
    }
}
