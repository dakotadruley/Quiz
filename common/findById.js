export default function findById(array, id) {
    let result = null;

    array.forEach(arrayItem => {
        if (id === arrayItem.id) {
            result = arrayItem; } 
    });
    return result;
}