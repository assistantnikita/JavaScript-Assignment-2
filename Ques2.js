function getValue(C) {
    const values = {
        'p': 'PrepBytes',
        'P': 'PrepBytes',
        'Z': 'Zenith',
        'z': 'Zenith',
        'E': 'Expert Coder',
        'e': 'Expert Coder',
        'D': 'Data Structure',
        'd': 'Data Structure'
    };

    return values[C] || 'Invalid Value';
}

console.log(getValue('E'));
