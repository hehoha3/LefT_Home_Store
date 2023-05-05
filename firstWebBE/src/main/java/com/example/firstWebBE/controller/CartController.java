package com.example.firstWebBE.controller;

import com.example.firstWebBE.config.exceptionHandler.AuthenticationFailException;
import com.example.firstWebBE.config.exceptionHandler.ProductNotExistsException;
import com.example.firstWebBE.model.dto.cart.AddToCartDTO;
import com.example.firstWebBE.model.dto.cart.CartDTO;
import com.example.firstWebBE.model.entity.Product;
import com.example.firstWebBE.model.entity.User;
import com.example.firstWebBE.service.AuthenticationService;
import com.example.firstWebBE.service.CartService;
import com.example.firstWebBE.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/cart")
@RequiredArgsConstructor
public class CartController {
    @Autowired
    private final CartService cartService;

    @Autowired
    private final AuthenticationService authenticationService;

    @Autowired
    private final ProductService productService;

    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody AddToCartDTO addToCartDTO,
                                            @RequestParam("token") String token) throws AuthenticationFailException, ProductNotExistsException {
//        authenticate token xem có phải là 1 User trong DB hay không
//        if (authenticationService.authenticate(token) == false)
        authenticationService.authenticate(token);
//        Find User
        User user = authenticationService.getUser(token);
        Product product = productService.getProductById(addToCartDTO.getProduct_id());
        cartService.addToCart(addToCartDTO, product, user);

        return new ResponseEntity<>("Add To Cart Success", HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<CartDTO> getCartsItem(@RequestParam("token") String token) throws ProductNotExistsException {
        authenticationService.authenticate(token);
//        Find User
        User user = authenticationService.getUser(token);
        CartDTO cartDTO = cartService.listCartItems(user);
        return new ResponseEntity<>(cartDTO, HttpStatus.OK);
    }

//    @DeleteMapping("/{cartItemId}")
//    public ResponseEntity<String> deleteCartItem(@PathVariable("cartItemId") Long itemId,
//                                                 @RequestParam("token") String token) throws ProductNotExistsException {
//        if (!authenticationService.authenticate(token)){
//            throw new ProductNotExistsException("Product Is NOT Exist !!");
//        } else {
////        Find User
//            User user1 = authenticationService.getUser(token);
//            cartService.deleteCartItem(itemId, user1);
//            return new ResponseEntity<>("Delete Item Success", HttpStatus.OK);
//        }
//    }

    @DeleteMapping("/delete/{cartItemId}")
    public ResponseEntity<String> deleteCartItem(@PathVariable("cartItemId") Long itemID,
                                                 @RequestParam("token") String token) throws AuthenticationFailException {
        authenticationService.authenticate(token);
        User user1 = authenticationService.getUser(token);
        cartService.deleteCartItem(itemID, user1);
        return new ResponseEntity<String>("Item Has Been Removed", HttpStatus.OK);
    }
}
