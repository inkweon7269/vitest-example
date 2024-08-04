import {describe, expect, it} from "vitest";
import Home from "@/app/page";
import {screen} from "@testing-library/dom";
import {renderWithProviders} from "@/utils/test/render";

describe("LoginForm", () => {
    it('테스트 결과를 확인합니다.', async () => {
        renderWithProviders(<Home />);
        const text = await screen.findByText('Vitest Example!!!');
        expect(text).toBeInTheDocument();
    });
});
