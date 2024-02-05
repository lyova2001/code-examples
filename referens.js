function createCircularReferences() {
    const obj1 = {};
    const obj2 = {};

    obj1.ref = obj2;
    obj2.ref = obj1;

    // These objects now have circular references
}

function simulateMemoryLeak() {
    createCircularReferences();
    // The circular references prevent these objects from being garbage collected
}

simulateMemoryLeak();
