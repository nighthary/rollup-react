
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace'

export default {
    input: 'index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs', // 'amd', 'cjs', 'es', 'iife' or 'umd'
    },
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' 
        }),
        commonjs({
            include: [
                'node_modules/**'
            ],
            exclude: [
                'node_modules/process-es6/**'
            ],
            namedExports: {
                'node_modules/react/index.js': [
                    'Children', 
                    'Component', 
                    'PropTypes', 
                    'createElement'
                ],
                "node_modules/immutable/dist/immutable.js": [
                    "fromJS",
                    "Map"
                ]
            }
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}