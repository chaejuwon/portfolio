import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            backgroundPrimary: string,
            backgroundSecondary: string,
            backgroundThird: string,
            surface: string,
            textPrimary: string,
            textSecondary: string,
            border: string,
            accent: string,
            accentHover: string,
            danger: string,
            warning: string,
            success: string,
            muted: string,
            white: string,
            dark: string,
            tablePrimary: string,
            tableSecondary: string,
            menuColor: string,
            menuActiveColor: string,
            contentBackgroundColor: string,
            contentTextColor: string,
            contentOpBgColor: string,
        },
    }
}