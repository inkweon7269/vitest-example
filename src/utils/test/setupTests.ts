import {afterEach, afterAll, vi, beforeAll} from 'vitest';
import '@testing-library/jest-dom/vitest';
import {server} from "@/utils/test/server";

beforeAll(() => {
    console.log('beforeAll');
    // 서버 구동
    server.listen();
})

afterEach(() => {
    console.log('afterEach');
    vi.clearAllMocks();
    // 모킹 초기화
    server.resetHandlers();
});

afterAll(() => {
    console.log('afterAll');
    vi.resetAllMocks();
    server.close()
});