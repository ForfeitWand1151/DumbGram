@echo off

echo.
echo Enviando DumbGram para o GitHub...
echo.

git add .

set /p msg=Mensagem do commit: 

git commit -m "%msg%"

git push origin main

echo.
echo Upload concluido!
pause