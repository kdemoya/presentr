/**
 * barcamp-redux | DevTools.jsx
 *
 * @author Kelvin De Moya <http://github.com/kdemoya>.
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import Inspector from 'redux-devtools-inspector';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
  >
    <Inspector />
  </DockMonitor>
);
