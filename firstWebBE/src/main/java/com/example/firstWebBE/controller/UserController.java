package com.example.firstWebBE.controller;

import com.example.firstWebBE.model.dto.userDTO.ResponseDTO;
import com.example.firstWebBE.model.dto.userDTO.SignInDTO;
import com.example.firstWebBE.model.dto.userDTO.SignInResponseDTO;
import com.example.firstWebBE.model.dto.userDTO.SignupDTO;
import com.example.firstWebBE.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping(path = "/user")
@RestController
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private final UserService userService;

//    sign Up
    @PostMapping("/signup")
    public ResponseDTO signup(@RequestBody SignupDTO signupDTO){
        return userService.signUp(signupDTO);
    }

//    Sign In
    @PostMapping("/signin")
    public SignInResponseDTO signIn(@RequestBody SignInDTO signInDTO){
        return userService.signIn(signInDTO);
    }

}
