package com.example.demo.controller;

// ANDREA

import com.example.demo.DTO.UserDTO;
import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    private UserService service;

    @Autowired

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping()
    public User saveUser(@RequestBody UserDTO userDTO){
        return service.save(userDTO);
    }

    @GetMapping("/{id}")
    public User findUser(@PathVariable("id") Integer id){
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id")Integer id){ //localhost:8080/api/v1/manager
        return service.deleteById(id);
    }

    @GetMapping("/all")
    public List<UserDTO> getAllUsers(){
        List<UserDTO> userDTO = service.getAllUsers();
        return userDTO;
    }

    @PutMapping
    public UserDTO updateUser(@RequestBody UserDTO userDTO){
       return service.updateUser(userDTO);
    }

    @PostMapping("/validation/{email}")
    public ResponseEntity<Void> validationUser(@PathVariable("email") String email){
        service.validation(email);
        return ResponseEntity.ok().build();
    }

}
