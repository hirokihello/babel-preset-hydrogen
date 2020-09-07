# preset hydrogen

it is preset for babel.

#### usase

```
npm i babel-loader @hirokihello/babel-preset-hydrogen -D
```

add your webpack.config

```
        use: [
          { loader: "babel-loader",
            options: {
              "presets": ["@hirokihello/babel-preset-hydrogen"]
            }
          },
        ],
```
