import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    // preset: 'ts-jest',
    // transform: {
    //     '^.+\\.tsx?$': 'babel-jest',
    // },
    preset: 'jest-puppeteer',
    transform: {
            '^.+\\.tsx?$': "ts-jest",
    }
  };
  export default config;
