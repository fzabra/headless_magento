# 🛒 Headless Magento Storefront

A modern **headless frontend** for Magento 2, built with **Next.js**, **Apollo Client**, and **Tailwind CSS**. This project provides a clean, performant, and flexible base for custom Magento storefronts.

## ✨ Features

- Built with Next.js (Pages Router)
- Magento GraphQL integration via Apollo Client
- Tailwind CSS v4 for styling
- TypeScript support
- Atomic Design architecture: `atoms/`, `molecules/`, `organisms/`
- Remote image handling with `next/image` and `remotePatterns`
- Dynamic product listing and product detail pages

## 📁 Folder Structure

```
/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── graphql/
├── lib/
├── pages/
├── public/
├── styles/
├── tailwind.config.ts
├── next.config.js
└── .env.local
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/headless-magento.git
cd headless-magento
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and set your Magento GraphQL endpoint:

```
NEXT_PUBLIC_MAGENTO_GRAPHQL_ENDPOINT=https://your-magento-domain.com/graphql
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result in your browser.

## 📌 Roadmap

- [ ] Customer authentication
- [ ] Cart and checkout integration
- [ ] Favorites and wishlist
- [ ] CMS blocks and custom pages
- [ ] SEO and meta tags
- [ ] Multi-language and currency support

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.
