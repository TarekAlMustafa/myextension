import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the binderTest extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'binderTest:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension binderTest is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The binderTest server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
