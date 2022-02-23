import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the myextension extension.
 */
async function activate (app:JupyterFrontEnd) {
	console.log('JupyterLab extension myextension is activated!');
	
    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The myextension server extension appears to be missing.\n${reason}`
        );
      });
	  
	try {
		const data = await requestAPI<any>('gettest');
		console.log(data);
	} catch (reason) {
		console.error(`Error on GET /myextension/gettest\n${reason}`);
	}	  
  } 
 
const extension: JupyterFrontEndPlugin<void> = {
  id: 'myextension:extension',
  autoStart: true,
  activate: activate
};
 
export default extension; 
