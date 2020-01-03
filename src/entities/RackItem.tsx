import * as Tone from 'tone';
import { Instrument } from './Instrument';

export class RackItem {
    public name: string = '';
    public instrument: Instrument;
    public isSequencing = false;
    public activeSequence: any;

    constructor(name: string, instrument: Instrument) {
        this.name = name;
        this.instrument = instrument;
    }

    play(note = 'C5', duration = '8n') {
        this.instrument.play(note, duration);
    }

    stopSequence() {
        if (this.isSequencing && this.activeSequence) {
            this.activeSequence.stop();
            this.isSequencing = false;
        }
    }

    sequence(seq: string[], duration = '8n') {
        if (this.isSequencing) {
            this.activeSequence.stop();
            this.activeSequence.start(0);
            Tone.Transport.start();
        } else {
            this.isSequencing = true;
            this.activeSequence = this.instrument.sequence(seq, duration);
            this.activeSequence.start(0);
            Tone.Transport.start();
        }

    }
}