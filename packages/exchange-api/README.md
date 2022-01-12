# Exchange API

Use [currency-api](https://github.com/fawazahmed0/currency-api) for exchange currency.

## Usage

```typescript
import exchange from 'exchange-api';

// Exchange 1000 KRW to USD(default)
const { rate, amount } = await exchange(1000);

// Exchange 10 USD to KRW
const { rate, amount } = await exchange(10, 'usd', 'krw');

// Exchange 1000 USD to KRW on 2021-01-01
const { rate, amount } = await exchange(10, 'usd', 'krw', '2022-01-01');
const { rate, amount } = await exchange(10, 'usd', 'krw', new Date('2022-01-01'));
```

## License

MIT &copy; [PtCookie](https://blog.ptcookie.dev/)
