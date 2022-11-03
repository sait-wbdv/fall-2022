- [Quick Start Guide](https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html)
    - What is quickstart mode?
        - It looks like it uses a default config and is recommended; 
        - The other option is a manual config;
        - There doesn't seem to be any documentation for what the default config options are?]\
- [Creating content types in Strapi](https://www.youtube.com/watch?v=F7-bkfhr0zU)
    - `User` is a built-in type
    - Collection Type: for storing multiple things
    - 

1. Create Content Type
    - Videos
        - Title: short text
        - URL: short text
        - Description: Long text
2. Add content
    - [JavaScript Tutorial for Beginners](https://youtu.be/W6NZfCO5SIk) by Mosh
3. Generate API Token
    ``` fbe3a020f6b5142696fc9ab3f11911529fc548c8a3a6af8e8f98f9df4a547e1e58780a2fa1d1642d79d79d9df0d6473e450b7311f5f0d471d788cd215156d866b97351d4a3d84d8762d37fe0f33240cc506a0562d23f257e794063eb9796dd1261e7ce4715290787d1b00d1fa1957ebba3ee7db1e16eeb62b1d414e9d6923372
    ```
    - To use in Postman:
        1. Select Authorization
        2. Type: BearerToken
        3. Token: above
    - Problem: Videos not listed in response
4. Publish content
    1. Content Manager > Videos
    2. Edit
    3. Publish Collection Type
5. Relations: Author field
    - [Understanding and using Relations in Strapi](https://strapi.io/blog/understanding-and-using-relations-in-strapi)
    - [Managing relational fields](https://docs.strapi.io/user-docs/latest/content-manager/managing-relational-fields.html)
    - Types:
        - One-to-one (1:1)
        - One-to-Many
        - Many-to-Many
        - One-Way
        - Many-way
        - Polymorphic
    - Instructions
        1. Create Collection Type
        2. Add collection as relation to Videos
    - Problem: Relations don't populate in `/videos` queries by default
        - [No relational fields in response Strapi v4](https://stackoverflow.com/questions/70301738/no-relational-fields-in-response-strapi-v4)
        - [Entity Service API: Populating](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/populate.html)
            - [Entity Service API](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service-api.html)
        - Solution for now:
            ```
            GET /api/videos?populate=*
            ```
6. Categories