import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths';
import magicalSvg from "vite-plugin-magical-svg";

// // https://velog.io/@qmflf556/Vitest-%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%BD%94%EB%93%9C
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        magicalSvg({
            target: 'react',
        })
    ],
    test: {
        environment: "jsdom",
        setupFiles: './src/utils/test/setupTests.ts'
    },
});