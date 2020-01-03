import * as Tone from 'tone';

export class Instrument {
    public name: string = '';
    public synth: Tone.Instrument;
    public effects: any[] = [];

    constructor(name: string, instr: Tone.Instrument, effects: any[] = []) {
        this.name = name;
        this.synth = (instr || new Tone.PluckSynth()).toMaster();
        this.effects = effects;

        if (effects.length) {
            this.addEffects();
        }
    }

    addEffect(effect) {
        this.synth.connect(effect.toMaster());
    }

    addEffects() {
        this.effects.forEach(this.addEffect.bind(this));
    }

    removeEffect(effect) {
        this.synth.disconnect(effect);
    }

    removeEffects() {
        this.effects.forEach(this.removeEffect.bind(this));
    }

    sequence(seq: string[], duration = '4n') {
        return new Tone.Sequence((time, note) => {
            if (note) this.play(note, '8n');
        }, seq, duration);
    }

    play(note = 'C5', duration = '8n') {
        this.synth.triggerAttackRelease(note, duration);
    }
}