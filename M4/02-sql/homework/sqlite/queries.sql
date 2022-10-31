-- BIRTHYEAR
SELECT * FROM movies WHERE year = 2000;
-- 1982
SELECT COUNT(*) FROM movies WHERE year = 1982;
-- STACKTORS
SELECT * FROM actors WHERE first_name LIKE '%stack%';
-- FAME NAME GAME
SELECT first_name, last_name, COUNT(*) as total 
FROM actors 
GROUP BY LOWER(first_name), LOWER(last_name)
ORDER BY total DESC
LIMIT 10;
-- PROLIFIC
