{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function calculateBMI() \{\
  const weight = parseFloat(document.getElementById('weight').value);\
  const height = parseFloat(document.getElementById('height').value);\
  \
  if (weight > 0 && height > 0) \{\
    const bmi = weight / (height * height);\
    const resultText = `Your BMI is $\{bmi.toFixed(2)\}.`;\
    document.getElementById('result').textContent = resultText;\
  \} else \{\
    document.getElementById('result').textContent = "Please enter valid values.";\
  \}\
\}\
}