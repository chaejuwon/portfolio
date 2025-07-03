import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            white: string;
            gray: {
                100: string;
                900: string;
            },
            blue: string;
            red: string;
        },
        component: {
            button: {
                text: string;
                background: string;
            },
            page: {
                background: string;
                text: string;
            },
            border: string;
        }
    }
}