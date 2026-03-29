db = db.getSiblingDB("amazonas_distdb");

db.users.createIndex({
    "email": 1
},
{
    "name": "idx_users_email",
    "unique": true,
    "background": true
});

db.users.createIndex({
    "tax_id": 1
},
{
    "name": "idx_users_tax_id",
    "unique": true,
    "background": true
});

db.users.createIndex({
    "created_on": 1
},
{
    "name": "idx_users_created_on",
    "background": true
});

db.products.createIndex({
    "code": 1
},
{
    "name": "idx_products_code",
    "unique": true,
    "background": true
});

db.products.createIndex({
    "category": 1
},
{
    "name": "idx_products_category",
    "background": true
});

db.products.createIndex({
    "family": 1
},
{
    "name": "idx_products_family",
    "background": true
});

db.products.createIndex({
    "rating_avg": 1
},
{
    "name": "idx_products_rating_avg",
    "background": true
});

db.cart.createIndex({
    "user_id": 1
},
{
    "name": "idx_cart_user_id",
    "background": true
});

db.cart.createIndex({
    "updated_at": 1
},
{
    "name": "idx_cart_ttl",
    "expireAfterSeconds": 604800,
    "background": true
});

db.coupons.createIndex({
    "coupon_code": 1
},
{
    "name": "idx_coupons_code",
    "unique": true,
    "background": true
});

db.coupons.createIndex({
    "expires_at": 1
},
{
    "name": "idx_coupons_expires_at",
    "background": true
});

db.reviews.createIndex({
    "user_id": 1
},
{
    "name": "idx_reviews_user_id",
    "background": true
});

db.reviews.createIndex({
    "product_id": 1
},
{
    "name": "idx_reviews_product_id",
    "background": true
});

db.orders.createIndex({
    "user_id": 1
},
{
    "name": "idx_orders_user_id",
    "background": true
});

db.orders.createIndex({
    "items.product_id": 1
},
{
    "name": "idx_orders_product_id",
    "background": true
});