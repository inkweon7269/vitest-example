import {render as rtlRender, RenderOptions} from '@testing-library/react';
import userEvent, {UserEvent} from '@testing-library/user-event';
import {PropsWithChildren, ReactElement} from "react";
import {AppStore, makeStore, RootState} from "@/store";
import {Provider} from "react-redux";

type RenderResult = ReturnType<typeof rtlRender> & { user: UserEvent };

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: AppStore
}

export const renderWithProviders = (
    ui: ReactElement, extendedRenderOptions: ExtendedRenderOptions = {}
): RenderResult => {
    const user = userEvent.setup();
    const {
        store = makeStore(),
        ...renderOptions
    } = extendedRenderOptions

    function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    const renderResult = rtlRender(ui, {
        wrapper: Wrapper,
        ...renderOptions
    });

    return {
        user,
        ...renderResult
    };
};