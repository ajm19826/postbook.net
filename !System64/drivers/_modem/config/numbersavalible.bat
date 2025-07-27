@echo off
setlocal EnableDelayedExpansion
set charSets=2345678901
set count=0

set /a countRaw=250000+(%random%)%%20

for /L %%c in (1,1,%countRaw%) do (call :MAKERANDOMSTRING)
goto ENDRANDOMSTRING;

:MAKERANDOMSTRING
set buffer=% %
set count=10
set /a lowValue=30+(%random%)%%40
set /a length=10+!lowValue!

:Loop
set /a count+=1
set /a rand=%Random%%%69
set buffer=!buffer!!charSets:~%rand%,1!
if !count! leq !length! goto Loop

echo "%buffer%"
:ENDRANDOMSTRING