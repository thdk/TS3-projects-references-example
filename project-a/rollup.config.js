import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'app-a.ts',
    output: {
        file: 'app-a.js',
        format: 'iife'
    },
    plugins: [
        typescript()
    ]
};