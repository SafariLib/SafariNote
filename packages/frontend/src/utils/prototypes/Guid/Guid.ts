class Guid {
    #value: string;
    valueOf = () => this.#value;

    constructor() {
        this.#value = Guid.generate();
    }

    static regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    static generate = () =>
        '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
            (Number(c) ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))).toString(16),
        );
}

export default Guid;
