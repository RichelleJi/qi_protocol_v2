# Qi Protocol


Why Does Qi Protocol Exist?

    To create a new version of gas token that allows users to manage gas exposures according to their individual risk appetite

What’s The Problem Qi Protocol Tries to Solve

    Ethereum users currently struggle to manage gas prices, which can be volatile and unpredictable. EIP-1559 made gas prices more predictable, yet they still fluctuate heavily over time(see below). This creates challenges for dApp developers and on-chain game developer, who may need to pay for users' gas fees in order to provide a better user experience. Further, miners, MEV searchers, and L2s are all finding solutions that could hedge their gas exposures. Currently, there are few solutions available to help participants hedge their gas exposure.

From EIP-1559 In Retrospect by Yinhong (William) Zhao, Kartik Nayak

From EIP-1559 In Retrospect by Yinhong (William) Zhao, Kartik Nayak
How Do We Solve This Problem?

    We propose a new version of gas token that allows users to put up collateral and mint gas tokens. This new design does not create the same problems as the old gas token, as it does not touch the Ethereum protocol level. Furthermore, we plan to leverage novel AMM designs, such as Panoptics and Primitive's Portfolio, to create multiple derivative positions that cater to various Participants’ risk appetites.
    The original gas token was designed in a research environment with moderate consideration of UX. We are going to embed the gas token into the gas transactions, such like AA(account abstraction) wallet payment, payment to validators through Flashbots bundles to extrapolate all the complexities. Ideally, users should not manage gas token by themselves.




## Getting Started 👀
## Development 🛠️

```bash
npm run dev
# or
yarn dev
```

## Stack ✅

- [Next.js](https://nextjs.org/docs)
- [Chakra UI](https://chakra-ui.com/)
- [ethers.js](https://docs.ethers.org/)
- [wagmi](https://wagmi.sh/)
- [ConnectKit](https://docs.family.co/connectkit/)
- [Sign-In with Ethereum](https://www.login.xyz/)
- [usehooks-ts](https://usehooks-ts.com/)
- [next-SEO](https://github.com/garmeeh/next-seo)

## Developer Tools 🧰

- [TypeScript](https://www.typescriptlang.org/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)

