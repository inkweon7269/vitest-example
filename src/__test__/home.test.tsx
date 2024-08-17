import {describe, expect, it} from "vitest";
import {render} from "@testing-library/react";
import Title from "@/components/Title";

describe("Title", () => {
    it('toMatchSnapshot', async ()=> {
        const { container } = await render(<Title />)
        expect(container).toMatchSnapshot()
    })
});
