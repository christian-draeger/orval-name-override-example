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
        components: {
          schemas: {
            suffix: 'FirstApiDTO',
          },
        },
        operationName: (operation: any, route: string, verb: any) => `${verb}FirstApi_${operation.operationId}`,
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
        components: {
          schemas: {
            suffix: 'SecondApiDTO',
          },
        },
      },
      operationName: (operation: any, route: string, verb: any) => `${verb}SecondApi_${operation.operationId}`,
    },
    input: {
      target: "./open-api-specs/petstore2.yaml",
    },
  },
};

export {};
