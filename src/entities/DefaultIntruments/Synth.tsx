import * as Tone from 'tone';
import { Instrument } from '../Instrument';

export class Synth extends Instrument {
    constructor(name: string) {
        const synth = new Tone.Synth();
        super(name, synth);
    }

    play(note = 'C5', release = '8n') {
        this.synth.triggerAttackRelease(note, release);
    }
}