import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'app-b.ts',
    output: {
        file: 'app-b.js',
        format: 'iife'
    },
    plugins: [
        typescript()
    ]
};