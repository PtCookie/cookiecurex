# CurEx CLI

CLI application for CookieCurEx.

## Usage

```shell
$ yarn run curex --help # or yarn curex --help
Usage: curex [options]

Options:
  -V, --version          output the version number
  -f, --from <currency>  exchange currency from... (default: "krw")
  -t, --to <currency>    exchange currency to... (default: "usd")
  -d, --date <date>      exchange currency of specific date. (default: "latest")
  -a --amount <amount>   exchange amount.
  -h, --help             display help for command

$ yarn run curex -f usd -t krw -a 1000 -d 2022-01-01

      usd to krw at 2022-01-01 [Rate : 1188.880827] :

      usd : 1000
      krw : 1188880.827
```

## License

MIT &copy; [PtCookie](https://blog.ptcookie.dev/)
