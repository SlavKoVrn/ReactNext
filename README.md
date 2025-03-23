<h1> Deploy </h1>

[https://react-next-self-one.vercel.app/](https://react-next-self-one.vercel.app/)

<h3>развернуть проект</h3>

```bash
npx create-next-app@latest spa
```

<h3>дополнительные библиотеки</h3>

```bash
npm install bootstrap
npm install react-toastify
```

<p class=MsoNormal align=center style='text-align:center'><b><span
style='font-family:Acrom;color:#444444;background:white'>Тестовое задание
необходимо выполнить только с указанным стэком и прислать две ссылки. Работа с
только ссылкой на гитхаб рассматриваться не будет.</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span
style='font-family:Acrom;color:#444444;background:white'>&nbsp;</span></b></p>

<p class=MsoNormal align=center style='text-align:center'><b><span
style='font-family:Acrom;color:#444444;background:white'>Задача:</span></b><span
style='font-family:Acrom;color:#444444;background:white'> </span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-family:Acrom;color:#444444;background:white'>Создать SPA со списком
карточек, на каждой из которых выводится картинка и любая информация на ваш
вкус, которая пришла с эндпоинта или созданная пользователем. </span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-family:Acrom;color:#444444;background:white'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-family:Acrom;color:#444444;background:white'>Дизайн не важен,
главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже.
Остальные решения на вас. </span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-family:Acrom;color:#444444;background:white'>Стэк: Typescript \
React/Next  \ Redux || Zustand</span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span
style='font-family:Acrom;color:#444444;background:white'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>Для задачи можно выбрать любое публичное api, например,
отсюда https://github.com/public-apis/public-apis Все полученные и созданные
данные хранить во внутреннем store</span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>Можно использовать ui библиотеки, библиотеки для работы с
формой.&nbsp;</span></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>Будет оцениваться подход к заданию, качество и структура
кода.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm;line-height:normal;background:white'><b><span
style='font-size:19.0pt;font-family:Acrom;color:#444444'>Задача 1. Вывести
список продуктов</span></b></p>

<p class=MsoNormal><span style='font-family:Acrom;color:#444444;background:
white'>На странице /products </span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;border:none'><span
style='font-family:"Noto Sans Symbols";color:#444444;background:white'>&#9679;<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
style='font-family:Acrom;color:#444444;background:white'>вывести весь список
продуктов</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;border:none'><span
style='font-family:"Noto Sans Symbols";color:#444444;background:white'>&#9679;<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
style='font-family:Acrom;color:#444444;background:white'>на карточке должна
быть иконка лайка. При нажатии на которую, ставится или убирается like. Иконка
должна подкрашиваться, когда проставлен like. </span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;border:none'><span
style='font-family:"Noto Sans Symbols";color:#444444;background:white'>&#9679;<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
style='font-family:Acrom;color:#444444;background:white'>на карточке должна
быть иконка удаления. При нажатии на которую, карточка удаляется.</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;border:none'><span
style='font-family:"Noto Sans Symbols";color:#444444;background:white'>&#9679;<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
style='font-family:Acrom;color:#444444;background:white'>добавить фильтр для
просмотра всех карточек и карточек, добавленных в избранное</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;border:none'><span
style='font-family:"Noto Sans Symbols";color:#444444;background:white'>&#9679;<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
style='font-family:Acrom;color:#444444;background:white'>контент
карточки(текст) должен быть урезан, чтобы у карточек была одинаковая высота</span></p>

<p class=MsoNormal style='margin-left:36.0pt;text-indent:-18.0pt;border:none'><span
style='font-family:"Noto Sans Symbols";color:#444444;background:white'>&#9679;<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
style='font-family:Acrom;color:#444444;background:white'>при клике на любом
месте карточки (кроме иконки лайка и кнопки удаления) мы должно попадать на
отдельную страницу карточки.</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm;line-height:normal;background:white'><b><span
style='font-size:19.0pt;font-family:Acrom;color:#444444'>Задача 2. Страница
продукта</span></b></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>На странице /products/:id </span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>вывести
более подробную информацию о продукте. </span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>сделать
кнопку для перехода на основную страницу</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm;line-height:normal;background:white'><b><span
style='font-size:19.0pt;font-family:Acrom;color:#444444'>Задача 3. Создание
продукта</span></b></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>На отдельной странице /create- product реализовать создание
продукта</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>создать
форму с полями. Поля обязательные и с минимальной валидацией.</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>при
отправке формы, сохранить данные в общий store.</span></p>

<p class=MsoNormal style='margin-top:3.75pt;margin-right:0cm;margin-bottom:
0cm;margin-left:0cm;margin-bottom:.0001pt;line-height:normal;background:white'><span
style='font-size:12.0pt;font-family:Acrom;color:#444444'>&nbsp;</span></p>

<p class=MsoNormal style='margin-top:12.0pt;margin-right:0cm;margin-bottom:
12.0pt;margin-left:0cm;line-height:normal;background:white'><b><span
style='font-size:19.0pt;font-family:Acrom;color:#444444'>Бонусы</span></b></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>Реализовать
пагинацию списка</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>Реализовать
возможность редактирования карточки продукта</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>Реализовать
дополнительную фильтрацию</span></p>

<p class=MsoNormal style='margin-top:0cm;margin-right:0cm;margin-bottom:0cm;
margin-left:36.0pt;margin-bottom:.0001pt;text-indent:-18.0pt;line-height:normal;
background:white;border:none'><span style='font-family:"Noto Sans Symbols";
color:#444444;background:white'>&#9679;<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-family:Acrom;color:#444444;background:white'>Реализовать
поиск (без кнопки отправки) </span></p>

<p class=MsoNormal>&nbsp;</p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'>В каком
формате сдавать?</p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>Ссылка на GitHub + <b>проект, выложенный на GitHub Pages </b></span><b><span
style='font-family:Acrom;color:red;background:white'>(ВНИМАНИЕ! Работа будет
приниматься только с ссылкой на деплой).</span></b></p>

<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:
normal;background:white;border:none'><span style='font-family:Acrom;color:#444444;
background:white'>Сроки - до </span><span style='color:#444444;background:white'>7</span><span
style='font-family:Acrom;color:#444444;background:white'> дней.</span></p>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
