import { LightningElement, track } from 'lwc';
import {default as mainTemplate} from './renderTest.html'
import {default as testTemplate} from './tempates/testTemplate.html'

export default class RenderTest extends LightningElement {

    testProperty = 'User';

    @track defaultTemplate = true;

    render() {
        return this.defaultTemplate ? mainTemplate : testTemplate;
    }

    handleToggleButtonPress() {
        this.defaultTemplate = !this.defaultTemplate;
    }
}