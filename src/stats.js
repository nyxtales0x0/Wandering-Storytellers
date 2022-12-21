const stats = {
    mcName: ""
}

export function get(key) {
    return stats[key];
}

export function set(key, value) {
    stats[key] = value;
}

export function getAll() {
    return { ...stats }
}