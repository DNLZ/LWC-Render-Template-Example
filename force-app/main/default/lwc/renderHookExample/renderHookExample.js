import { LightningElement, track } from 'lwc';
import {default as mainTemplate} from './renderHookExample.html'
import {default as anotherTemplate} from './tempates/anExampleTemplate.html'

export default class RenderTest extends LightningElement {

    userName = 'User';

    @track useAnotherTemplate = false;

    render() {
        return this.useAnotherTemplate ? mainTemplate : anotherTemplate;
    }

    handleToggleButtonPress() {
        this.useAnotherTemplate = !this.useAnotherTemplate;
    }
}