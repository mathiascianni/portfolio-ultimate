export function textFormatter(description) {
    return description.split(/(\*\*.*?\*\*)/).map((part) => ({
        text: part.replace(/\*\*/g, ""),
        highlighted: part.startsWith("**") && part.endsWith("**")
    }));
}