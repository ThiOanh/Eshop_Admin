export const LOCATIONS = {
  HOME_PAGE: "/",
  DASHBOARD: "/dashboard",
  ORDER: "/order",
  ORDER_DETAIL: '/order/:id',
  CREATE_ORDER_OFF: '/create_order_offline',
  CREATE_ORDER_ON: '/create_order_online',
  CHECKOUT: '/checkout',
  PRODUCTS: "/products",
  PRODUCT_DETAIL: '/product_detail/:id',
  ADD_PRODUCT: '/add_product',
  UPDATE_PRODUCT: '/update_product/:id',
  CATEGORY: "/categories",
  ADD_CATEGORY: '/add_category',
  UPDATE_CATEGORY: '/update_category',
  SETTING: '/setting',
  MESSAGES: '/messages',
  SIGNOUT: '/singout'
};

// pageSize pagination of orders
// Created by Man Nguyen
// 19/10/2023
export const pageSize = 20;

// listStatus of orders status menu 
// Created by Man Nguyen
// 19/10/2023
export const listStatus = ['WAITING', 'COMPLETED', 'CANCELED', 'REJECTED', 'DELIVERING'];

// district code send
// Created by Man Nguyen
// 11/11/2023
export const districtCodeSend = 1526;
