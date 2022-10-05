# common-types
Cali finance interface repository

# #1 Rule: 
### Never modify an interface. Instead, extend and create a new one.

```ts 
interface BaseUser {
    name: string,
    id: number
}

interface UserWithCompany extends BaseUser {
    company: {
        name: string,
        id: number
    }
}
```
