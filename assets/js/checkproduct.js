let count = 0;
const regex = /product\d+/; 

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (regex.test(key)) {
        count++;
    }
}