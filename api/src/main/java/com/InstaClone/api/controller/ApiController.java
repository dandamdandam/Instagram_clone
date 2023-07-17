package com.InstaClone.api.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * /api/get-post
 * 데이터베이스로부터 모든 게시물의 정보를 읽어 리턴하는 컨트롤러
 */
@Controller
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/get-posts")
    @CrossOrigin(origins = "*") //CORS문제 해결
    @ResponseBody
    public List<Map<String, Object>> findAllPosts() {

        List<Map<String, Object>> posts = new ArrayList<>();
        for (int i = 1; i <= 3; i++) {
            Map<String, Object> post = new HashMap<>();
            Map<String, Object> author = new HashMap<>();

            post.put("id", i);
            author.put("name", i);
            author.put("image", "assets/random_pfp/pfp"+i+".jpg");
            post.put("author", author);
            post.put("postImage", "https://source.unsplash.com/category/insta");
            post.put("timestamp", i);
            post.put("likes", i);
            post.put("comment", i);
            posts.add(post);
        }

        return posts;
    }

}