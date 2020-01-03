
export class Sample {
    public name: string;
    public samplePath: string;
    public note: string;

    constructor(name: string, samplePath: string, note = 'C4') {
        this.name = name;
        this.note = note;
        this.samplePath = samplePath;
    }
}