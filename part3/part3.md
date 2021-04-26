## DevTools - Debugging
1. document.getElementById("num*").value is yielding a string. Because num1 and num2 contained strings not integers, attempting to 'add' them in calculateSum resulted in a concatenated string.
2. Adding parseInt() around the document.getElementById would attempt to cast the input to an integer thus solving the issue.

## DevTools- Network Tab
3. citylots.json
4. part2.json
5. 11.7 MB
6. 13.89 s
7. Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36
8. Apache
9. Tue, 26 Jan 2021 22:14:13 GMT
10. application/json
11. fetchData()