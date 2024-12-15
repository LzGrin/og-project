Компонент который отрисовывает данные о кастомере. <br/>

Имеет модель: <br/>

```ts
  id: number,
  userName: string,
  avatarUrl: string | null,
  description: string,
  subscriptionsAmount: number,
  firstName: string,
  lastName: string,
  isActive: boolean,
  stack: string[],
  city: string
```
id - идентификатор пользователя <br/>
userName - Имя пользователя <br/>
avatarUrl - урла на фото кастомера <br/>
description - описание <br/>
subscriptionsAmount - сколько подписок имеет <br/>
firstName - имя пользователя <br/>
lastName - фамилия пользователя <br/>
isActive - активен этот пользователь на данный момент или нет <br/>
stack - знания, которыми пользователь обладает, он может тут указать ```HTML```, ```CSS```, ```Angular```,  тд. <br/>
city - город кастомера <br/>
