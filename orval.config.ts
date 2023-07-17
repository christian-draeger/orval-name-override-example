module.exports = {
  "first-api": {
    output: {
      mode: "tags-split",
      workspace: "./proxy/", // leads to barrel file generation in the workspace root
      target: "first-api/api",
      schemas: "first-api/models",
      client: "react-query",
      mock: false,
      tsconfig: "tsconfig.json",
      override: {
        title: (title) => `${title}FirstApi`,
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
      workspace: "./proxy/",
      target: "second-api/api",
      schemas: "second-api/models",
      client: "react-query",
      mock: false,
      tsconfig: "tsconfig.json",
      override: {
        title: (title) => `${title}SecondApi`,
      },
    },
    input: {
      target: "./open-api-specs/petstore2.yaml",
    },
  },
};

export {};
