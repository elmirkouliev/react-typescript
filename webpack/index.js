const fs = require("fs");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const fontLoaderName = "fonts/[name].[ext]";
const hashDate = Date.now();
const appDirectory = "./app";
const platformDirectory = `${appDirectory}/react/views/`;

// Generates plugins for webpack
const plugins = env => {
    // Base plugins
    let arr = [
        new AssetsPlugin({
            path: "./public/build",
            filename: "assets.json",
            prettyPrint: false,
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            title: `Traveler ${env == "dev" ? "Dev" : ""}`,
        }),
    ];

    if (env === "dev") {
        arr.push(
            new webpack.DefinePlugin({
                "process.env": { NODE_ENV: JSON.stringify("development") },
            })
        )
    }

    if (env === "production") {
        arr.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: { warnings: false },
                sourceMap: false,
            })
        )

        // arr.push(new ExtractTextPlugin('styles.css'))

        arr.push(
            new webpack.DefinePlugin({
                "process.env": { NODE_ENV: JSON.stringify("production") },
            })
        );
    }

    return arr;
};

// Define output obj. for webpack
const output = env => {
    const jsPath = `js/[name].js`;

    return {
        path: path.resolve(`public/build/`),
        filename: jsPath,
        chunkFilename: jsPath,
        publicPath: "/",
    };
};

//Pretty self explanatory
const rules = env => {
    return [
        // Sass
        // {
        //     test: /\.scss$/,
        //     use: ExtractTextPlugin.extract({
        //         fallback: "style-loader",
        //         use: ["css-loader", "sass-loader"]
        //     })
        // },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: "style-loader", // creates style nodes from JS strings
                },
                {
                    loader: "css-loader", // translates CSS into CommonJS
                },
                {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        includePaths: ["node_modules"],
                    },
                },
            ],
        },
        // Typescript
        {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
        },
        // Babel
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["env", "es2015", "react"],
                    plugins: [
                        require("babel-plugin-transform-object-rest-spread"),
                        require("babel-plugin-transform-react-jsx"),
                        require("babel-plugin-transform-class-properties"),
                    ],
                },
            },
        },
        {
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: "graphql-tag/loader",
        },
        {
            test: /\.(ttf|eot|woff|woff2|gif|svg)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: fontLoaderName,
                    },
                },
            ],
        },
    ];
};

const externals = env => {
    if (env === "dev") {
        //Used for enzyme — http://airbnb.io/enzyme/docs/guides/webpack.html
        return {
            "react/addons": true,
            "react/lib/ExecutionEnvironment": true,
            "react/lib/ReactContext": true,
        };
    } else {
        return {};
    }
};

/**
 * Exports webpack JSON config
 * @param  {String} `env` The environment we're in
 * @return {Object} Webpack confing
 */
module.exports = (env = "dev") => ({
    entry: { root: ["./src/app/root.js"] },
    output: output(env),
    plugins: plugins(env),
    mode: env == 'dev' ? 'development' : 'production',
    watch: env === "dev",
    devtool: env === "dev" ? "eval-source-map" : "source-map",
    module: {
        rules: rules(env),
    },
    devServer: { historyApiFallback: true },
    resolve: {
        alias: {
            Sass: path.resolve(__dirname, "src/sass/"),
        },
        extensions: [".ts", ".tsx", ".js", ".scss"],
        // Files in these directory can be required without a relative path
        modules: ["node_modules", "./src", "./"],
    },
    externals: externals(env),
});