module.exports = function() {
  return {
    plugins: [
      [
        "@babel/transform-react-jsx",
        {
          "pragma": "H2.h"
        }
      ]
    ]
  };
}
