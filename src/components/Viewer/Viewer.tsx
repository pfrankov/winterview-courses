import Box from "@material-ui/core/Box";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-ignore
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

// @ts-ignore
import prettier from "prettier/standalone";
// @ts-ignore
import parserTypescript from "prettier/parser-typescript";
import Typography from "@material-ui/core/Typography";


export const Viewer = ({ block }: any) => {
    function objectsToString(obj: any) {
        return 'block = ' + JSON.stringify(Object.keys(obj).reduce((acc: any, key: string) => {
            if (typeof obj[key] === 'function') {
                acc[key] = "&$" + obj[key].toString() + "$&";
            } else {
                acc[key] = "&$" + JSON.stringify(obj[key]) + "$&";
            }

            return acc;
        }, {})).replace(/(?:"&\$)|(?:\$&")/g, '')
            .replace(/\\\\n/g, '_____n______')
            .replace(/\\n/g, '\n')
            .replace(/_____n______/g, '\\n');

    }

    let str = objectsToString(block);

    const code = prettier.format(str, { parser: 'typescript', plugins: [parserTypescript] }).replace(/^block = /, '').replace(/;\s?$/, '');

    return (
        <Box mt={1}>
            <Typography
                variant="caption"
                color="textPrimary"
            >Код текущего блока</Typography>
            <SyntaxHighlighter language="javascript" style={a11yLight} customStyle={{fontSize: 12}}>
                {code}
            </SyntaxHighlighter>
        </Box>
    )
};