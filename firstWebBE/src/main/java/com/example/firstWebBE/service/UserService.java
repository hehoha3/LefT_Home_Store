package com.example.firstWebBE.service;

import com.example.firstWebBE.config.exceptionHandler.AuthenticationFailException;
import com.example.firstWebBE.config.exceptionHandler.CustomException;
import com.example.firstWebBE.model.dto.userDTO.ResponseDTO;
import com.example.firstWebBE.model.dto.userDTO.SignInDTO;
import com.example.firstWebBE.model.dto.userDTO.SignInResponseDTO;
import com.example.firstWebBE.model.dto.userDTO.SignupDTO;
import com.example.firstWebBE.model.entity.AuthenticationToken;
import com.example.firstWebBE.model.entity.User;
import com.example.firstWebBE.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class UserService {
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final AuthenticationService authenticationService;

//    Sign Up
    @Transactional
    public ResponseDTO signUp(SignupDTO signupDTO){
        if (
                Objects.nonNull(userRepository.findByUserName(signupDTO.getUserName()))
                || Objects.nonNull(userRepository.findByEmail(signupDTO.getEmail()))
        ){
            throw new CustomException("User Or Email Is Already Used !");
        } else {
//        Hash Password
            String encryptedPassword = signupDTO.getPassword();
            try {
                encryptedPassword = hashPassword(signupDTO.getPassword());
            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
            }

//            Save User
            User user = new User(signupDTO.getUserName(), signupDTO.getEmail(), encryptedPassword);
            userRepository.save(user);

//            save Token
            AuthenticationToken authenticationToken = new AuthenticationToken(user);
            authenticationService.saveConfirmationToken(authenticationToken);

        }
        ResponseDTO responseDTO = new ResponseDTO("Success", "User Created Successfully");
        return responseDTO;
    }

    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
        return hash;
    }
//    Sign In
    public SignInResponseDTO signIn(SignInDTO signInDTO) {
//        find user by email or username and hash the password and so sánh với password trong DB
        User user = userRepository.findByUserName(signInDTO.getUserName());

        if (Objects.isNull(user)) {
            throw new AuthenticationFailException("User Does Not Exist !");
        }
        try {
            if (!user.getPassword().equals(hashPassword(signInDTO.getPassword()))){
                throw new AuthenticationFailException("PassWord is Wrong !!");
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        AuthenticationToken token = authenticationService.getToken(user);

        if (Objects.isNull(token)){
            throw new CustomException("Token is not exist !");
        }

        return new SignInResponseDTO("Success", token.getToken());
    }
}
