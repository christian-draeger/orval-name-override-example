module.exports = {
  "first-api": {
    output: {
      mode: "tags-split",
      target: "proxy/first-api/api",
      schemas: "proxy/first-api/models",
      client: "react-query",
      mock: false,
      tsconfig: "tsconfig.json",
      override: {
      },
    },
    input: {
      target:
          "./open-api-specs/petstore1.yaml",
    },
  },
  "second-api": {
    output: {
      mode: "tags-split",
      target: "proxy/second-api/api",
      schemas: "proxy/second-api/models",
      client: "react-query",
      mock: false,
      tsconfig: "tsconfig.json",
      override: {
      },
    },
    input: {
      target: "./open-api-specs/petstore2.yaml",
    },
  },
};

export {};
