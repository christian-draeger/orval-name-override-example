# Orval Name Override Example

An Example Project to showcase how to avoid name conflicts with Orval.
This Project generates models and clients based on 2 different open-api specs, which both have a models and operations
with the same name.

The goal is to be able to:

1. Generate models and react-query hooks without name clashes
1. Create barrel file exports without clashes

## Run Orval

```shell
npm run generate-api
```

## Solutions
### 🤔 1. Generate models and react-query hooks without name clashes
💡Putting the output of the generated models and react-query hooks in different folders.
⚠️ generated model and hook names exists twice (per spec) which would lead to clashes in generated barrel files.

### 🤔 2. Create barrel file exports without clashes
💡tbd
