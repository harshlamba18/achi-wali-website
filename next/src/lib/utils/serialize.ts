const safeJSONStringify = (obj: any): string => {
    try {
        return JSON.stringify(obj, null, 4);
    } catch {
        return "[Unserializable data]";
    }
}

export { safeJSONStringify };

