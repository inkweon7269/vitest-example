import {afterEach, describe, expect, it, vi} from "vitest";
import {screen} from "@testing-library/dom";

import TextField from "@/components/TextField";
import {cleanup, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TextField", () => {
    afterEach(() => {
        cleanup();
    });


    it('기본 placeholder "텍스트를 입력해 주세요."가 노출됩니다.', async () => {
        render(<TextField />);
        const input = screen.getByPlaceholderText('텍스트를 입력해 주세요.');
        expect(input).toBeInTheDocument();
    });

    it('텍스트를 입력하면 onChange prop으로 등록한 함수가 호출된다.', async () => {
        const spy = vi.fn();
        render(<TextField onChange={spy} />);
        const input = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

        await userEvent.type(input, 'test');
        expect(spy).toHaveBeenCalledWith('test');
    })
});
