# preset hydrogen

it is preset for babel.

#### usase

```
npm i babel-loader @hirokihello/presets-hydrogen -D
```

add your webpack.config

```
        use: [
          { loader: "babel-loader",
            options: {
              "presets": ["@hirokihello/presets-hydrogen"]
            }
          },
        ],
```
