import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, 
    getSingleProductController, productCategoryController, productCountController,
     productListController,
     productPhotoController, 
    relatedProductController, 
    searchProductController, 
    updateProductController } from '../controller/productController.js';
import formidable from 'express-formidable';

const router = express.Router();


//routes
router.post('/create-product',requireSignIn, isAdmin , formidable(),createProductController);

//routes
router.put('/update-product/:pid',requireSignIn, isAdmin , formidable(),updateProductController);

//get products
router.get('/get-product',getProductController);

//get Single Product
router.get('/get-product/:slug',getSingleProductController);

//get photo
router.get('/product-photo/:pid',productPhotoController);

//delete product
router.delete('/delete-product/:pid',deleteProductController);

//product count
router.get("/product-count", productCountController);

 //product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get('/related-product/:pid/:cid', relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;