import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme.util";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Fonts */}
                {/* Agutina Font*/}
                <link
                    rel="preload"
                    href="/fonts/Agutina 400.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin=""
                />
                {/* Rubik Font*/}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
