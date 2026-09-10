import { defineConfig } from "vitest/config";

const configuration = defineConfig({
    test: { passWithNoTests: true },
});

export default configuration;
