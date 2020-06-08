# "repository": [my-wallet-backend](https://github.com/YEvhen-SHmatko/my-wallet-backend.git)

# "author": "Yevhen Shmatko <yevhen.shmatko@gmail.com>",

# "license": "MIT",

## //users

### registration

### POST запрос http://localhost:3001/auth/register с такой структурой данных

### передаем в body(json):

```
{
 "username": "Kori",
 "telephone": "1231321",
 "password": "12345",
 "email": "kori@gmail.com"
}

```

- в ответ получите следующие данные

```
{
    "status": "success",
    "user": {
        "favoriteProducts": [],
        "viewedProducts": [],
        "orders": [],
        "_id": "5e846566080f570ccd311f41",
        "username": "Kori",
        "telephone": "1231321",
        "password": "$2b$10$0tMLDjXuwf13lJdX9VfTAuBQbmjKJjBvTG6JjIa4stDj9Z.aS5eRC",
        "email": "kori@gmail.com",
        "modified": "2020-04-01T09:29:31.993Z",
        "created": "2020-04-01T09:29:31.993Z",
        "__v": 0
    }
}
```

- Если пользователь с таким email или username существует то выведется ощибка

```
{
    "status": "user was not saved",
    "error": "dublicate email" или "dublicate user name"
}
```

## login

### .POST запрос http://localhost:3001/auth/login логинимся через Basic Auth

### вводим логин/email и пароль

### в ответ получаем данные:

```
{
    "success": true,
    "message": "Enjoy your token!",
    "token": "<token>"
}
```

# token необходимо отправлять одним из следующих способов при каждом последуюшем запросе:

```
// POST { token: <token>}
// GET ?token=<token>
// header { x-access-token: <token> }
```

### PUT запрос http://localhost:3001/user/:id (5e846566080f570ccd311f41) например изменяем таие данные

### передаем в body(json) одно из свойств:

```
{
  "favoriteProducts": ["5e8437b8e9ec053c968f4583", "5e843e23f025f460737122ad"]
}
```

- в ответ получите следующие данные

```
{
    "status": "success",
    "user": {
        "favoriteProducts": [
            "5e8437b8e9ec053c968f4583",
            "5e843e23f025f460737122ad"
        ],
        "viewedProducts": [],
        "orders": [],
        "_id": "5e846566080f570ccd311f41",
        "username": "Kori",
        "telephone": "1231321",
        "password": "$2b$10$RS0B1BOQieJcG9i8UfToq.64MAoYgxR7cb/kMCF5k3slOsKp4mCPu",
        "email": "kori@gmail.com",
        "modified": "2020-04-01T10:00:57.816Z",
        "created": "2020-04-01T09:56:54.794Z",
        "__v": 0
    }
```

### GET запрос http://localhost:3001/auth/current

### Также передаем наш токен например header { x-access-token: <token> }

### в ответ получите следующие данные

```
{
    "status": "success",
    "user": {
        "favoriteProducts": [
            "5e8437b8e9ec053c968f4583",
            "5e843e23f025f460737122ad"
        ],
        "viewedProducts": [],
        "orders": [],
        "_id": "5e9164b1ad9fb8237e4f1bb2",
        "username": "Kori",
        "telephone": "1231321",
        "password": "$2b$10$nmFwFwXb9UB3inBCygguL.x3KJD0MASOc3NDFj1fYbW/hha8LXFIe",
        "email": "kori@gmail.com",
        "modified": "2020-04-11T08:15:58.856Z",
        "created": "2020-04-11T06:33:21.326Z",
        "__v": 0
    }
}
```

### GET запрос http://localhost:3001/user/:id (5e846566080f570ccd311f41)

### в ответ получите следующие данные

```
{
    "status": "success",
    "user": {
        "favoriteProducts": [
            "5e8437b8e9ec053c968f4583",
            "5e843e23f025f460737122ad"
        ],
        "viewedProducts": [],
        "orders": [],
        "_id": "5e846566080f570ccd311f41",
        "username": "Kori",
        "telephone": "1231321",
        "password": "$2b$10$RS0B1BOQieJcG9i8UfToq.64MAoYgxR7cb/kMCF5k3slOsKp4mCPu",
        "email": "kori@gmail.com",
        "modified": "2020-04-01T10:00:57.816Z",
        "created": "2020-04-01T09:56:54.794Z",
        "__v": 0
    }
}
```

## //products

### .POST запрос http://localhost:3001/product создает / добавляет продукт в колекцию products

### передаем в body(json):

```
{
    "sku": 1120001,
    "name": "Піца Неаполітана",
    "description": "Шинка, печериці та томати - це прекрасне гастрономічне тріо, у якому  інші компоненти будуть зайвими. Піца «Неаполітана» відмінний вибір, якщо треба вгамувати почуття голоду друзів або колег, а також смачно і ситно пообідати або повечеряти. Велика кількість грибів і шинки допоможуть впоратися і з першим, і з другим.",
    "price": 120,
    "currency": "UAN",
    "creatorId": "1",
    "categories": ["pizza"]
}
```

- получаем в ответ при успешном сохранении:

```
{
    "status": "success",
    "product": {
        "categories": [
            "pizza"
        ],
        "_id": "5e8437b8e9ec053c968f4583",
        "sku": 1120001,
        "name": "Піца Неаполітана",
        "description": "Шинка, печериці та томати - це прекрасне гастрономічне тріо, у якому  інші компоненти будуть зайвими. Піца «Неаполітана» відмінний вибір, якщо треба вгамувати почуття голоду друзів або колег, а також смачно і ситно пообідати або повечеряти. Велика кількість грибів і шинки допоможуть впоратися і з першим, і з другим.",
        "price": 120,
        "currency": "UAN",
        "creatorId": "1",
        "modified": "2020-04-01T06:42:00.606Z",
        "created": "2020-04-01T06:42:00.606Z",
        "__v": 0
    }
}
```

- при дублировании имени:

```
{
    "status": "product was not saved",
    "error": "dublicate name"
}
```

- при других ошибках:

```
{
    "status": "product was not saved",
}
```

### GET запрос http://localhost:3001/products

### в ответ получаем status и масив всех продуктов в свойстве products

```
{
    "status": "success",
    "products": [
        {
            "categories": [
                "pizza"
            ],
            "_id": "5e8437b8e9ec053c968f4583",
            "sku": 1120001,
            "name": "Піца Неаполітана",
            "description": "Шинка, печериці та томати - це прекрасне гастрономічне тріо, у якому  інші компоненти будуть зайвими. Піца «Неаполітана» відмінний вибір, якщо треба вгамувати почуття голоду друзів або колег, а також смачно і ситно пообідати або повечеряти. Велика кількість грибів і шинки допоможуть впоратися і з першим, і з другим.",
            "price": 120,
            "currency": "UAN",
            "creatorId": "1",
            "modified": "2020-04-01T06:42:00.606Z",
            "created": "2020-04-01T06:42:00.606Z",
            "__v": 0
        },
        ...
        ...
        ...
        {
            "categories": [
                "pizza"
            ],
            "_id": "5e843e68f025f460737122b2",
            "sku": 1120007,
            "name": "Піца Тревізо",
            "description": "Гірчичний соус, сир Моцарела, апетитна салямі, свинина, стиглі томати, мариновані огірки, палкий гострий перець, трохи зелені та пікантне часникове масло.",
            "price": 280,
            "currency": "UAN",
            "creatorId": "1",
            "modified": "2020-04-01T07:10:32.890Z",
            "created": "2020-04-01T07:10:32.890Z",
            "__v": 0
        }
    ]
}
```

### Получение продукта по id

### GET запрос http://localhost:3001/product/:id (5e8437b8e9ec053c968f4583)

### в ответ получаем status и обьект продукта в свойстве product если продукт с таким id есть в базе

```
{
    "status": "success",
    "products": {
            "categories": [
                "pizza"
            ],
            "_id": "5e8437b8e9ec053c968f4583",
            "sku": 1120001,
            "name": "Піца Неаполітана",
            "description": "Шинка, печериці та томати - це прекрасне гастрономічне тріо, у якому  інші компоненти будуть зайвими. Піца «Неаполітана» відмінний вибір, якщо треба вгамувати почуття голоду друзів або колег, а також смачно і ситно пообідати або повечеряти. Велика кількість грибів і шинки допоможуть впоратися і з першим, і з другим.",
            "price": 120,
            "currency": "UAN",
            "creatorId": "1",
            "modified": "2020-04-01T06:42:00.606Z",
            "created": "2020-04-01T06:42:00.606Z",
            "__v": 0
        }
}
```

### Запрос на изменение данных продукта

### PUT запрос http://localhost:3001/product/:id (5e8437b8e9ec053c968f4583)

### передаем в body(json) одно из свойств:

```
{
    "ingredients":["5e944c39a1c5310abc007d1f","5e944c51a1c5310abc007d20","5e944c64a1c5310abc007d21"]
}
```

### в ответ получает измененный продукт где в поле будут сами обьекты продуктов а в базу запишутся сами id

```
"ingredients": [
            {
                "_id": "5e944c39a1c5310abc007d1f",
                "name": "champisnon",
                "description": "Some vegitable",
                "modified": "2020-04-13T11:25:45.197Z",
                "created": "2020-04-13T11:25:45.197Z",
                "__v": 0
            },
            {
                "_id": "5e944c51a1c5310abc007d20",
                "name": "potato",
                "description": "Some vegitable",
                "modified": "2020-04-13T11:26:09.349Z",
                "created": "2020-04-13T11:26:09.349Z",
                "__v": 0
            },
            {
                "_id": "5e944c64a1c5310abc007d21",
                "name": "tomato",
                "description": "Some vegitable",
                "modified": "2020-04-13T11:26:28.731Z",
                "created": "2020-04-13T11:26:28.731Z",
                "__v": 0
            }
        ],

```

## //orders

### Создание заказа

### POST запрос http://localhost:3001/orders/ с такой структурой данных

### передаем в body(json):

```
 {
  "creator": "5e84512d18aa6f1906da1c87",//id user
  "productsList": [
    {
      "product": "19112831",
      "type": "XXL",
      "itemsCount": 400
    }
  ],
  "deliveryType": "office",
  "deliveryAdress": "<some address>",
  "sumToPay": 600,
  "status": "finished"
 }
```

- в ответ получаем

```
{
    "status": "success",
    "order": {
        "_id": "5e845c5f70360f3931c42d69",
        "creator": "5e84512d18aa6f1906da1c87",
        "productsList": [
            {
                "_id": "5e845c5f70360f3931c42d6a",
                "product": "19112831",
                "type": "XXL",
                "itemsCount": 400
            }
        ],
        "deliveryType": "office",
        "deliveryAdress": "<some address>",
        "sumToPay": 600,
        "status": "finished",
        "modified": "2020-04-01T09:18:23.867Z",
        "created": "2020-04-01T09:18:23.867Z",
        "__v": 0
    }
}
```

### Получение заказа по id

### GET запрос http://localhost:3001/order/:id (5e845c5f70360f3931c42d69)

### Получаем данные:

```
{
    "status": "success",
    "order": {
        "_id": "5e845c5f70360f3931c42d69",
        "creator": "5e84512d18aa6f1906da1c87",
        "productsList": [
            {
                "_id": "5e845c5f70360f3931c42d6a",
                "product": "19112831",
                "type": "XXL",
                "itemsCount": 400
            }
        ],
        "deliveryType": "office",
        "deliveryAdress": "<some address>",
        "sumToPay": 600,
        "status": "finished",
        "modified": "2020-04-01T09:18:23.867Z",
        "created": "2020-04-01T09:18:23.867Z",
        "__v": 0
    }
}
```

## //ingredients

### Создание ингридиента

### POST запрос http://localhost:3001/ingredient с такой структурой данных

### передаем в body(json):

```
{
  "name": "tomato",
  "description": "Some vegitable"
}
```

### в ответ получим

```
{
    "status": "success",
    "ingredient": {
        "_id": "5e956a8271f5e13be9fd97ba",
        "name": "rice",
        "description": "Some vegitable",
        "modified": "2020-04-14T07:47:14.753Z",
        "created": "2020-04-14T07:47:14.753Z",
        "__v": 0
    }
}
```

## //comments

### Создание коментария

### POST запрос http://localhost:3001/comment с такой структурой данных

### передаем в body(json):

```
{
  "product": "5e94c13421800a757604ce64",
  "author": "<authorId>",
  "text": "This pizza was the best",
  "mark": 5
 }
```

### либо

```
{
  "product": "5e94c13421800a757604ce64",
  "text": "This pizza was the best",
  "mark": 5
 }
```

### author получаю с токена пользователя что залогинен

### в ответ получим

```
{
    "status": "success",
    "comment": {
        "_id": "5e956bac71f5e13be9fd97bb",
        "product": "5e94c13421800a757604ce64",
        "text": "This pizza was the best",
        "mark": 5,
        "author": "5e9164b1ad9fb8237e4f1bb2",
        "modified": "2020-04-14T07:52:12.720Z",
        "created": "2020-04-14T07:52:12.720Z",
        "__v": 0
    }
}
```

### GET запрос http://localhost:3001/comments?productId="5e94c2023c8ecd768067f33b"

### в ответ получим

```
{
    "status": "success",
    "comments": [
        {
            "_id": "5e94c2813c8ecd768067f33f",
            "product": "5e94c13421800a757604ce64",
            "text": "This pizza was the best",
            "mark": 5,
            "author": "5e9164b1ad9fb8237e4f1bb2",
            "modified": "2020-04-13T19:50:25.534Z",
            "created": "2020-04-13T19:50:25.534Z",
            "__v": 0
        },
        {
            "_id": "5e94c2aaa6ecd177cfb64148",
            "product": "5e94c13421800a757604ce64",
            "text": "This pizza was the best",
            "mark": 5,
            "author": "5e9164b1ad9fb8237e4f1bb2",
            "modified": "2020-04-13T19:51:06.616Z",
            "created": "2020-04-13T19:51:06.616Z",
            "__v": 0
        },
        {
            "_id": "5e94c2e05344aa78695aa913",
            "product": "5e94c13421800a757604ce64",
            "text": "This pizza was the best",
            "mark": 5,
            "author": "5e9164b1ad9fb8237e4f1bb2",
            "modified": "2020-04-13T19:52:00.969Z",
            "created": "2020-04-13T19:52:00.969Z",
            "__v": 0
        },
        {
            "_id": "5e956bac71f5e13be9fd97bb",
            "product": "5e94c13421800a757604ce64",
            "text": "This pizza was the best",
            "mark": 5,
            "author": "5e9164b1ad9fb8237e4f1bb2",
            "modified": "2020-04-14T07:52:12.720Z",
            "created": "2020-04-14T07:52:12.720Z",
            "__v": 0
        }
    ]
}
```

### Либо

```
{
    "status": "success",
    "comments": []
}
```
