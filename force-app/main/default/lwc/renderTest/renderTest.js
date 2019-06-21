import { LightningElement, track } from 'lwc';
import {default as renderTestTemplate} from './renderTest.html'
import {default as word} from './tempates/word.html'

export default class RenderTest extends LightningElement {

    name = 'Dan';

    @track defaultTemplate = true;

    render() {
        return this.defaultTemplate ? renderTestTemplate : word;
    }

    handleToggleButtonPress() {
        this.defaultTemplate = !this.defaultTemplate;
    }
}