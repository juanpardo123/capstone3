package com.example.Capstone;

import java.util.List;

import org.springframework.stereotype.Service;

public interface UsersService {
    List<Users> getAllUsers();
    Users getUserByUserId(Long id);

}
