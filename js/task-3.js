function getElementWidth(content, padding, border) {
    let contentWidts = parseFloat(content);
    let paddingWidts = parseFloat(padding);
    let borderWidts = parseFloat(border);
    return contentWidts + paddingWidts * 2 + borderWidts * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
