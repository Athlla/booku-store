# Booku Store

Ini adalah test frontend dari sejutacita dengan tema bookstore.

## Tech Stack
- React.js
- Next.js
- TailwindCSS
- Context API

## Link
- Live site URL [https://booku-store-athlla.vercel.app/](https://booku-store-athlla.vercel.app/)

## Feedback
- Pada api buku tidak terdapat totalpage, currentpage yang mana membuat server side pagination lebih sulit, akan lebih baik jika pada response api buku terdapat totalpage dan juga currentpage.
- Pada disetiap object buku kategori hanya diberikan dalam bentuk id, akan lebih baik jika dijadikan object yang mana terdapat id dan juga name dari kategori agar tidak perlu melakukan request lagi ke api kategori


## How to run

```bash
# install dependencies
npm i
# atau
yarn

# menjalankan dalam development mode di localhost:3000
npm run dev
# atau
yarn dev

# build untuk production
npm run build
# atau
yarn build

# start production mode
npm start
# atau
yarn start
```