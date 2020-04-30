const Mock = require('mockjs')
 Mock.mock('/api/user/login','get',{
    "status": 0,
    "data": {
        "id": 12,
        "username": "@name",
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
     }
});
