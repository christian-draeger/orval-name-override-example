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

## Solution
### 🤔 1. Generate models and react-query hooks without name clashes
💡Putting the output of the generated models and react-query hooks in different folders.
⚠️ generated model and hook names exists twice (per spec).

### 🤔 2. Create barrel file exports without clashes
1. 💡 create barrel file on output root ==> set workspace in orval.config.ts
2. 💡 suffix the name of the generated models ==> output.override.components.suffix in orval.config.ts
3. 💡 override the name of the generated hooks ==> output.override.operationName in orval.config.ts

#### Error
Since adding a suffix to the output titles doesn't seem to work the genreated barrel file will clash because of export name duplications:
<img width="1204" alt="image" src="https://github.com/christian-draeger/orval-name-override-example/assets/55869787/32029e62-e552-4586-a471-19d17cab763a">
