const safeJSONStringify = (obj: unknown): string => {
    try {
        return JSON.stringify(obj, null, 4);
    } catch {
        return "[Unserializable data]";
    }
}

export { safeJSONStringify };

