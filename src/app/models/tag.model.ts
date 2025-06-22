export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CCPP = new Tag('C/C++', 'yellow');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly REACT = new Tag('React', 'purple');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly GO = new Tag('Go', 'indigo');
    static readonly KOTLIN = new Tag('Kotlin', 'gold');

    constructor(private readonly key: string, public readonly color: string) {

    }

    toString(): string {
        return this.key;
    }
}
