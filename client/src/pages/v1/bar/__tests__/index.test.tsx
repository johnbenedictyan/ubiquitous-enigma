import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';

import { V1BarChartPage } from '..';

const renderer = createRenderer();

describe('V1 Bar Chart Page', () => {
    it('should render and match the snapshot', () => {
        renderer.render(<V1BarChartPage />);
        const renderedOutput = renderer.getRenderOutput();
        expect(renderedOutput).toMatchSnapshot();
    });
});
