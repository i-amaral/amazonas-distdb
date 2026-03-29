db = db.getSiblingDB("amazonas_distdb");

db.createCollection("users", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Users",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "first_name": {
                    "bsonType": "string",
                    "title": "First Name",
                    "maxLength": 50,
                    "minLength": 3
                },
                "last_name": {
                    "bsonType": "string",
                    "title": "Last Name",
                    "maxLength": 100,
                    "minLength": 3
                },
                "email": {
                    "bsonType": "string",
                    "title": "E-mail",
                    "maxLength": 254,
                    "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                },
                "telephones": {
                    "bsonType": "array",
                    "title": "Telephones",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string",
                        "maxLength": 16
                    }
                },
                "birth_date": {
                    "bsonType": "string",
                    "title": "Date of Birth",
                    "maxLength": 10,
                    "minLength": 10
                },
                "address": {
                    "bsonType": "object",
                    "title": "Address",
                    "properties": {
                        "street": {
                            "bsonType": "string",
                            "title": "Street",
                            "maxLength": 150
                        },
                        "number": {
                            "bsonType": "string",
                            "title": "Number",
                            "maxLength": 10
                        },
                        "neighborhood": {
                            "bsonType": "string",
                            "title": "Neighborhood",
                            "maxLength": 100
                        },
                        "postal_code": {
                            "bsonType": "string",
                            "title": "Postal Code",
                            "maxLength": 10
                        },
                        "city": {
                            "bsonType": "string",
                            "title": "City",
                            "maxLength": 100
                        },
                        "state": {
                            "bsonType": "string",
                            "title": "State",
                            "maxLength": 100
                        },
                        "country": {
                            "bsonType": "string",
                            "title": "Country",
                            "maxLength": 2
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "street",
                        "number",
                        "neighborhood",
                        "postal_code",
                        "city",
                        "state",
                        "country"
                    ]
                },
                "tax_id": {
                    "bsonType": "string",
                    "title": "Tax ID",
                    "maxLength": 20
                },
                "payment_methods": {
                    "bsonType": "array",
                    "title": "Payment Methods",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "type": {
                                "bsonType": "string",
                                "maxLength": 11
                            },
                            "brand": {
                                "bsonType": "string",
                                "maxLength": 20
                            },
                            "last4": {
                                "bsonType": "string",
                                "maxLength": 4,
                                "minLength": 4
                            },
                            "holder_name": {
                                "bsonType": "string",
                                "maxLength": 26
                            },
                            "token": {
                                "bsonType": "string",
                                "maxLength": 255
                            },
                            "expires_at": {
                                "bsonType": "string",
                                "maxLength": 5,
                                "minLength": 5
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "status": {
                    "bsonType": "bool",
                    "title": "Status"
                },
                "created_on": {
                    "bsonType": "date",
                    "title": "Created On"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "first_name",
                "last_name",
                "email",
                "telephones",
                "birth_date",
                "address",
                "tax_id",
                "status",
                "created_on"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error",
    "collation": {
        "alternate": "non-ignorable",
        "backwards": false,
        "caseFirst": "off",
        "locale": "pt",
        "numericOrdering": true,
        "strength": 1
    }
});

db.createCollection("products", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Products",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "name": {
                    "bsonType": "string",
                    "title": "Name",
                    "maxLength": 200
                },
                "code": {
                    "bsonType": "string",
                    "title": "Code",
                    "maxLength": 50
                },
                "description": {
                    "bsonType": "string",
                    "title": "Description",
                    "maxLength": 5000
                },
                "type": {
                    "bsonType": "string",
                    "title": "Type",
                    "maxLength": 50
                },
                "category": {
                    "bsonType": "string",
                    "title": "Category",
                    "maxLength": 100
                },
                "family": {
                    "bsonType": "string",
                    "title": "Family",
                    "maxLength": 100
                },
                "price": {
                    "bsonType": "decimal",
                    "title": "Price"
                },
                "stock": {
                    "bsonType": "int",
                    "title": "Stock",
                    "minimum": 0
                },
                "images": {
                    "bsonType": "array",
                    "title": "Images",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "string",
                        "maxLength": 2048
                    },
                    "maxItems": 20
                },
                "attributes": {
                    "bsonType": "object",
                    "title": "Attributes",
                    "properties": {
                        "brand": {
                            "bsonType": "string",
                            "title": "Brand",
                            "maxLength": 255
                        },
                        "model": {
                            "bsonType": "string",
                            "title": "Model",
                            "maxLength": 255
                        },
                        "color": {
                            "bsonType": "string",
                            "title": "Color",
                            "maxLength": 255
                        }
                    },
                    "additionalProperties": true
                },
                "rating_avg": {
                    "bsonType": "decimal",
                    "title": "Rating AVG",
                    "maximum": 5,
                    "minimum": 0
                },
                "status": {
                    "bsonType": "bool",
                    "title": "Status"
                },
                "created_on": {
                    "bsonType": "date",
                    "title": "Created On"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "name",
                "code",
                "description",
                "type",
                "category",
                "family",
                "price",
                "stock",
                "status",
                "created_on"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error",
    "collation": {
        "alternate": "non-ignorable",
        "backwards": false,
        "caseFirst": "off",
        "locale": "pt",
        "numericOrdering": true,
        "strength": 1
    }
});

db.createCollection("cart", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Cart",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "user_id": {
                    "bsonType": "objectId",
                    "title": "User ID"
                },
                "items": {
                    "bsonType": "array",
                    "title": "Items",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "product_id": {
                                "bsonType": "objectId",
                                "title": "Product ID"
                            },
                            "name": {
                                "bsonType": "string",
                                "title": "Name",
                                "maxLength": 200
                            },
                            "unit_price": {
                                "bsonType": "decimal",
                                "title": "Unit Price"
                            },
                            "quantity": {
                                "bsonType": "int",
                                "title": "Quantity",
                                "minimum": 1
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "product_id",
                            "name",
                            "unit_price",
                            "quantity"
                        ]
                    },
                    "minItems": 1
                },
                "coupon_code": {
                    "bsonType": "string",
                    "title": "Coupon Code",
                    "maxLength": 20
                },
                "created_on": {
                    "bsonType": "date",
                    "title": "Created On"
                },
                "updated_at": {
                    "bsonType": "date",
                    "title": "Updated_At"
                },
                "total_price": {
                    "bsonType": "decimal",
                    "title": "Total Price"
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "user_id",
                "items",
                "created_on",
                "updated_at",
                "total_price"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error",
    "collation": {
        "alternate": "non-ignorable",
        "backwards": false,
        "caseFirst": "off",
        "locale": "pt",
        "numericOrdering": true,
        "strength": 1
    }
});

db.createCollection("coupons", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Coupons",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "coupon_code": {
                    "bsonType": "string",
                    "title": "Coupon Code",
                    "maxLength": 20
                },
                "discount_type": {
                    "bsonType": "string",
                    "title": "Discount Type",
                    "enum": [
                        "percentage",
                        "fixed"
                    ]
                },
                "discount_value": {
                    "bsonType": "decimal",
                    "title": "Discount Value",
                    "minimum": 0
                },
                "max_uses": {
                    "bsonType": "int",
                    "minimum": 1
                },
                "min_order_value": {
                    "bsonType": "decimal",
                    "minimum": 0
                },
                "expires_at": {
                    "bsonType": "date",
                    "title": "Expire Date "
                },
                "created_on": {
                    "bsonType": "date",
                    "title": "Created On"
                },
                "applicable_to": {
                    "bsonType": "object",
                    "title": "Applicable To",
                    "properties": {
                        "products_category": {
                            "bsonType": "array",
                            "title": "Products Category",
                            "additionalItems": true,
                            "items": {
                                "bsonType": "string",
                                "maxLength": 100
                            }
                        },
                        "products_code": {
                            "bsonType": "array",
                            "title": "Products Code",
                            "additionalItems": true,
                            "items": {
                                "bsonType": "string",
                                "maxLength": 50
                            }
                        }
                    },
                    "additionalProperties": false
                },
                "uses_count": {
                    "bsonType": "int",
                    "title": "Uses",
                    "minimum": 0
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "coupon_code",
                "discount_type",
                "discount_value",
                "max_uses",
                "min_order_value",
                "expires_at",
                "created_on",
                "applicable_to",
                "uses_count"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error",
    "collation": {
        "alternate": "non-ignorable",
        "backwards": false,
        "caseFirst": "off",
        "locale": "pt",
        "numericOrdering": true,
        "strength": 1
    }
});

db.createCollection("reviews", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Reviews",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "product_id": {
                    "bsonType": "objectId",
                    "title": "Product ID"
                },
                "user_id": {
                    "bsonType": "objectId",
                    "title": "User ID"
                },
                "order_id": {
                    "bsonType": "objectId",
                    "title": "Order ID"
                },
                "rating": {
                    "bsonType": "int",
                    "title": "Rating",
                    "maximum": 5,
                    "minimum": 1
                },
                "title": {
                    "bsonType": "string",
                    "title": "Title",
                    "maxLength": 100
                },
                "description": {
                    "bsonType": "string",
                    "title": "Description",
                    "maxLength": 1000
                },
                "created_on": {
                    "bsonType": "date",
                    "title": "Created On"
                },
                "helpful_votes": {
                    "bsonType": "int",
                    "title": "Helpful Votes",
                    "minimum": 0
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "product_id",
                "user_id",
                "order_id",
                "rating",
                "created_on"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error",
    "collation": {
        "alternate": "non-ignorable",
        "backwards": false,
        "caseFirst": "off",
        "locale": "pt",
        "numericOrdering": true,
        "strength": 1
    }
});

db.createCollection("orders", {
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "title": "Orders",
            "properties": {
                "_id": {
                    "bsonType": "objectId",
                    "title": "_id"
                },
                "user_id": {
                    "bsonType": "objectId",
                    "title": "User ID"
                },
                "address_shipping": {
                    "bsonType": "object",
                    "title": "Address Shipping",
                    "properties": {
                        "street": {
                            "bsonType": "string",
                            "title": "Street",
                            "maxLength": 150
                        },
                        "number": {
                            "bsonType": "string",
                            "title": "Number",
                            "maxLength": 10
                        },
                        "neighborhood": {
                            "bsonType": "string",
                            "title": "Neighborhood",
                            "maxLength": 100
                        },
                        "postal_code": {
                            "bsonType": "string",
                            "title": "Postal Code",
                            "maxLength": 10
                        },
                        "city": {
                            "bsonType": "string",
                            "title": "City",
                            "maxLength": 100
                        },
                        "state": {
                            "bsonType": "string",
                            "title": "State",
                            "maxLength": 100
                        },
                        "country": {
                            "bsonType": "string",
                            "title": "Country",
                            "maxLength": 2
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "street",
                        "number",
                        "neighborhood",
                        "postal_code",
                        "city",
                        "state",
                        "country"
                    ]
                },
                "payment": {
                    "bsonType": "object",
                    "title": "Payment",
                    "properties": {
                        "method": {
                            "bsonType": "string",
                            "title": "Method",
                            "enum": [
                                "credit_card",
                                "debit_card",
                                "pix",
                                "ticket",
                                "other"
                            ],
                            "maxLength": 11
                        },
                        "status": {
                            "bsonType": "string",
                            "title": "Status",
                            "enum": [
                                "pending",
                                "approved",
                                "refused",
                                "refunded"
                            ],
                            "maxLength": 15
                        },
                        "token": {
                            "bsonType": "string",
                            "title": "Token",
                            "maxLength": 255
                        },
                        "paid_at": {
                            "bsonType": "date",
                            "title": "Paid At"
                        }
                    },
                    "additionalProperties": false,
                    "required": [
                        "method",
                        "status",
                        "token"
                    ]
                },
                "coupon_code": {
                    "bsonType": "string",
                    "title": "Coupon Code",
                    "maxLength": 20
                },
                "discount_amount": {
                    "bsonType": "decimal",
                    "title": "Discount Amount",
                    "minimum": 0
                },
                "total_price": {
                    "bsonType": "decimal",
                    "title": "Total Price",
                    "minimum": 0
                },
                "tracking_code": {
                    "bsonType": "string",
                    "title": "Tracking Code",
                    "maxLength": 100
                },
                "created_on": {
                    "bsonType": "date",
                    "title": "Created On"
                },
                "updated_at": {
                    "bsonType": "date",
                    "title": "Updated At"
                },
                "status": {
                    "bsonType": "string",
                    "title": "Status",
                    "enum": [
                        "pending",
                        "confirmed",
                        "shipped",
                        "delivered",
                        "cancelled"
                    ],
                    "maxLength": 15
                },
                "items": {
                    "bsonType": "array",
                    "title": "Items",
                    "additionalItems": true,
                    "items": {
                        "bsonType": "object",
                        "properties": {
                            "product_id": {
                                "bsonType": "objectId",
                                "title": "Product ID"
                            },
                            "unit_price": {
                                "bsonType": "decimal",
                                "title": "Unit Price",
                                "minimum": 0
                            },
                            "quantity": {
                                "bsonType": "int",
                                "title": "Quantity",
                                "minimum": 1
                            },
                            "name": {
                                "bsonType": "string",
                                "title": "Name",
                                "maxLength": 200
                            }
                        },
                        "additionalProperties": false,
                        "required": [
                            "product_id",
                            "unit_price",
                            "quantity",
                            "name"
                        ]
                    }
                }
            },
            "additionalProperties": true,
            "required": [
                "_id",
                "user_id",
                "address_shipping",
                "payment",
                "total_price",
                "created_on",
                "updated_at",
                "status",
                "items"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error",
    "collation": {
        "alternate": "non-ignorable",
        "backwards": false,
        "caseFirst": "off",
        "locale": "pt",
        "numericOrdering": true,
        "strength": 1
    }
});