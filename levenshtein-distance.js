function levenshtein(str1, str2) {
    // str1 = str1.toUpperCase();
    // str2 = str2.toUpperCase();

    const m = str1.length;
    const n = str2.length;
    const matrix = [];

    for (let i = 0; i <= m; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= n; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[m][n];

}

module.exports = levenshtein;