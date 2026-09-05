package com.eazybytes.eazystore.controller;

import com.eazybytes.eazystore.scopes.ApplicationScopedBean;
import com.eazybytes.eazystore.scopes.RequestScopedBean;
import com.eazybytes.eazystore.scopes.SessionScopedBean;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/scope")
@RequiredArgsConstructor
public class ScopeController {
    private final RequestScopedBean requestScopedBean;
    private final SessionScopedBean sessionScopedBean;
    private final ApplicationScopedBean applicationScopedBean;

    @GetMapping("/request")
    public ResponseEntity<String> testRequestScope(){
        requestScopedBean.setUserName("John Doe");
        return ResponseEntity.ok().body(requestScopedBean.getUserName());
    }

    @GetMapping("/session")
    public ResponseEntity<String> testSessisonScope(){
        requestScopedBean.setUserName("John Doe");
        return ResponseEntity.ok().body(requestScopedBean.getUserName());
    }

    @GetMapping("/application")
    public ResponseEntity<Integer> testApplicationScope(){
        requestScopedBean.setUserName("John Doe");
        return ResponseEntity.ok().body(requestScopedBean.getUserName());
    }


    @GetMapping("/test")
    public ResponseEntity<Integer> testScope(){
        requestScopedBean.setUserName("John Doe");
        return ResponseEntity.ok().body(applicationScopedBean.getUserName());
    }
}
