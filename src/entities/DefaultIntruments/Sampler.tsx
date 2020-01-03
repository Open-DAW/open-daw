import * as Tone from 'tone';
import { Instrument } from '../Instrument';
import { Sample } from '../Sample';

export class Sampler extends Instrument {
    public sample: Sample;

    constructor(sample: Sample, effects: any[] = []) {
        const sampler = new Tone.Sampler({
            'C5': sample.samplePath,
        }, function () {
            console.log('loaded', arguments);
        }, 'samples');

        super(sample.name, sampler, effects);
        this.sample = sample;
    }

    play(note = 'C5') {
        this.synth.triggerAttack(note);
    }
}