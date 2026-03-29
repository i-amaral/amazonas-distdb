db = db.getSiblingDB("amazonas_distdb");

sh.enableSharding("amazonas_distdb");

sh.shardCollection("amazonas_distdb.users",
{
    "_id": "hashed"
},
false,
{});

sh.shardCollection("amazonas_distdb.products",
{
    "category": 1
},
false,
{});

sh.shardCollection("amazonas_distdb.reviews",
{
    "product_id": "hashed"
},
false,
{});

sh.shardCollection("amazonas_distdb.orders",
{
    "_id": 1
},
true,
{});